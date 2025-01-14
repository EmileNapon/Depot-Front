from django.urls import path
from . import views

urlpatterns = [
    path('modules/create/', views.create_module, name='create_module'),
    path('domaines/list_domaines', views.list_domaines, name='list_domaines'), 
##########################################################################################
    path('domaines/create/', views.create_domaine, name='create_domaine'),
    path('modules/list_modules', views.list_modules, name='list_modules'), 
##########################################################################################
    path('cours/create/', views.create_cours, name='create_cours'),
    path('cours/list_cours', views.list_cours, name='list_cours'), 
##########################################################################################
    path('chapitre/create/', views.create_chapitre, name='create_chapitre'),
    path('chapitre/list_chapitres', views.list_chapitres, name='list_chapitres'), 
##########################################################################################
    path('contenu/create/', views.create_contenu, name='create_contenu'),
    path('contenus/list_contenus', views.list_contenus, name='list_contenus'),
    path('contenu/update-contenu/', views.ContentView.as_view(), name='create_contenu'),
#########################################################################################
 path('contenu/<int:contenu_id>/', views.ContentView.as_view(), name='detail_contenu'), 
#########################################################################################
 path('chapitre/<int:chapitre_id>/', views.ChapitreView.as_view(), name='detail_chapitre'), 

#########################################################################################

    # Liste des webinaires
    path('webinars/', views.list_webinars, name='list_webinars'),

    # Détails d'un webinaire
    path('webinars/<int:webinar_id>/', views.get_webinar_detail, name='get_webinar_detail'),

    # Création d'un webinaire
    path('webinars/create/', views.create_webinar, name='create_webinar'),

    # Mise à jour d'un webinaire
    path('webinars/<int:webinar_id>/update/', views.update_webinar, name='update_webinar'),

    # Suppression d'un webinaire
    path('webinars/<int:webinar_id>/delete/', views.delete_webinar, name='delete_webinar'),
    path('webinars/enroll', views.enroll_to_webinar, name='inscrit'),
]





