from django.db import models

class Blog(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    topic = models.CharField(max_length=100)
    blog = models.CharField(max_length=500)
    pub_date = models.DateTimeField(auto_now_add=True)