from django.urls import path
from . import views

urlpatterns = [

    path('formation/create', views.create_Formation, name='create_formation'),
    path('formation/<int:pk>/update/', views.update_formation, name='update_formation'),
    path('formation/list-formations/<int:formation_id>/', views.detail_formation, name='detail_formation'),
    path('formation/list-formations/', views.list_formations, name='list_formation'), 
    path('formations/<int:formation_id>/remove/', views.remove_formation, name='remove_formation'),
    ################################################################################
    path('inscrit/create/', views.create_Inscrit, name='create_inscrit'),
    path('inscrit/listes_inscrits/', views.liste_Inscrits, name='liste_Inscrits'),
    ################################################################################
    path('ModuleFormation/create/', views.create_module_formation, name='ModuleFormation'),
    path('ModuleFormation/list_moduleFormation/', views.list_ModuleFormation, name='ModuleFormation'),
    path('formations/<int:formation_id>/modules/<int:module_id>/remove/', views.remove_module_from_formation, name='remove_module_from_formation'),
    ################################################################################
    path('seance/create/', views.create_Seance, name='create_seance'),
    path('seance/list_seances/', views.list_Seance, name='list_seances'),
    path('seances/<int:pk>/delete/', views.delete_seance, name='delete_seance'),
    path('seance/<int:pk>/update/', views.update_Seance, name='update_seances'),
    path('seances/liste-seance/<int:seance_id>/', views.detail_Seance, name='detail_Seance'),

    ################################################################################
    path('group/create/', views.create_Group, name='create_group'),
    path('affectationStage/create/', views.create_AffectationStage, name='AffectationStage'),
    ######################################################################################

    path('annonces', views.annonce, name='annonce'),
    path('annonces/<int:annonce_id>/', views.annonce_detail, name='annonce_detail'),
    
]




