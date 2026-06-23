from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied

from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):

    queryset = Task.objects.all()

    serializer_class = TaskSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        user = self.request.user

        print("GET_QUERYSET USERNAME:", user.username)
        print("GET_QUERYSET ROLE:", user.role)

        if user.role == 'admin':
            return Task.objects.all()

        return Task.objects.filter(
            assigned_to=user
        )

    def perform_create(self, serializer):
        if self.request.user.role != 'admin':
            raise PermissionDenied(
                "Only admins can create tasks."
            )
        serializer.save(
            created_by=self.request.user
        )

    def perform_update(self, serializer):

        user = self.request.user

        if user.role == 'employee':

            serializer.save(
                assigned_to=serializer.instance.assigned_to
            )

        else:
            serializer.save()

    def get_object(self):

        obj = super().get_object()

        user = self.request.user

        print("GET_OBJECT USERNAME:", user.username)
        print("GET_OBJECT ROLE:", user.role)

        if user.role == 'employee':

            if obj.assigned_to != user:

                raise PermissionDenied(
                    "You cannot access this task."
                )

        return obj
    def destroy(self, request, *args, **kwargs):

        if request.user.role != 'admin':

         raise PermissionDenied(
            "Only admins can delete tasks."
        )

        return super().destroy(
        request,
        *args,
        **kwargs
        )