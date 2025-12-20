from django.contrib import admin
from django.utils.html import mark_safe
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "short_description", "image_preview")
    search_fields = ("name", "description")
    ordering = ("id",)

    def short_description(self, obj):
        return obj.description[:50] + "..."

    def image_preview(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="80" />')
        return "(No Image)"

# Debug print to confirm admin loaded
print(">>> Projects Admin Loaded")

admin.site.register(Project, ProjectAdmin)
