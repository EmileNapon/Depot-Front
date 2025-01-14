export class Offer {  
  id: string;  
  enterprise: string;             // Added enterpriseId to link to the Enterprise  
  title: string;  
  description: string;  
  domain: string;  
  location: string;  
  salary?: number;  
  duration?: number;  
  type: 'Job' | 'Internship' | 'Other';  
  requirements?: string;  
  responsibilities?: string;  
  education_level?: string;  
  experience_level?: string;  
  contract_type: 'Full-Time' | 'Part-Time' | 'Internship' | 'Freelance' | 'Temporary';  
  benefits?: string;  
  contact_email: string;  
  posted_date: Date;  
  expiration_date?: Date;  
  status: 'Open' | 'Closed' | 'Pending';  
  // Remote and application details  
  is_remote: boolean;  
  application_mode: 'Online' | 'Physical' | 'Both';  
  online_submission: boolean;  
  physical_address?: string;  
  // Document requirements  
  is_required_cv_doc: boolean;         // Indicates if a CV is required  
  is_required_ml_doc: boolean;         // Indicates if a motivation letter is required  
  can_add_others_doc: boolean;         // Allows additional documents  
  // Additional offer info  
  application_link?: string;  
  additional_info?: string;  

  constructor(  
    id: string, 
    enterprise: string,           // Added enterpriseId parameter   
    title: string,  
    description: string,  
    domain: string,  
    location: string,  
    type: 'Job' | 'Internship' | 'Other',  
    contract_type: 'Full-Time' | 'Part-Time' | 'Internship' | 'Freelance' | 'Temporary',  
    contact_email: string,  
    is_remote: boolean = false,  
    posted_date: Date = new Date(),  
    status: 'Open' | 'Closed' | 'Pending' = 'Open',  
    application_mode: 'Online' | 'Physical' | 'Both' = 'Online',  
    is_required_cv_doc: boolean = true,  
    is_required_ml_doc: boolean = false,  
    can_add_others_doc: boolean = false,  
    online_submission: boolean = true,  
    salary?: number,  
    duration?: number,  
    requirements?: string,  
    responsibilities?: string,  
    education_level?: string,  
    experience_level?: string,  
    benefits?: string,  
    application_link?: string,  
    expiration_date?: Date,  
    physical_address?: string,  
    additional_info?: string  
  ) {  
    this.id = id;  
    this.enterprise = enterprise; // Assign enterpriseId 
    this.title = title;  
    this.description = description;  
    this.domain = domain;  
    this.location = location;  
    this.type = type;  
    this.contract_type = contract_type;  
    this.contact_email = contact_email;   
    this.is_remote = is_remote;  
    this.posted_date = posted_date;  
    this.status = status;  
    this.application_mode = application_mode;  
    this.online_submission = online_submission;  
    // Document requirements  
    this.is_required_cv_doc = is_required_cv_doc;  
    this.is_required_ml_doc = is_required_ml_doc;  
    this.can_add_others_doc = can_add_others_doc;  
    // Assign optional properties  
    if (salary !== undefined) this.salary = salary;  
    if (duration !== undefined) this.duration = duration;  
    if (requirements) this.requirements = requirements;  
    if (responsibilities) this.responsibilities = responsibilities;  
    if (education_level) this.education_level = education_level;  
    if (experience_level) this.experience_level = experience_level;  
    if (benefits) this.benefits = benefits;  
    if (application_link) this.application_link = application_link;  
    if (expiration_date) this.expiration_date = expiration_date;  
    if (physical_address) this.physical_address = physical_address;  
    if (additional_info) this.additional_info = additional_info;  
  }  
}