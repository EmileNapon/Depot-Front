import { Component, Input, OnInit } from '@angular/core';
import { Webinar } from '../../models/webinar.model';
import { Router } from '@angular/router';
import { WebinarService } from '../../services/webinar.service';

@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.css']
})
export class WebinarComponent implements OnInit {


  webinar = [
    {
      id: 1,
      title: "Les bases de l'IA",
      theme: "Intelligence Artificielle",
      date: "23 Novembre 2024",
      time: "10:00",
      format: "Gratuit",
      image: "assets/images/ai-webinar.jpg",
    },
    {
      id: 2,
      title: "Introduction aux Systèmes Embarqués",
      theme: "Systèmes Cyber-Physiques",
      date: "25 Novembre 2024",
      time: "14:00",
      format: "Payant",
      image: "assets/images/embedded-systems.jpg",
    },
    {
      id: 3,
      title: "Optimisation des réseaux IoT",
      theme: "Internet des Objets",
      date: "28 Novembre 2024",
      time: "16:00",
      format: "Gratuit",
      image: "assets/images/iot-webinar.jpg",
    },
  ];

  register(webinarId: number) {
    alert(`Inscription réussie pour le webinaire ID : ${webinarId}`);
    // Logique pour enregistrer l'utilisateur dans la base de données
  }




  // @Input() webinar!: any; // Recevoir les données du webinaire en tant qu'entrée



  webinars: any[]=[]
  constructor(private router: Router, private webinarService:WebinarService) {}

  ngOnInit(): void {
    // console.log('Webinaire reçu dans WebinarComponent:', this.webinar);
    // console.log('Titre du webinaire reçu :', this.webinar.title);
  
    // if (!this.webinar || !this.webinar._id) {
    //   console.error("Le webinaire n'a pas été correctement chargé ou l'ID (_id) est manquant.");
    // } else {
    //   console.log('ID du webinaire reçu (_id) :', this.webinar._id);
    // }
  }
  

  loadwebinar(): void {
    this.webinarService.getWebinars().subscribe(
      (data) => {
        this.webinars = data;
        
      },
      (error) => {
        console.error('Erreur lors du chargement des formations:', error);
      }
    );
    
  }





  






}