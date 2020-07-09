from django.db import models



class Quiz(models.Model):
    quiz_desc = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question_text = models.CharField(max_length=200)


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    correct_ans = models.BooleanField(default=False)