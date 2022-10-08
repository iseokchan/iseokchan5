from django.db import models
from django.utils.translation import gettext as _


class Timestmped(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("생성 시각"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("수정 시각"))

    class Meta:
        abstract = True
