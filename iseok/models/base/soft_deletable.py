from __future__ import annotations

import typing

from django.db import models
from django.utils.translation import gettext as _

_T_co = typing.TypeVar("_T_co", bound=models.Model, covariant=True)


class SoftDeletableQuerySet(models.QuerySet[_T_co]):
    def not_deleted(self):
        return self.filter(deleted_at__isnull=True)

    def deleted(self):
        return self.filter(deleted_at__isnull=False)


class NotSoftDeletedManager(models.Manager[_T_co]):
    def get_queryset(self):
        return SoftDeletableQuerySet(self.model, using=self._db).not_deleted()


class SoftDeletedManager(models.Manager[_T_co]):
    def get_queryset(self):
        return SoftDeletableQuerySet(self.model, using=self._db).deleted()


class SoftDeletableManager(models.Manager[_T_co]):
    ...


class SoftDeletable(models.Model):
    deleted_at = models.DateTimeField(null=True, default=None, verbose_name=_("삭제 시각"))

    if typing.TYPE_CHECKING:
        objects: NotSoftDeletedManager[SoftDeletable]
        deleted_objects: SoftDeletedManager[SoftDeletable]

    objects = NotSoftDeletedManager()
    deleted_objects = SoftDeletedManager()

    all_objects = SoftDeletableManager()

    class Meta:
        abstract = True
