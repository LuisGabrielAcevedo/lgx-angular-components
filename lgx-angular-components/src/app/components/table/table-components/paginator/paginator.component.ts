import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITablePagination } from '../../table.component.interfaces';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() pagination: ITablePagination;
  @Output() changePagination: EventEmitter<ITablePagination> = new EventEmitter();

  pageParams(pagination: PageEvent) {
    const currentPage = this.pagination.itemsPerPage !== pagination.pageSize ? 1 : pagination.pageIndex + 1;
    const paginationToChange: ITablePagination = {
      page: currentPage,
      total: pagination.length,
      itemsPerPage: pagination.pageSize
    };
    this.changePagination.emit(paginationToChange);
  }

}
