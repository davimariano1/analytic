from django.http import HttpResponse
from django.shortcuts import render

from .models import Contato

def index(request):
    if request.method == "POST":
        nome = request.POST.get('name')
        telefone = request.POST.get('phone')
        email = request.POST.get('email')
        mensagem = request.POST.get('message')
        contato = Contato(nome=nome, telefone=telefone, mensagem=mensagem)
        contato.save()
        return HttpResponse("Obrigado! Um consultor irá entrar em contato o quanto antes.")
    else:
        return render(request, 'index.html') 