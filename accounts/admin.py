from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):

    fieldsets = UserAdmin.fieldsets + (
        ('Custom Role', {
            'fields': ('role',),
        }),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Custom Role', {
            'fields': ('role',),
        }),
    )