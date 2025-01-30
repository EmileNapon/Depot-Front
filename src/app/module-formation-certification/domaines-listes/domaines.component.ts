import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import{ModuleService} from "./domaines_service/domainesServices"

@Component({
    selector: 'app-card-module',
    templateUrl: './domaines.component.html',
    styleUrls: ['./domaines.component.css'],
    standalone: false
})
export class ModuleComponent implements OnInit {

  constructor(private moduleService: ModuleService, private router: ActivatedRoute, private route:Router) { }

  domaineId: string | null = null;
  modules: any[] = [];
  filteredModules: any[] = [];

  ngOnInit(): void {
    // Récupérer l'ID du domaine à partir de l'URL
    this.domaineId = this.router.snapshot.paramMap.get('domaineId');
    //console.log(this.domaineId)
    this.loadModules();
  }

  loadModules(): void {
    this.moduleService.getModules().subscribe(data => {
      this.modules = data;
      this.filterModules(); // Filtrer les matières en fonction de l'ID du domaine
      
    });
  }
  filterModules(): void {
    if (this.domaineId) {
      this.filteredModules = this.modules.filter(module => module.domaine == this.domaineId);
     
  
    }
  }

  onSelectModule(coursId: string): void {
    this.route.navigate([`/modules/${coursId}/cours`]); // Redirection vers la page des matières du domaine sélectionné
  }
}
