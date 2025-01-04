from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('macrodb.urls')),
    path("admin/", admin.site.urls),
]

# 添加以下内容来处理静态文件和媒体文件
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    # 在生产环境中，你应该使用一个合适的存储后端或web服务器来处理静态文件
    pass