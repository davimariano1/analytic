from django.db import models

class Contato(models.Model):
    nome = models.CharField(max_length=80)
    email = models.EmailField(max_length=40)
    telefone = models.CharField(max_length=15)
    mensagem = models.TextField()
    #cnpj = models.CharField(max_length=20)
    def __str__(self) -> str:
        return self.nome