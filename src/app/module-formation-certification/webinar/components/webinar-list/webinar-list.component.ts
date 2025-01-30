import { Component, OnInit } from '@angular/core';
import { WebinarService } from '../../services/webinar.service';
import { Webinar } from '../../models/webinar.model';
import { WebinarService1 } from '../webinar/service-web';
import{Webinar1} from '../webinar/interface'
import { Router } from '@angular/router';

// import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-webinar-list',
    templateUrl: './webinar-list.component.html',
    styleUrls: ['./webinar-list.component.css'],
    standalone: false
})
export class WebinarListComponent implements OnInit {
  
  webinarr = [
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





  // @Input() webinar!: any; // Recevoir les données du webinaire en tant qu'entrée



  webinars: any[]=[]
  constructor(private router: Router, private webinarService:WebinarService) {}

  ngOnInit(): void {
    this.loadwebinar()
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
        console.log(this.webinars)
      },
      (error) => {
        console.error('Erreur lors du chargement des formations:', error);
      }
    );
    
  }

  VoirDetail(_id:number):void{
    this.router.navigate([`/webinar-details/${_id}/detail`]); 
  }
 
  register(_id:number):void{
    this.router.navigate([`/webinar-enroll/${_id}/incription`]); 
  }
  
  }




  ////////////////////////////////////////////////////////////




  

