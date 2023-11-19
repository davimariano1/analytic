from django.http import HttpResponse
from django.shortcuts import render
from django.core.mail import send_mail

from .models import Contato

def index(request):
    if request.method == "POST":
        nome = request.POST.get('name')
        telefone = request.POST.get('phone')
        email = request.POST.get('email')
        mensagem = request.POST.get('message')
        contato = Contato(nome=nome, telefone=telefone, mensagem=mensagem)
        contato.save()
        send_mail(
            f'Analytic Compstat - Novo Contato de e-mail',
            f""" 
            Olá, Você rcebeu um novo contato pelo site do Analytic Compstat.

            Nome: {nome}
            Telefone: {telefone}
            E-mail: {email}
            Mensagem: {mensagem}
            """,
            'davimariano@gmail.com',
            ['davimariano@gmail.com']
            )
        return render(request, 'msg_contato.html')
    else:
        return render(request, 'index.html') 