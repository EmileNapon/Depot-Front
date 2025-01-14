import { Component, OnInit, OnDestroy, Renderer2, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from '../../services/resource.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Resource, Property } from '../../models/resource.model';
import { ressources } from '../../configs/reource.config';
import { MatTooltip } from '@angular/material/tooltip';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit, OnDestroy {
  resourceType: string = '';
  resource: Resource | undefined;
  resourceData: any[] = [];
  paginatedData: any[] = [];
  selectedItems: any[] = [];
  searchQuery: string = '';
  loading: boolean = false;
  isDeleting: boolean = false;
  showBulkDeleteButton: boolean = false;
  columns: string[] = [];
  listToDisplay!: Property[];
  pageSizeOptions = [5, 10, 20];
  paginationConfig = { pageSize: 10, pageSizeOptions: this.pageSizeOptions, currentPage: 1 };

  @ViewChildren(MatTooltip) tooltips!: QueryList<MatTooltip>;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private dialog: MatDialog,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.resourceType = this.route.snapshot.paramMap.get('resourceType') || '';
    this.loadResourceConfig();
    this.loadData();
    console.log("$$$$$$$$$$$$$$$$$", this.resourceType)
  }

  ngOnDestroy(): void {
    this.tooltips.forEach((tooltip) => tooltip.hide(0));
    this.overlayContainer.getContainerElement().innerHTML = '';
    const tooltips = this.el.nativeElement.querySelectorAll('.mat-tooltip');
    tooltips.forEach((tooltip: HTMLElement) => {
      if (tooltip && tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
      }
    });
  }
  
  loadResourceConfig(): void {
    const resourceToLoad = ressources[this.resourceType];
    if (resourceToLoad) {
      this.resource = resourceToLoad.resource;
      const options = this.resource.options;
      this.listToDisplay = options.properties.showProperties;
      this.columns = ['select', ...options.properties.showProperties.map(p => p.name), 'actions'];
    } else {
      console.error('Resource not found');
    }
  }

  loadData(): void {
    if (!this.resource) return;
    this.loading = true;
    this.resourceService.getResources(this.resourceType).subscribe(
      data => {
        this.resourceData = data.map(item => ({ ...item, selected: false }));
        this.updatePaginatedData();
        this.loading = false;
        console.log('logggggggggggg', data)
      },
      
      error => {
        console.error('Error loading data', error);
        this.loading = false;
      }
    );
  }

  updatePaginatedData(): void {
    const filteredData = this.searchQuery
      ? this.resourceData.filter((item) =>
          Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        )
      : this.resourceData;
    const startIndex = (this.paginationConfig.currentPage - 1) * this.paginationConfig.pageSize;
    const endIndex = startIndex + this.paginationConfig.pageSize;
    this.paginatedData = filteredData.slice(startIndex, endIndex);
  }

  onSearchChange(): void {
    this.paginationConfig.currentPage = 1;
    this.updatePaginatedData();
  }

  toggleAllRows(isChecked: boolean): void {
    this.paginatedData.forEach((item) => {
      item.selected = isChecked;
    });
    this.updateSelectedItems();
    this.updateDisplayedColumns();
  }

  updateSelectedItems(): void {
    this.selectedItems = this.paginatedData.filter((item) => item.selected);
    this.showBulkDeleteButton = this.selectedItems.length > 0;
    this.updateDisplayedColumns();
  }

  updateDisplayedColumns(): void {
    if (this.selectedItems.length > 0) {
      this.columns = this.columns.filter(col => col !== 'actions');
    } else {
      if (!this.columns.includes('actions')) {
        this.columns.push('actions');
      }
    }
  }

  executeBulkDelete(): void {
    if (this.selectedItems.length > 0) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          title: 'Confirm bulk delete',
          message: `Are you sure you want to delete these ${this.selectedItems.length} items?`
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.isDeleting = true;
          this.selectedItems.forEach((item, index) => {
            this.resourceService.deleteResource(this.resourceType, item._id).subscribe({
              next: () => {
                this.resourceData = this.resourceData.filter(i => i._id !== item._id);
                if (index === this.selectedItems.length - 1) {
                  this.loadData();
                  this.isDeleting = false;
                  this.updatePaginatedData();
                  this.selectedItems = [];
                  this.updateDisplayedColumns();
                }
              },
              error: (err) => {
                console.error('Error deleting item:', err);
                this.isDeleting = false;
              }
            });
          });
        }
      });
    }
  }

  onPageChange(event: any): void {
    this.paginationConfig.pageSize = event.pageSize;
    this.paginationConfig.currentPage = event.pageIndex + 1;
    this.updatePaginatedData();
  }

  onAddClick(): void {
    this.router.navigate([`admin/create/${this.resourceType}`]);
  }

  viewElementDetails(item: any): void {
    this.router.navigate([`admin/details/${this.resourceType}/${item.id}`]);
  }

  editElement(item: any): void {
    this.router.navigate([`admin/edit/${this.resourceType}/${item.id}`]);
  }

  isActionsColumnVisible(): boolean {
    return this.selectedItems.length === 0;
  }
}
