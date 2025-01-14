import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orientation-acceuil',
  templateUrl: './orientation-acceuil.component.html',
  styleUrls: ['./orientation-acceuil.component.css']
})
export class OrientationAcceuilComponent {


  @ViewChild('profileStats') profileStatsElement!: ElementRef;

  toggleStats(): void {
    const stats = this.profileStatsElement.nativeElement as HTMLElement;
    if (stats.style.display === 'block') {
      stats.style.display = 'none';
    } else {
      stats.style.display = 'block';
    }
  }
}



