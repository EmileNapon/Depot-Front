export class Enterprise {  
    id: string;  
    name: string;  
    location: string;  
    recruitment_email: string;
    size: string; // Par exemple: "Small", "Medium", "Large"  
    website: string;  
    description?: string;  
    industry?: string;  
    founded_year?: number;  
    headquarters_location?: string;  
    numberOf_employees?: number;  
    company_culture?: string;  
    social_media_links?: { [platform: string]: string };  
    rating?: number; // Note sur 5  
    awardsAnd_recognition?: string[];  
    benefits_overview?: string;  
    logo_url?: string;  
  
    constructor(  
      id: string,   
      name: string,   
      location: string,   
      recruitment_email: string,
      size: "Small" | "Medium" | "Large" ,  
      website: string,  
      description?: string,  
      industry?: string,  
      founded_year?: number,  
      headquarters_location?: string,  
      numberOf_employees?: number,  
      company_culture?: string,  
      social_media_links?: { [platform: string]: string },  
      rating?: number,  
      awardsAnd_recognition?: string[],  
      benefits_overview?: string,  
      logo_url?: string  
    ) {  
      this.id = id;  
      this.name = name;  
      this.location = location;  
      this.recruitment_email = recruitment_email;
      this.size = size;  
      this.website = website;  
      if (description) this.description = description;  
      if (industry) this.industry = industry;  
      if (founded_year) this.founded_year = founded_year;  
      if (headquarters_location) this.headquarters_location = headquarters_location;  
      if (numberOf_employees) this.numberOf_employees = numberOf_employees;  
      if (company_culture) this.company_culture = company_culture;  
      if (social_media_links) this.social_media_links = social_media_links;  
      if (rating) this.rating = rating;  
      if (awardsAnd_recognition) this.awardsAnd_recognition = awardsAnd_recognition;  
      if (benefits_overview) this.benefits_overview = benefits_overview;  
      if (logo_url) this.logo_url = logo_url;  
    }  
  }