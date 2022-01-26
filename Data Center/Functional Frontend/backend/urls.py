from django.conf.urls import url
from django.urls import include, path
from rest_framework import routers
from backend import views

router = routers.DefaultRouter()
router.register(r'racks', views.RackViewSet)
router.register(r'locations', views.LocationViewSet)
router.register(r'router', views.RouterViewSet)
router.register(r'ipv4', views.ipv4_networkViewSet)
router.register(r'switch', views.SwitchViewSet)
router.register(r'patchPanel', views.PatchPanelViewSet)
router.register(r'server', views.ServerViewSet)
router.register(r'batteryBackup', views.BatteryBackupViewSet)
router.register(r'networkInterfaceCard', views.NetworkInterfaceCardViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('<int:pk>/', views.racks_detail, name='detail'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
    # re_path(r'^api/racks/$', views.racks_list),
    # re_path(r'^api/racks/(?P<pk>[0-9]+)$', views.racks_detail),

    #url(r'^$', views.second_page, name = 'second_page'),
]
