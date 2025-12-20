from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Newsletter
from .serializers import NewsletterSerializer

class NewsletterCreateView(generics.CreateAPIView):
    queryset = Newsletter.objects.all()
    serializer_class = NewsletterSerializer
