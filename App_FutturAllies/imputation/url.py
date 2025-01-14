from django.urls import path
from .views import ImputeDataView

urlpatterns = [
    path('impute/', ImputeDataView.as_view(), name='impute-data'),
]
