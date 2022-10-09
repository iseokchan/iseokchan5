from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.contrib.auth.models import Group
from django.utils.translation import gettext as _

from iseok.models.user.user import User


class UserCreationForm(forms.ModelForm):
    """A form for creating new users. Includes all the required
    fields, plus a repeated password."""

    password1 = forms.CharField(label=_("비밀번호"), widget=forms.PasswordInput)
    password2 = forms.CharField(label=_("비밀번호 확인"), widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ["date_of_birth"]

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's
    disabled password hash display field.
    """

    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = [
            "password",
            "name",
            "sex",
            "date_of_birth",
            "is_active",
            "is_admin",
        ]


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = [
        "username",
        "user_type",
        "name",
        "sex",
        "date_of_birth",
        "is_active",
        "is_admin",
    ]
    list_filter = ["user_type", "is_active", "is_admin"]
    fieldsets = [
        [None, {"fields": ["password"]}],
        [_("개인정보"), {"fields": ["name", "sex", "date_of_birth"]}],
        [_("활성"), {"fields": ["is_active"]}],
        [_("권한"), {"fields": ["is_admin"]}],
    ]
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (
            None,
            {
                "classes": ["wide"],
                "fields": [
                    "user_type",
                    "username",
                    "password1",
                    "password2",
                    "name",
                    "sex",
                    "date_of_birth",
                    "is_active",
                    "is_admin",
                ],
            },
        ),
    )
    # search_fields = ("email",)
    # ordering = (,)
    filter_horizontal = ()


admin.site.unregister(Group)
