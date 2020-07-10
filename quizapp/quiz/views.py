# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from .models import Quiz, Question


def index(request):
    latest_quiz_list = Quiz.objects.order_by('-pub_date')[:5]
    context = {
        'latest_quiz_list': latest_quiz_list,
    }
    return render(request, 'quiz/index.html', context)

def detail(request, quiz_id):
    return HttpResponse("You're looking at question %s." % quiz_id)

def results(request, quiz_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % quiz_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)