// services/webinar.service.ts
import { Injectable } from '@angular/core';
import { Webinar1 } from './interface';

@Injectable({
  providedIn: 'root',
})
export class WebinarService1 {
  getWebinarData(): Webinar1 {
    return {
      title: 'WEBINAIRE N°17',
      theme: "L'INTELLIGENCE ARTIFICIELLE AU SERVICE DU COMPTABLE",
      date: 'Samedi 23 Novembre 2024',
      time: '10:00',
      format: 'Gratuit',
      presenters: [
        {
          name: 'Anthony Nebie',
          role: 'Web Entrepreneur',
          image: 'path_to_anthony_image.jpg',
        },
        {
          name: 'Massogolo Latifah Sanogo',
          role: 'Auditrice Comptable et Financière',
          image: 'path_to_latifah_image.jpg',
        },
      ],
      links: {
        youtube: 'https://youtube.com/channel_id',
        email: 'infos@fidalli-ec.com',
        whatsapp: '+22672776969',
      },
    };
  }
}
