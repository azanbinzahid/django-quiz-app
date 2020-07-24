from django.urls import path
from .api import current_user, UserList, BlogViewSet, delete_blog

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('api/blog/', BlogViewSet.as_view()),
    path('api/blog/<int:blog_id>/', delete_blog),
]
