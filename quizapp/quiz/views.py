# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from .models import Quiz, Question, Choice


def index(request):
    latest_quiz_list = Quiz.objects.order_by('-pub_date')[:5]
    context = {
        'latest_quiz_list': latest_quiz_list,
    }
    return render(request, 'quiz/index.html', context)

def detail(request, quiz_id):
    quiz = Quiz.objects.get(pk=quiz_id)
    context = {
        "quiz" : quiz,
    }
    return render(request, 'quiz/detail.html', context)


def results(request, quiz_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % quiz_id)


def vote(request, quiz_id): 
    quiz = Quiz.objects.get(pk=quiz_id)
    score = 0
    for ch in request.POST:
        try:
            selected_choice = Choice.objects.get(pk=request.POST[ch])
            if selected_choice.correct_ans == True:
                score += 10
        except:
            pass
    
    context = {
        'quiz' : quiz,
        'score': score
    }

    return render(request, 'quiz/vote.html', context)