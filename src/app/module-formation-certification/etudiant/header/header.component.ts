import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showSearch = false;
  nom:any;
  prenom:any;
  
  
  ngOnInit():void{
  }
  
  
    toggleSearch() {
      this.showSearch = !this.showSearch;
    }
  
    isFixed: boolean = false;
  
  
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollOffset = 20;  // Distance de défilement avant que la navbar ne devienne fixe
  
      // Ajouter la classe fixed si l'utilisateur a défilé au-delà du seuil
      if (window.pageYOffset > scrollOffset) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }

}
