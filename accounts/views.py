from rest_framework import generics
from .models import User
from .serializers import RegisterSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from rest_framework.views import APIView
from rest_framework.response import Response

class RegisterView(generics.CreateAPIView):

    queryset = User.objects.all()

    serializer_class = RegisterSerializer

class UserListView(generics.ListAPIView):

    queryset = User.objects.all()

    serializer_class = UserSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        
        if self.request.user.role != 'admin':
            raise PermissionDenied(
                "Only admins can view users"
            )
        return User.objects.all()
class MeView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        serializer = UserSerializer(
            request.user
        )

        return Response(
            serializer.data
        )