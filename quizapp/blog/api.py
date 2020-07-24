from .models import Blog
from rest_framework import viewsets, permissions, status, generics
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from .serializers import UserSerializer, UserSerializerWithToken, BlogSerializer


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BlogViewSet(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated
    ]
    serializer_class = BlogSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

@api_view(["DELETE"])
@csrf_exempt
@permission_classes([permissions.IsAuthenticated])
def delete_blog(request, blog_id):
    try:
        blog = Blog.objects.get(id=blog_id)
        blog.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except ObjectDoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
    except Exception:
        return JsonResponse({'error': 'Something went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


