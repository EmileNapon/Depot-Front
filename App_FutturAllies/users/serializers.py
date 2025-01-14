from rest_framework import serializers
from .models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'nom', 'prenom', 'phone_number', 'password', 'password2', 'role', 'profile_pic']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Les mots de passe ne correspondent pas."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        role = validated_data.get('role', 'etudiant')
        if role == 'admin':
            user = CustomUser.objects.create_superuser(**validated_data)
        elif role == 'manager':
            user = CustomUser.objects.create_manager(**validated_data)
        else:
            user = CustomUser.objects.create_user(**validated_data)
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'nom', 'prenom', 'phone_number', 'role', 'is_active', 'is_staff']

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Ajout des informations de l'utilisateur au token
        token['id'] = user.id
        token['prenom'] = user.prenom
        token['nom'] = user.nom
        token['role']=user.role
        token['profile_pic'] = user.profile_pic.url if user.profile_pic else None  # Optionnel

        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        user = self.get_user(attrs['email'])
        
        if user:
            data.update({
                'id': user.id,
                'nom': user.nom,
                'prenom': user.prenom,
                "role":user.role,
                'email': user.email,
                'password': user.password  # Ne pas envoyer le mot de passe en clair
            })
        return data
    
    def get_user(self, email):
        try:
            return CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError("L'utilisateur avec cet email n'existe pas.")