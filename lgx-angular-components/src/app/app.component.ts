import { Component, OnInit } from '@angular/core';
import {
  ITableHeader,
  ITableItem,
  ETableRowComponent,
  ITablePagination,
  ITableChanges,
  ETableLoadingType} from './components/table/table.component.interfaces';
import { User } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lgx-angular-components';
  headers: ITableHeader[] = [];
  data: ITableItem[] = [];
  loading = false;
  loadingType = ETableLoadingType.progressBar;
  pagination: ITablePagination = {
    page: 1,
    itemsPerPage: 5,
    total: 0
  };
  constructor() {
    this.headers = [
      {
        name: 'Name',
        key: 'firstName,lastName',
        component: ETableRowComponent.text
      },
      {
          name: 'Email',
          key: 'email',
          component: ETableRowComponent.text
      },
      {
          name: 'Company',
          key: 'company.name',
          component: ETableRowComponent.text
      },
      {
          name: 'Dni' ,
          key: 'userInformation.documentNumber',
          component: ETableRowComponent.text
      }
    ];
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    User
    .page(this.pagination.page)
    .perPage(this.pagination.itemsPerPage)
    .with('company,userInformation')
    .findRx().subscribe(resp => {
      this.pagination = {
        page: resp.currentPage,
        itemsPerPage: resp.itemsPerPage,
        total: resp.totalItems
      };
      this.data = resp.data;
      this.loading = false;
    });
  }

  tableChanges(data: ITableChanges) {
    if (data.pagination) {
      this.pagination = data.pagination;
      this.loadUsers();
    }
  }
}
