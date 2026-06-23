from django.db import models
from django.conf import settings


class Task(models.Model):

    title = models.CharField(max_length=255)

    description = models.TextField()

    completed = models.BooleanField(default=False)

    assigned_to = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='assigned_tasks'
    )

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='created_tasks'
    )

    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title