from __future__ import annotations
import typing

from django.db import models
from django.utils.translation import gettext as _

from ..base import Timestmped

if typing.TYPE_CHECKING:
    from .user import User

_T_co = typing.TypeVar("_T_co", bound=models.Model, covariant=True)


class UserEmailVerificationQuerySet(models.QuerySet[_T_co]):
    def user(self, user: "User"):
        return self.filter(user=user)

    def email(self, email: str):
        return self.filter(email=email)

    def last_verified(self):
        return self.order_by("-verified_at").last()


class UserEmailVerification(Timestmped):

    user: "User" = models.ForeignKey(
        to="User", on_delete=models.CASCADE, verbose_name=_("인증 요청 유저")
    )
    email = models.EmailField(max_length=128, verbose_name=_("이메일"))
    token = models.CharField(
        max_length=128, null=True, blank=True, verbose_name=_("인증 토큰")
    )
    ip_address = models.GenericIPAddressField(
        null=True, blank=True, verbose_name=_("인증 IP 주소")
    )
    verified_at = models.DateTimeField(null=True, blank=True, verbose_name=_("인증 시각"))

    if typing.TYPE_CHECKING:
        objects: UserEmailVerificationQuerySet[UserEmailVerification]

    objects = UserEmailVerificationQuerySet.as_manager()

    class Meta:
        db_table = "user_email_verification"
        verbose_name = "User Email Verification"
        verbose_name_plural = "User Email Verifications"
