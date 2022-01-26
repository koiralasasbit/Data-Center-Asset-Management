from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import *
from .serializers import *

from django.shortcuts import render
from backend.models import *

from rest_framework import viewsets

@api_view(['GET', 'POST'])
def racks_list(request):
    if request.method == 'GET':
        data = Rack.objects.all()

        serializer = RackSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def racks_detail(request, pk):
     try:
         rack = Rack.objects.get(pk=pk)
     except Rack.DoesNotExist:
         return Response(status=status.HTTP_404_NOT_FOUND)
     if request.method == 'PUT':
         serializer = RackSerializer(rack, data=request.data,context={'request': request})
         if serializer.is_valid():
             serializer.save()
             return Response(status=status.HTTP_204_NO_CONTENT)
         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

     elif request.method == 'DELETE':
         rack.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def routers_list(request):
    if request.method == 'GET':
        data = Router.objects.all()

        serializer = RouterSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RouterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def routers_detail(request, pk):
     try:
         router = Router.objects.get(pk=pk)
     except Location.DoesNotExist:
         return Response(status=status.HTTP_404_NOT_FOUND)
     if request.method == 'PUT':
         serializer = RouterSerializer(router, data=request.data,context={'request': request})
         if serializer.is_valid():
             serializer.save()
             return Response(status=status.HTTP_204_NO_CONTENT)
         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

     elif request.method == 'DELETE':
         router.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)

class RackViewSet(viewsets.ModelViewSet):
    queryset = Rack.objects.all().order_by('id')
    serializer_class = RackSerializer

class RouterViewSet(viewsets.ModelViewSet):
    queryset = Router.objects.all().order_by('id')
    serializer_class = RouterSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all().order_by('location_name')
    serializer_class = LocationSerializer

class ipv4_networkViewSet(viewsets.ModelViewSet):
    queryset = ipv4_network.objects.all().order_by('name')
    serializer_class = ipv4_networkSerializer

class SwitchViewSet(viewsets.ModelViewSet):
    queryset = Switch.objects.all().order_by('id')
    serializer_class = SwitchSerializer

class PatchPanelViewSet(viewsets.ModelViewSet):
    queryset = PatchPanel.objects.all().order_by('id')
    serializer_class = PatchPanelSerializer

class ServerViewSet(viewsets.ModelViewSet):
    queryset = Server.objects.all().order_by('id')
    serializer_class = ServerSerializer

class BatteryBackupViewSet(viewsets.ModelViewSet):
    queryset = BatteryBackup.objects.all().order_by('id')
    serializer_class = BatteryBackupSerializer

class NetworkInterfaceCardViewSet(viewsets.ModelViewSet):
    queryset = NetworkInterfaceCard.objects.all().order_by('id')
    serializer_class = NetworkInterfaceCardSerializer

