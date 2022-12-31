from django.contrib import admin

from iseok.models.user.user_email_verification import UserEmailVerification


@admin.register(UserEmailVerification)
class UserEmailVerificationAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "email", "token", "verified_at")

    search_fields = ["id", "email", "token", "ip_address"]
