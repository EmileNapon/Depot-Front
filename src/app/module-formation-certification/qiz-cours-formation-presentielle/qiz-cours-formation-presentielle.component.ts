import { Component } from '@angular/core';

@Component({
  selector: 'app-qiz-cours-formation-presentielle',
  templateUrl: './qiz-cours-formation-presentielle.component.html',
  styleUrls: ['./qiz-cours-formation-presentielle.component.css']
})
export class QizCoursFormationPresentielleComponent {

  webinarData!: Webinar;

  constructor(private webinarService: WebinarService) {}

  ngOnInit(): void {
    this.webinarData = this.webinarService.getWebinarData();
  



}
