
from django.urls import reverse
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.db.models import Q
from django.utils.html import escape, format_html
from django.utils.safestring import mark_safe
from .models import macrocycle
from django.http import FileResponse, Http404
import os


# Human-readable labels for a few coded fields. Kept in one place so the
# table page (rendered via AJAX) and the details page use the same wording.
ENDPOINT_LABELS = {
    "Log Papp": mark_safe("Log P<sub>app</sub>"),
    "Log Papp AB": mark_safe("Log P<sub>app</sub> AB"),
    "Log Papp AB+Inh.": mark_safe("Log P<sub>app</sub> AB+Inh."),
    "Log Papp BA": mark_safe("Log P<sub>app</sub> BA"),
    "Log Peff": mark_safe("Log P<sub>eff</sub>"),
    "Minus_Log P app": mark_safe("Minus_Log P<sub>app</sub>"),
    "Minus_Log P eff": mark_safe("Minus_Log P<sub>eff</sub>"),
    "Papp": mark_safe("P<sub>app</sub>"),
    "Papp AB": mark_safe("P<sub>app</sub> AB"),
    "Papp AB+Inh.": mark_safe("P<sub>app</sub> AB+Inh."),
    "Papp BA": mark_safe("P<sub>app</sub> BA"),
    "Papp BA+Inh.": mark_safe("P<sub>app</sub> BA+Inh."),
    "Papp+Inh.": mark_safe("P<sub>app</sub>+Inh."),
    "Peff": mark_safe("P<sub>eff</sub>"),
}

UNIT_LABELS = {
    "10^-6 cm/s": mark_safe("10<sup>-6</sup> cm/s"),
    "10^6 cm/s": mark_safe("10<sup>6</sup> cm/s"),
    "10^-7 cm/s": mark_safe("10<sup>-7</sup> cm/s"),
    "10^7 cm/s": mark_safe("10<sup>7</sup> cm/s"),
}

# DataTables column index -> model field used for sorting/filtering the
# /macrodb/ table. Index 2 ("Structure") is an image with no backing field,
# so it is intentionally left out (and marked unorderable client-side).
MACRODB_ORDER_FIELDS = {
    0: 'name',
    1: 'Common_name',
    3: 'Assay',
    4: 'Endpoint',
    5: 'Value',
    6: 'Unit',
    7: 'Standardized_Value',
}


def Macrocycles(request):
    assay_choices = (
        macrocycle.objects.order_by('Assay').values_list('Assay', flat=True).distinct()
    )
    return render(request, 'dbhtml.html', {'assay_choices': assay_choices})


def macrodb_data(request):
    """DataTables server-side processing endpoint for the /macrodb/ table.

    Only the rows needed for the current page are queried and serialized,
    instead of shipping the whole (6500+ row) table to the browser on every
    page load.
    """
    qs = macrocycle.objects.all()
    records_total = qs.count()

    assay_filter = request.GET.get('columns[3][search][value]', '').strip()
    if assay_filter:
        qs = qs.filter(Assay=assay_filter)

    search_value = request.GET.get('search[value]', '').strip()
    if search_value:
        qs = qs.filter(
            Q(name__icontains=search_value)
            | Q(Common_name__icontains=search_value)
            | Q(Assay__icontains=search_value)
            | Q(Endpoint__icontains=search_value)
            | Q(Value__icontains=search_value)
            | Q(Unit__icontains=search_value)
            | Q(Standardized_Value__icontains=search_value)
        )

    records_filtered = qs.count()

    order_col = request.GET.get('order[0][column]')
    order_dir = request.GET.get('order[0][dir]', 'asc')
    if order_col is not None and order_col.isdigit():
        order_field = MACRODB_ORDER_FIELDS.get(int(order_col))
        if order_field:
            qs = qs.order_by('-' + order_field if order_dir == 'desc' else order_field)

    start = int(request.GET.get('start') or 0)
    length = int(request.GET.get('length') or 25)
    page_qs = qs[start:] if length == -1 else qs[start:start + length]

    data = []
    for x in page_qs:
        data.append([
            format_html('<a href="{}">{}</a>', reverse('details', args=[x.id]), x.name),
            escape(x.Common_name),
            format_html(
                '<img src="/static/Overall_images/{0}.png" alt="{0}" '
                'style="width: 250px; display: block; margin: auto;">',
                x.name,
            ),
            escape(x.Assay),
            ENDPOINT_LABELS.get(x.Endpoint, escape(x.Endpoint)),
            escape(x.Value),
            UNIT_LABELS.get(x.Unit, escape(x.Unit)),
            str(x.Standardized_Value),
        ])

    return JsonResponse({
        'draw': int(request.GET.get('draw') or 0),
        'recordsTotal': records_total,
        'recordsFiltered': records_filtered,
        'data': data,
    })


def details(request, id):
    entry = get_object_or_404(macrocycle, id=id)

    similar_macrocycles_raw = macrocycle.objects.filter(
        Macrocycle_Ring_smiles=entry.Macrocycle_Ring_smiles
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
    return render(request, 'main.html')

def About(request):
    return render(request, 'About.html')

def Contact(request):
    return render(request, 'Contact.html')

def Statistics(request):
    return render(request, 'Statistics.html')

def download(request):
    return render(request, 'download.html')

from django.conf import settings

# Download SDF files (macrocycle name -> structure file), keyed by filename.
def download_file(request, filename):
    file_path = os.path.join(settings.MEDIA_ROOT, 'sdf', filename)
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/octet-stream")
            response['Content-Disposition'] = 'attachment; filename=' + os.path.basename(file_path)
            return response
    raise Http404

# Single view backing every bulk-CSV download link (see urls.py for the
# name -> file_name mapping). Replaces ~30 near-identical view functions
# that each only differed by which CSV filename they served.
def download_dataset(request, file_name):
    filepath = os.path.join(settings.MEDIA_ROOT, 'download', file_name)
    if os.path.exists(filepath):
        response = FileResponse(open(filepath, 'rb'), as_attachment=True, filename=file_name)
        return response
    raise Http404
