from django.db import models



class Quiz(models.Model):
    def __str__(self):
        return self.quiz_desc
    quiz_desc = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

class Question(models.Model):
    def __str__(self):
        return self.question_text
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question_text = models.CharField(max_length=200)
    question_marks = models.IntegerField(default=10)


class Choice(models.Model):
    def __str__(self):
        return self.choice_text
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    correct_ans = models.BooleanField(default=False)