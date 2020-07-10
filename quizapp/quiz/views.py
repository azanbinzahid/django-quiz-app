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


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    question = Question.objects.get(pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'quiz/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        score = 0
        if selected_choice.correct_ans == True:
            score = 10
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('quiz:results', args=(question.id,)))