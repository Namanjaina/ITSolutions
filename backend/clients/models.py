from django.db import models
from PIL import Image

class Client(models.Model):
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to="clients/")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        img = img.resize((450, 350))
        img.save(self.image.path)
