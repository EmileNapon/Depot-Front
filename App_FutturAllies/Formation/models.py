from django.db import models
from users.models import CustomUser
class Domaine(models.Model):
    nom_domaine = models.CharField(max_length=800) 

    def __str__(self):
        return self.nom_domaine

class Module(models.Model):
    domaine = models.ForeignKey(Domaine, null=True, on_delete=models.CASCADE) 
    nom_module = models.CharField(max_length=800, null=True)
   # formateur = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    def __str__(self):
        return self.nom_module

class Cours(models.Model):
    module = models.ForeignKey(Module,null=True, on_delete=models.CASCADE)  # Relation vers Module
    nom_cours = models.CharField(max_length=800, null=True)

    def __str__(self):
        return self.nom_cours

class Chapitre(models.Model):
    cours = models.ForeignKey(Cours,null=True, on_delete=models.CASCADE)  # Relation vers Cours
    titre = models.CharField(max_length=800, null=True)

    def __str__(self):
        return self.titre

class Contenu(models.Model):

    chapitre = models.ForeignKey(Chapitre,null=True, on_delete=models.CASCADE)  # Relation vers Chapitre
    sous_titre=models.CharField(max_length=800, default='')
    description = models.TextField(max_length=800)

    def __str__(self):
        return self.description  # Retourne les premiers 50 caractères


########################################################################################################
    ############################################################################################
from django.db import models

class Webinar(models.Model):
    FUTUR_ALLIES = 'FuturAllies'
    CAFE_DES_ALLIES = 'Café des allies'
    WEBINAR_TYPES = [
        (FUTUR_ALLIES, 'FuturAllies'),
        (CAFE_DES_ALLIES, 'Café des allies'),
    ]

    _id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    speaker = models.CharField(max_length=200)
    speakerPicture_url = models.URLField(null=True, blank=True)
    endDateTime = models.DateTimeField()
    registrationDeadline = models.DateTimeField()
    registrationDeadline = models.DateTimeField(null=True, blank=True)
    webinarUrl = models.URLField(null=True, blank=True)
    maxParticipants = models.IntegerField()
    isPaid = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    type = models.CharField(max_length=20, choices=WEBINAR_TYPES)

    def __str__(self):
        return self.title

class WebinarEnrollment(models.Model):
    PAYMENT_STATUS_CHOICES = [
        ('paid', 'Paid'),
        ('pending', 'Pending'),
        ('free', 'Free')
    ]

    PAYMENT_METHOD_CHOICES = [
        ('creditCard', 'Credit Card'),
        ('orangeMoney', 'Orange Money'),
        ('moovMoney', 'Moov Money'),
        ('sankMoney', 'Sank Money')
    ]

    id = models.AutoField(primary_key=True)
    webinarId = models.ForeignKey(Webinar, on_delete=models.CASCADE, related_name="enrollments")
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE, null=True)
    fullName = models.CharField(max_length=200)
    email = models.EmailField()
    registrationDate = models.DateTimeField(auto_now_add=True)
    hasAcceptedTerms = models.BooleanField(default=False)
    paymentStatus = models.CharField(max_length=10, choices=PAYMENT_STATUS_CHOICES, null=True, blank=True)
    paymentMethod = models.CharField(max_length=15, choices=PAYMENT_METHOD_CHOICES, null=True, blank=True)
    isConfirmed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.full_name} - {self.webinar.title}"
    



