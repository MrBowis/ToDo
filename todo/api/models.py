from django.db import models

# Create your models here.
class Task(models.Model):
    task = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    group = models.ForeignKey("Group", on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.task
    
class Group(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name