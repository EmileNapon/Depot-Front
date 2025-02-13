export class Webinar {
    id: string;
    user!:number;
    title: string;
    description?: string;
    speaker: string;
    speakerPicture_url?: string;
    startDateTime: Date;
    endDateTime: Date;
    registrationDeadline?: Date;
    webinarUrl?: string;
    maxParticipants: number;
    isPaid: boolean;
    price?: number;
    createdAt?: Date;
    updatedAt?: Date;
    type: 'FuturAllies' | 'Café des allies';
  
    constructor(
      id: string,
      title: string,
      speaker: string,
      startDateTime: Date,
      endDateTime: Date,
      maxParticipants: number,
      isPaid: boolean,
      type: 'FuturAllies' | 'Café des allies',
      description?: string,
      speakerPicture_url?: string,
      registrationDeadline?: Date,
      webinarUrl?: string,
      price?: number,
      createdAt?: Date,
      updatedAt?: Date,
    ) {
      this.id = id;
      this.title = title;
      this.speaker = speaker;
      this.startDateTime = startDateTime;
      this.endDateTime = endDateTime;
      this.maxParticipants = maxParticipants;
      this.isPaid = isPaid;
      this.type = type;
      this.description = description;
      this.speakerPicture_url = speakerPicture_url;
      this.registrationDeadline = registrationDeadline;
      this.webinarUrl = webinarUrl;
      this.price = price;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  