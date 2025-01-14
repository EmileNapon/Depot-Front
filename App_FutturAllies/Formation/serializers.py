from email.headerregistry import Group
from rest_framework import serializers

import Formation
from .models import Domaine,  Module, Cours, Chapitre, Contenu

class DomaineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domaine
        fields =  '__all__' 

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'  # Including all necessary fields

class CoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cours
        fields =  '__all__'   # Including all necessary fields

class ChapitreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapitre
        fields =  '__all__'  # Including all necessary fields

class ContenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contenu
        fields =  '__all__'   # Including all necessary fields

######################################################################################
        ############################################################################

from rest_framework import serializers
from .models import Webinar, WebinarEnrollment

class WebinarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Webinar
        fields = '__all__'


class WebinarEnrollmentSerializer(serializers.ModelSerializer):
    webinar_title = serializers.CharField(source='webinar.title', read_only=True)  # Optionnel: pour afficher le titre du webinaire

    class Meta:
        model = WebinarEnrollment
        fields = '__all__'
