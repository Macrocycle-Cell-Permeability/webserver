from django.urls import path
from . import views
from .views import download_file_all
from .views import download_file_pampa
from .views import download_file_caco_2
from .views import download_file_mdck
from .views import download_file_rrck
from .views import download_file_others
from .views import download_file_pampa_log_peff
from .views import download_file_caco_2_log_papp_ab
from .views import download_file_caco_2_er
from .views import download_file_caco_2_log_papp_ba
from .views import download_file_pampa_log_papp
from .views import download_file_caco_2_log_papp_ab_plus
from .views import download_file_mdck_log_papp_ab
from .views import download_file_mdck_er
from .views import download_file_caco_2_er_plus
from .views import download_file_caco_2_log_papp_ba_plus
from .views import download_file_caco_2_log_papp
from .views import download_file_others_log_papp
from .views import download_file_others_er
from .views import download_file_mdck_log_papp
from .views import download_file_mdck_log_papp_ba
from .views import download_file_mdck_er_plus
from .views import download_file_mdck_log_papp_ab_plus
from .views import download_file_mdck_log_papp_ba_plus
from .views import download_file_rrck_er
from .views import download_file_rrck_log_papp_ba
from .views import download_file_rrck_log_papp_ab
from .views import download_file_caco_2_log_papp_plus

from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('', views.main, name='main'),
    path('About/', views.About, name='About'),
    path('Contact/', views.Contact, name='Contact'),
    path('Statistics/', views.Statistics, name='Statistics'),
    path('download/', views.download, name='download'),  # Load the download page
    path('download_file_all/', download_file_all, name='download_file_all'),
    path('download_file_pampa/', download_file_pampa, name='download_file_pampa'),
    path('download_file_caco_2/', download_file_caco_2, name='download_file_caco_2'),
    path('download_file_mdck/', download_file_mdck, name='download_file_mdck'),
    path('download_file_rrck/', download_file_rrck, name='download_file_rrck'),
    path('download_file_mdck_er_plus/', download_file_mdck_er_plus, name='download_file_mdck_er_plus'),
    path('download_file_others/', download_file_others, name='download_file_others'),
    path('download_file_pampa_log_peff/', download_file_pampa_log_peff, name='download_file_pampa_log_peff'),
    path('download_file_caco_2_log_papp_ab/', download_file_caco_2_log_papp_ab, name='download_file_caco_2_log_papp_ab'),
    path('download_file_caco_2_er/', download_file_caco_2_er, name='download_file_caco_2_er'),
    path('download_file_caco_2_log_papp_ba/', download_file_caco_2_log_papp_ba, name='download_file_caco_2_log_papp_ba'),
    path('download_file_pampa_log_papp/', download_file_pampa_log_papp, name='download_file_pampa_log_papp'),
    path('download_file_caco_2_log_papp_ab_plus/', download_file_caco_2_log_papp_ab_plus, name='download_file_caco_2_log_papp_ab_plus'),
    path('download_file_mdck_log_papp_ab/', download_file_mdck_log_papp_ab, name='download_file_mdck_log_papp_ab'),
    path('download_file_mdck_er/', download_file_mdck_er, name='download_file_mdck_er'),
    path('download_file_caco_2_er_plus/', download_file_caco_2_er_plus, name='download_file_caco_2_er_plus'),
    path('download_file_caco_2_log_papp_ba_plus/', download_file_caco_2_log_papp_ba_plus, name='download_file_caco_2_log_papp_ba_plus'),
    path('download_file_caco_2_log_papp/', download_file_caco_2_log_papp, name='download_file_caco_2_log_papp'),
    path('download_file_others_log_papp/', download_file_others_log_papp, name='download_file_others_log_papp'),
    path('download_file_others_er/', download_file_others_er, name='download_file_others_er'),
    path('download_file_mdck_log_papp/', download_file_mdck_log_papp, name='download_file_mdck_log_papp'),
    path('download_file_mdck_log_papp_ba/', download_file_mdck_log_papp_ba, name='download_file_mdck_log_papp_ba'),
    path('download_file_mdck_log_papp_ab_plus/', download_file_mdck_log_papp_ab_plus, name='download_file_mdck_log_papp_ab_plus'),
    path('download_file_mdck_log_papp_ba_plus/', download_file_mdck_log_papp_ba_plus, name='download_file_mdck_log_papp_ba_plus'),
    path('download_file_rrck_er/', download_file_rrck_er, name='download_file_rrck_er'),
    path('download_file_rrck_log_papp_ba/', download_file_rrck_log_papp_ba, name='download_file_rrck_log_papp_ba'),
    path('download_file_rrck_log_papp_ab/', download_file_rrck_log_papp_ab, name='download_file_rrck_log_papp_ab'),
    path('download_file_caco_2_log_papp_plus/', download_file_caco_2_log_papp_plus, name='download_file_caco_2_log_papp_plus'),
    path('macrodb/', views.Macrocycles, name='macrodb'),
    path('macrodb/details/<int:id>', views.details, name='details'),
    path('details/<str:filename>', views.download_file, name='download_file'),
    
]