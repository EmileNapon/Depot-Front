import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceEditComponent } from './components/resource-edit/resource-edit.component';
import { ResourceCreateComponent } from './components/resource-create/resource-create.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { LoginComponent } from './components/login/login.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    MenuComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    ResourceListComponent,
    ResourceEditComponent,
    ResourceCreateComponent,
    ResourceDetailsComponent,
    ConfirmationDialogComponent,
  ],
  imports: [

    AdminRoutingModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatInputModule,
    MatBadgeModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatTooltipModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxChartsModule
  ],
  exports: [
    LoginComponent,
    AdminComponent,
    MenuComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    ResourceListComponent,
    ResourceEditComponent,
    ResourceCreateComponent,
    ResourceDetailsComponent,
    ConfirmationDialogComponent,
  ]
})

export class AdminModule { }
