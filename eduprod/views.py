from django.core import serializers
from django.shortcuts import render
from .models import Question

def index(request):
    questions = Question.objects.order_by('?')[:2]
    questions_json = serializers.serialize('json', questions)
    return render(request, 'eduprod/index.html', {'questions_json': questions_json})