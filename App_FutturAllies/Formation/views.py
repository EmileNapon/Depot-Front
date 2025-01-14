
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from Formation.models import Domaine, Module, Cours, Chapitre,Contenu
from .serializers import ChapitreSerializer, ContenuSerializer, CoursSerializer, DomaineSerializer, ModuleSerializer, WebinarEnrollmentSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
###################################################################################################
@api_view(['POST'])
def create_domaine(request):
    if request.method == 'POST':
        serializer = DomaineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_domaines(request):
    domaines = Domaine.objects.all()  # Récupérer toutes les offres
    serializer = DomaineSerializer(domaines, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)


###################################################################################################
@api_view(['POST'])
def create_module(request):
    if request.method == 'POST':
        serializer = ModuleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   
@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_modules(request):
    modules = Module.objects.all()  # Récupérer toutes les offres
    serializer = ModuleSerializer(modules, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)

###################################################################################################

@api_view(['POST'])
def create_cours(request):
    if request.method == 'POST':
        serializer = CoursSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_cours(request):
    cours= Cours.objects.all()  # Récupérer toutes les offres
    serializer = CoursSerializer(cours, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)

###################################################################################################
@api_view(['POST'])
def create_chapitre(request):
    if request.method == 'POST':
        serializer = ChapitreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_chapitres(request):
    chapitre= Chapitre.objects.all()  # Récupérer toutes les offres
    serializer = ChapitreSerializer(chapitre, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)
    
###################################################################################################


@api_view(['POST'])
def create_contenu(request):
    if request.method == 'POST':
        serializer = ContenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Permet seulement aux utilisateurs authentifiés de lister les offres
def list_contenus(request):
    contenu= Contenu.objects.all()  # Récupérer toutes les offres
    serializer = ContenuSerializer(contenu, many=True)  # Sérialiser les données
    return Response(serializer.data, status=status.HTTP_200_OK)
###################################################################################################


#####################################################################  modification     

class ContentView(APIView):
    def get(self, request, contenu_id):
        contenu = get_object_or_404(Contenu, id=contenu_id)
        serializer = ContenuSerializer(contenu)
        return Response(serializer.data)

    def put(self, request):
        updated_data = []
        for contenu_data in request.data:
            contenu_id = contenu_data.get('id')
            if contenu_id is None:
                return Response({"error": "Chaque contenu doit avoir un champ ID."}, status=status.HTTP_400_BAD_REQUEST)
            contenu = get_object_or_404(Contenu, id=contenu_id)
            serializer = ContenuSerializer(contenu, data=contenu_data, partial=True)
            if serializer.is_valid():
                serializer.save()
                updated_data.append(serializer.data)  
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(updated_data, status=status.HTTP_200_OK)

#####################################################################  modification     

class ChapitreView(APIView):
    def get(self, request, chapitre_id):
        chapitre = get_object_or_404(Chapitre, id=chapitre_id)
        serializer = ChapitreSerializer(chapitre)
        return Response(serializer.data)





##############################################################################################
##############################################################################################
    

from .models import Webinar
from .serializers import WebinarSerializer

# Liste des webinaires (GET /fapi/webinars/)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_webinars(request):
    webinars = Webinar.objects.all()
    serializer = WebinarSerializer(webinars, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Détails d'un webinaire (GET /fapi/webinars/<webinar_id>/)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_webinar_detail(request, webinar_id):
    try:
        webinar = Webinar.objects.get(pk=webinar_id)
    except Webinar.DoesNotExist:
        return Response({"error": "Webinar not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = WebinarSerializer(webinar)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Création d'un webinaire (POST /fapi/webinars/create/)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_webinar(request):
    serializer = WebinarSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Mise à jour d'un webinaire (PUT /fapi/webinars/<webinar_id>/update/)
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_webinar(request, webinar_id):
    try:
        webinar = Webinar.objects.get(pk=webinar_id)
    except Webinar.DoesNotExist:
        return Response({"error": "Webinar not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = WebinarSerializer(webinar, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Suppression d'un webinaire (DELETE /fapi/webinars/<webinar_id>/delete/)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_webinar(request, webinar_id):
    try:
        webinar = Webinar.objects.get(pk=webinar_id)
    except Webinar.DoesNotExist:
        return Response({"error": "Webinar not found"}, status=status.HTTP_404_NOT_FOUND)

    webinar.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def enroll_to_webinar(request):
    serializer = WebinarEnrollmentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()  # Sauvegarder l'inscription
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
