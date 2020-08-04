from .models import Blog
from .serializers import BlogSerializer
from rest_framework import viewsets, permissions

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    
    serializer_class = BlogSerializer