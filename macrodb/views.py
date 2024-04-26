
from django.urls import reverse
from django.shortcuts import render
import pandas as pd
from django.http import HttpResponse
from django.template import loader
from .models import macrocycle
from django.core.paginator import Paginator
from django.http import FileResponse, Http404
import os



def Macrocycles(request):
  entry = macrocycle.objects.all().values()
  template = loader.get_template('dbhtml.html')
  context = {
    'db_entry': entry,
  }
  return HttpResponse(template.render(context, request))



from django.shortcuts import render, get_object_or_404
from .models import macrocycle


def details(request, id):
    entry = get_object_or_404(macrocycle, id=id)

    similar_macrocycles_raw = macrocycle.objects.filter(
        Macrocycle_Core_smiles=entry.Macrocycle_Core_smiles
    ).exclude(id=entry.id).values('id', 'name', 'Molecular_Weight', 'Num_H_Acceptors', 'Num_H_Donors', 'cLogP', 'TPSA', 'Num_Rotatable_Bonds','Kier_index').distinct()

    seen_names = set()
    similar_macrocycles = []
    for item in similar_macrocycles_raw:
        if item['name'] not in seen_names:
            seen_names.add(item['name'])
            similar_macrocycles.append(item)


    same_macrocycles = macrocycle.objects.filter(
        name=entry.name,
    ).exclude(id=entry.id).values('id', 'name','Assay','Endpoint','Value','Unit','Standardized_Value','Link','Citation')  
    context = {
        'db_entry': entry,
        'similar_macrocycles': list(similar_macrocycles),  
        'same_macrocycles': list(same_macrocycles),  

    }
    
    return render(request, 'details.html', context)


def main(request):
  template = loader.get_template('main.html')
  return HttpResponse(template.render())

def About(request):
  template = loader.get_template('About.html')
  return HttpResponse(template.render())

def Contact(request):
  template = loader.get_template('Contact.html')
  return HttpResponse(template.render())

def Statistics (request):
  template = loader.get_template('Statistics.html')
  return HttpResponse(template.render())

def download (request):# Request the html template 
  template = loader.get_template('download.html')
  return HttpResponse(template.render())

from django.conf import settings
def download_file_all(request):
    filepath = os.path.join(settings.MEDIA_ROOT, 'download/data0404.csv') 
    if os.path.exists(filepath):
        response = FileResponse(open(filepath, 'rb'), as_attachment=True, filename='Overall.csv')
        return response
    else:
        raise Http404

from django.http import FileResponse, Http404
import os

#Download SDF files
def download_file(request, filename):
    file_path = os.path.join(settings.MEDIA_ROOT, 'sdf', filename)
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/octet-stream")
            response['Content-Disposition'] = 'attachment; filename=' + os.path.basename(file_path)
            return response
    raise Http404

# Generalized downloading logic
def download_file_generic(file_name):
    filepath = os.path.join(settings.MEDIA_ROOT, 'download', file_name)
    
    if os.path.exists(filepath):
        response = FileResponse(open(filepath, 'rb'), as_attachment=True, filename=file_name)
        return response
    else:
        raise Http404

def download_file_pampa(request):
    return download_file_generic('PAMPA.csv')

def download_file_caco_2(request):
    return download_file_generic('Caco-2.csv')

def download_file_mdck(request):
    return download_file_generic('MDCK.csv')

def download_file_rrck(request):
    return download_file_generic('RRCK.csv')

def download_file_others(request):
    return download_file_generic('Others.csv')

def download_file_pampa_log_peff(request):
    return download_file_generic('PAMPA  Log Peff.csv')

def download_file_pampa_log_peff(request):
    return download_file_generic('PAMPA  Log Peff.csv')

def download_file_caco_2_log_papp_ab(request):
    return download_file_generic('Caco-2  Log Papp AB.csv')

def download_file_caco_2_er(request):
    return download_file_generic('Caco-2  ER.csv')

def download_file_caco_2_log_papp_ba(request):
    return download_file_generic('Caco-2  Log Papp BA.csv')

def download_file_pampa_log_papp(request):
    return download_file_generic('PAMPA  Log Papp.csv')

def download_file_caco_2_log_papp_ab_plus(request):
    return download_file_generic('Caco-2  Log Papp AB+.csv')

def download_file_mdck_log_papp_ab(request):
    return download_file_generic('MDCK  Log Papp AB.csv')

def download_file_mdck_er(request):
    return download_file_generic('MDCK  ER.csv')

def download_file_caco_2_er_plus(request):
    return download_file_generic('Caco-2  ER+.csv')

def download_file_caco_2_log_papp_ba_plus(request):
    return download_file_generic('Caco-2  Log Papp BA+.csv')

def download_file_caco_2_log_papp(request):
    return download_file_generic('Caco-2  Log Papp.csv')

def download_file_others_log_papp(request):
    return download_file_generic('Others  Log Papp.csv')

def download_file_others_er(request):
    return download_file_generic('Others  ER.csv')

def download_file_mdck_log_papp(request):
    return download_file_generic('MDCK  Log Papp.csv')

def download_file_mdck_log_papp_ba(request):
    return download_file_generic('MDCK  Log Papp BA.csv')

def download_file_mdck_er_plus(request):
    return download_file_generic('MDCK  ER+.csv')

def download_file_mdck_log_papp_ab_plus(request):
    return download_file_generic('MDCK  Log Papp AB+.csv')

def download_file_mdck_log_papp_ba_plus(request):
    return download_file_generic('MDCK  Log Papp BA+.csv')

def download_file_rrck_er(request):
    return download_file_generic('RRCK  ER.csv')

def download_file_rrck_log_papp_ba(request):
    return download_file_generic('RRCK  Log Papp BA.csv')

def download_file_rrck_log_papp_ab(request):
    return download_file_generic('RRCK  Log Papp AB.csv')

def download_file_caco_2_log_papp_plus(request):
    return download_file_generic('Caco-2  Log Papp+.csv')
