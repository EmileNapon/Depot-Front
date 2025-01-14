# urls.py
from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import CustomTokenObtainPairView, RegisterView, UserDetailView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/<int:pk>/', UserDetailView.as_view(), name='user-detail'),  # Optionnel pour récupérer un utilisateur
    path('formation/list_users/', views.list_users, name='list_users'),
]



