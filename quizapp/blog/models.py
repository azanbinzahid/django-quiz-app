from django.db import models

class Blog(models.Model):
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=500)
    category = models.CharField(max_length=100, default = "General")
    datestamp = models.DateTimeField(auto_now_add=True)