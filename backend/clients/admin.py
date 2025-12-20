from django.contrib import admin
from .models import Client
from django.utils.html import mark_safe

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "designation", "short_description", "image_preview")
    search_fields = ("name", "designation")
    list_filter = ("designation",)

    def short_description(self, obj):
        return obj.description[:50] + "..."

    def image_preview(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="70" />')
        return ""

    image_preview.short_description = "Preview"
