from django.db import models
from PIL import Image

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        # Crop/Resize to 450 x 350
        img = img.resize((450, 350))
        img.save(self.image.path)
