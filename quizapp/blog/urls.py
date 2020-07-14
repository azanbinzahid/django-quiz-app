# from rest_framework import routers
# from .api import BlogViewSet, current_user, UserList

# router = routers.DefaultRouter()
# router.register('api/blog', BlogViewSet, 'blog')

# urlpatterns = router.urls

from django.urls import path
from .api import current_user, UserList, BlogViewSet

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('api/blog/', BlogViewSet.as_view())
]