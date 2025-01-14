import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceCreateComponent } from './components/resource-create/resource-create.component';
import { ResourceEditComponent } from './components/resource-edit/resource-edit.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Redirection vers dashboard si l'URL est vide
      { path: 'dashboard', component: DashboardComponent,},
      { path: 'list/:resourceType', component: ResourceListComponent },
      { path: 'list/:resourceType/:resourceChild', component: ResourceListComponent },
      { path: 'create/:resourceType', component: ResourceCreateComponent },
      { path: 'edit/:resourceType/:id', component: ResourceEditComponent },
      { path: 'details/:resourceType/:id', component: ResourceDetailsComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}