from django.db import models
from datetime import date

from users.models import CustomUser

########################################################################################

class Enterprise(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    recruitment_email = models.EmailField()
    SIZE_CHOICES = [
        ('Small', 'Small'),
        ('Medium', 'Medium'),
        ('Large', 'Large'),
    ]
    size = models.CharField(max_length=10, choices=SIZE_CHOICES)
    website = models.URLField()
    description = models.TextField(blank=True, null=True)
    industry = models.CharField(max_length=255, blank=True, null=True)
    founded_year = models.PositiveIntegerField(blank=True, null=True)
    headquarters_location = models.CharField(max_length=255, blank=True, null=True)
    number_of_employees = models.PositiveIntegerField(blank=True, null=True)
    company_culture = models.TextField(blank=True, null=True)
    social_media_links = models.JSONField(blank=True, null=True)  # Use JSONField for a flexible mapping
    rating = models.DecimalField(max_digits=2, decimal_places=1, blank=True, null=True)
    awards_and_recognition = models.JSONField(blank=True, null=True)
    benefits_overview = models.TextField(blank=True, null=True)
    logo_url = models.URLField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Offer(models.Model):
    enterprise = models.ForeignKey(Enterprise, on_delete=models.CASCADE, related_name='offers')
    title = models.CharField(max_length=255)
    description = models.TextField()
    domain = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    duration = models.PositiveIntegerField(blank=True, null=True)  # Duration in months
    TYPE_CHOICES = [
        ('Job', 'Job'),
        ('Internship', 'Internship'),
        ('Other', 'Other'),
    ]
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    requirements = models.TextField(blank=True, null=True)
    responsibilities = models.TextField(blank=True, null=True)
    education_level = models.CharField(max_length=255, blank=True, null=True)
    experience_level = models.CharField(max_length=255, blank=True, null=True)
    CONTRACT_TYPE_CHOICES = [
        ('Full-Time', 'Full-Time'),
        ('Part-Time', 'Part-Time'),
        ('Internship', 'Internship'),
        ('Freelance', 'Freelance'),
        ('Temporary', 'Temporary'),
    ]
    contract_type = models.CharField(max_length=20, choices=CONTRACT_TYPE_CHOICES)
    benefits = models.TextField(blank=True, null=True)
    contact_email = models.EmailField()
    posted_date = models.DateTimeField(auto_now_add=True)
    expiration_date = models.DateTimeField(blank=True, null=True)
    STATUS_CHOICES = [
        ('Open', 'Open'),
        ('Closed', 'Closed'),
        ('Pending', 'Pending'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Open')
    is_remote = models.BooleanField(default=False)
    APPLICATION_MODE_CHOICES = [
        ('Online', 'Online'),
        ('Physical', 'Physical'),
        ('Both', 'Both'),
    ]
    application_mode = models.CharField(max_length=20, choices=APPLICATION_MODE_CHOICES, default='Online')
    online_submission = models.BooleanField(default=True)
    physical_address = models.TextField(blank=True, null=True)
    is_required_cv_doc = models.BooleanField(default=True)
    is_required_ml_doc = models.BooleanField(default=False)
    can_add_others_doc = models.BooleanField(default=False)
    application_link = models.URLField(blank=True, null=True)
    additional_info = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class OfferApplication(models.Model):
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE, default=2)
    candidat = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=16)
    application_date = models.DateTimeField(auto_now_add=True)
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Accepted', 'Accepted'),
        ('Rejected', 'Rejected'),
        ('Review', 'Review'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Accepted')
    message = models.TextField(default=(
        "Je suis très intéressé(e) par cette offre et je suis convaincu(e) que mes compétences "
        "et mon expérience correspondent aux attentes de votre entreprise. J'aimerais avoir "
        "l'opportunité de discuter de cette offre plus en détail et de contribuer au succès de votre équipe."
    ))
    last_updated = models.DateTimeField(auto_now=True)
    submitted_documents_ids = models.JSONField(null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Application by {self.candidat} for {self.offer}"


class File(models.Model):
    title = models.CharField(max_length=255)
    file_type = models.CharField(max_length=50, default='application/pdf' )
    file_content = models.BinaryField()  # Contient le contenu binaire du fichier
    file_size = models.PositiveBigIntegerField()
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
