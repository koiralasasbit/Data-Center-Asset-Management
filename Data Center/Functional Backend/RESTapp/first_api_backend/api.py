# from .models import *
# from rest_framework import viewsets, permissions
# from .serializers import *

# class RackViewSet(viewsets.ModelViewSet):
#     permission_classes = [
#         permissions.IsAuthenticated
#     ]

#     serializer_class = RackSerializer

#     def get_queryset(self):
#         # show the racks of the requested user only
#         return self.request.user.racks.all()  # as related_name (in models) = racks

#     # saving user credentials (through owner field) in serializer
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)