# views.py
from rest_framework import generics
from .models import CustomUser
from .serializers import CustomTokenObtainPairSerializer, RegisterSerializer, UserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


# Vue pour l'inscription
class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

# Vue pour récupérer les détails de l'utilisateur (si besoin)
class UserDetailView(generics.RetrieveAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

# Vue personnalisée pour le token d'authentification
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_users(request):
    user = CustomUser.objects.all()  # Récupérer toutes les offres
    serializer = UserSerializer(user, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)   