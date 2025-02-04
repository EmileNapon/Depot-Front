// offer.model.ts

export class Offer {
    id: string;
    title: string;
    enterprise: string;
    enterpriseLocation: string;
    enterWebsite?: string;
    description: string;
    domain: string;
    location: string;
    salary?: number;
    duration?: number;
    type: 'Job' | 'Internship' | 'Other';
    requirements?: string;
    responsibilities?: string;
    educationLevel?: string;
    experienceLevel?: string;
    contractType: 'CDI' | 'CDD';
    benefits?: string;
    contactEmail: string;
    status: 'Open' | 'Closed' | 'Pending';
    isRemote: boolean;
    applicationMode: 'Online' | 'Physical' | 'Both';
    onlineSubmission: boolean;
    isRequiredCvDoc: boolean;
    isRequiredMlDoc: boolean;
    canAddOthersDoc: boolean;
    applicationLink?: string;
    additionalInfo?: string;
    createdBy: string;
    postedDate: Date;
    updatedDate?: Date;
    expirationDate?: Date;

    constructor(
        id: string,
        title: string,
        enterprise: string,
        enterpriseLocation: string,
        description: string,
        domain: string,
        location: string,
        type: 'Job' | 'Internship' | 'Other',
        contractType: 'CDI' | 'CDD',
        contactEmail: string,
        postedDate: Date,
        status: 'Open' | 'Closed' | 'Pending',
        isRemote: boolean,
        applicationMode: 'Online' | 'Physical' | 'Both',
        onlineSubmission: boolean,
        isRequiredCvDoc: boolean,
        isRequiredMlDoc: boolean,
        canAddOthersDoc: boolean,
        createdBy: string,
        salary?: number,
        duration?: number,
        enterWebsite?: string,
        requirements?: string,
        responsibilities?: string,
        educationLevel?: string,
        experienceLevel?: string,
        benefits?: string,
        expirationDate?: Date,
        applicationLink?: string,
        additionalInfo?: string,
        updatedDate?: Date,
    ) {
        this.id = id;
        this.title = title;
        this.enterprise = enterprise;
        this.enterpriseLocation = enterpriseLocation;
        this.description = description;
        this.domain = domain;
        this.location = location;
        this.type = type;
        this.contractType = contractType;
        this.contactEmail = contactEmail;
        this.postedDate = postedDate;
        this.status = status;
        this.isRemote = isRemote;
        this.applicationMode = applicationMode;
        this.onlineSubmission = onlineSubmission;
        this.isRequiredCvDoc = isRequiredCvDoc;
        this.isRequiredMlDoc = isRequiredMlDoc;
        this.canAddOthersDoc = canAddOthersDoc;
        this.salary = salary;
        this.duration = duration;
        this.enterWebsite = enterWebsite;
        this.requirements = requirements;
        this.responsibilities = responsibilities;
        this.educationLevel = educationLevel;
        this.experienceLevel = experienceLevel;
        this.benefits = benefits;
        this.expirationDate = expirationDate;
        this.applicationLink = applicationLink;
        this.additionalInfo = additionalInfo;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
    }
}

// offer-application.model.ts

export class OfferApplication {
    id: string;
    offer: string;
    candidat: string;
    status: 'Pending' | 'Accepted' | 'Rejected' | 'In Review';
    message: string;
    submittedDocumentsIds: string[];
    applicationDate: Date;
    lastUpdated: Date;

    constructor(
        id: string,
        offer: string,
        candidatId: string,
        status: 'Pending' | 'Accepted' | 'Rejected' | 'In Review',
        message: string,
        submittedDocumentsIds: string[],
        applicationDate: Date,
        lastUpdated: Date
    ) {
        this.id = id;
        this.offer = offer;
        this.candidat = candidatId;
        this.status = status;
        this.message = message;
        this.submittedDocumentsIds = submittedDocumentsIds;
        this.applicationDate = applicationDate;
        this.lastUpdated = lastUpdated;
    }
}


// offer-stats.model.ts

export class OfferStats {
    _id: string;
    name: string;
    stat: number;

    constructor(_id: string, name: string, stat: number) {
        this._id = _id;
        this.name = name;
        this.stat = stat;
    }
}

