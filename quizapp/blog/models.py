from django.db import models
from django.contrib.auth.models import User

class Blog(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null = True)
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=500)
    category = models.CharField(max_length=100, default = "General")
    datestamp = models.DateTimeField(auto_now_add=True)