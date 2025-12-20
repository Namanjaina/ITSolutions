from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Contact
from .serializers import ContactSerializer
from rest_framework.response import Response
from rest_framework import status

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        print("Incoming data:", request.data)   # DEBUG LINE
        return super().create(request, *args, **kwargs)
