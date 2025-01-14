// models/webinar.model.ts
export interface Webinar1 {
    title: string;
    theme: string;
    date: string;
    time: string;
    format: string;
    presenters: {
      name: string;
      role: string;
      image: string;
    }[];
    links: {
      youtube: string;
      email: string;
      whatsapp: string;
    };
  }
  