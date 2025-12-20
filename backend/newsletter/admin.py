from django.contrib import admin
from .models import Newsletter

@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ("id", "email", "subscribed_at")
    search_fields = ("email",)
    ordering = ("-subscribed_at",)
