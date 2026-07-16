from django.urls import path
from . import views

# Every dataset available for bulk download, keyed by the URL name that was
# already in use (kept stable so no existing link/bookmark/citation breaks).
# All of these are served by the single views.download_dataset view.
DOWNLOAD_DATASETS = {
    'download_file_all': 'Overall.csv',
    'download_file_pampa': 'PAMPA.csv',
    'download_file_caco_2': 'Caco-2.csv',
    'download_file_mdck': 'MDCK.csv',
    'download_file_rrck': 'RRCK.csv',
    'download_file_others': 'Others.csv',
    'download_file_pampa_log_peff': 'PAMPA  Log Peff.csv',
    'download_file_caco_2_log_papp_ab': 'Caco-2  Log Papp AB.csv',
    'download_file_caco_2_er': 'Caco-2  ER.csv',
    'download_file_caco_2_log_papp_ba': 'Caco-2  Log Papp BA.csv',
    'download_file_pampa_log_papp': 'PAMPA  Log Papp.csv',
    'download_file_caco_2_log_papp_ab_plus': 'Caco-2  Log Papp AB+.csv',
    'download_file_mdck_log_papp_ab': 'MDCK  Log Papp AB.csv',
    'download_file_mdck_er': 'MDCK  ER.csv',
    'download_file_caco_2_er_plus': 'Caco-2  ER+.csv',
    'download_file_caco_2_log_papp_ba_plus': 'Caco-2  Log Papp BA+.csv',
    'download_file_caco_2_log_papp': 'Caco-2  Log Papp.csv',
    'download_file_others_log_papp': 'Others  Log Papp.csv',
    'download_file_others_log_papp_ab': 'Others  Log Papp AB.csv',
    'download_file_others_log_papp_ba': 'Others  Log Papp BA.csv',
    'download_file_others_er': 'Others  ER.csv',
    'download_file_mdck_log_papp': 'MDCK  Log Papp.csv',
    'download_file_mdck_log_papp_ba': 'MDCK  Log Papp BA.csv',
    'download_file_mdck_er_plus': 'MDCK  ER+.csv',
    'download_file_mdck_log_papp_ab_plus': 'MDCK  Log Papp AB+.csv',
    'download_file_mdck_log_papp_ba_plus': 'MDCK  Log Papp BA+.csv',
    'download_file_rrck_er': 'RRCK  ER.csv',
    'download_file_rrck_log_papp_ba': 'RRCK  Log Papp BA.csv',
    'download_file_rrck_log_papp_ab': 'RRCK  Log Papp AB.csv',
    'download_file_caco_2_log_papp_plus': 'Caco-2  Log Papp+.csv',
}

urlpatterns = [
    path('', views.main, name='main'),
    path('About/', views.About, name='About'),
    path('Contact/', views.Contact, name='Contact'),
    path('Statistics/', views.Statistics, name='Statistics'),
    path('download/', views.download, name='download'),  # Load the download page
    path('macrodb/', views.Macrocycles, name='macrodb'),
    path('macrodb/data/', views.macrodb_data, name='macrodb_data'),
    path('macrodb/details/<int:id>', views.details, name='details'),
    path('details/<str:filename>', views.download_file, name='download_file'),
] + [
    path(f'{url_name}/', views.download_dataset, {'file_name': file_name}, name=url_name)
    for url_name, file_name in DOWNLOAD_DATASETS.items()
]
