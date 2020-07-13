from .models import Blog
from .serializers import BlogSerializer
from rest_framework import generics

class BlogListCreate(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer