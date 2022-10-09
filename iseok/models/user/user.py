from __future__ import annotations
import typing

from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.utils.translation import gettext as _


from ..base import Timestmped, SoftDeletable, NotSoftDeletedManager

from .user_email_verification import UserEmailVerification

_T_co = typing.TypeVar("_T_co", bound=models.Model, covariant=True)


class UserManager(BaseUserManager, NotSoftDeletedManager[_T_co]):
    def create_user(self, username, user_type, name, sex, date_of_birth, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """

        user = self.model(
            user_type=user_type,
            username=username,
            name=name,
            sex=sex,
            date_of_birth=date_of_birth,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(
        self,
        username,
        user_type,
        name,
        sex,
        date_of_birth,
        password=None,
    ):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            username=username,
            user_type=user_type,
            name=name,
            sex=sex,
            date_of_birth=date_of_birth,
            password=password,
        )
        user.is_admin = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin, Timestmped, SoftDeletable):
    class Type(models.TextChoices):
        STUDENT = "student", _("학생")
        TEACHER = "teacher", _("교사")

    class Sex(models.TextChoices):
        MALE = "male", _("남성")
        FEMALE = "female", _("여성")

    user_type: "Type" = models.CharField(
        choices=Type.choices, max_length=16, verbose_name=_("유저 종류")
    )

    username = models.CharField(max_length=32, unique=True, verbose_name=_("아이디"))

    name = models.CharField(max_length=16, verbose_name=_("이름"))
    sex: "Sex" = models.CharField(
        choices=Sex.choices, max_length=16, null=True, blank=True, verbose_name=_("성별")
    )

    date_of_birth = models.DateField(null=True, blank=True, verbose_name=_("생년월일"))

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    if typing.TYPE_CHECKING:
        objects: UserManager[User]

    objects = UserManager()

    @property
    def email(self):
        return UserEmailVerification.objects.user(self).last_verified()

    @property
    def is_staff(self):
        return self.is_admin

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["user_type", "name", "sex", "date_of_birth"]

    class Meta:
        db_table = "user"
        verbose_name = "User"
        verbose_name_plural = "Users"
