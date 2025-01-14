export class OfferStats {
    _id: string;
    name: string;
    stat: number;
  
    constructor(
        _id: string,
        name: string,
        stat: number,
    ) {
        this._id= _id;
        this.name= name;
        this.stat= stat;
    }
  }
  