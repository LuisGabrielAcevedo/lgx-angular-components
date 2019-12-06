import { Component,
  OnInit,
  Input,
  OnDestroy,
  ViewChildren,
  QueryList, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ITableHeader, ITableItem, ITableAction, ITablePagination, ETableAction, ITableChanges } from './table.component.interfaces';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public headers: ITableHeader[] = [];
  @Input() public data: ITableItem[] = [];
  @Input() public loading = false;
  @Input() public loadingType = 'SIMPLE';
  @Input() public defaultMessage = 'Not available data';
  @Input() public rowActions: ITableAction[] = [];
  @Input() public tablePagination: ITablePagination;
  @Input() public multiSelectionBy: string;
  @Input() public pagination: ITablePagination;
  @Input() public itemsPerPage = 2;
  @Output() public tableChanges: EventEmitter<ITableChanges> = new EventEmitter();

  public theme = 'material';
  public autoPagination = false;
  public mobileMode = false;
  public showIndex = false;
  public expandRows = false;
  public dialogRows = false;
  public infiniteScroll = false;

  public dataToRender: ITableItem[] = [];
  public expandedRows: number[] = [];
  public openDialogRows: number[] = [];
  public selectedItems: ITableItem[] = [];
  public selectedAll: FormControl;
  public indeterminate = false;
  public tableChangesData: ITableChanges = {};
  public subscriptions: Subscription[] = [];
  @ViewChildren('checkbox') checkboxes: QueryList<MatCheckbox>;

  constructor() {
    this.selectedAll = new FormControl(false);
  }

  ngOnInit() {
    this.subscriptions.push(
      this.selectedAll.valueChanges.subscribe(v => this.selectAllFn(v))
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    const data: ITableItem[] = changes.data
      ? changes.data.currentValue
      : undefined;
    if (data) {
      if (this.autoPagination) {
        this.pagination = {
          page: 1,
          itemsPerPage: +this.itemsPerPage,
          total: data.length
        };
      }
      this.setData();
    }
  }

  setData() {
    if (this.autoPagination) {
      const offset: number = (this.pagination.page - 1) * this.pagination.itemsPerPage;
      const data: ITableItem[] = this.data.slice(
        offset,
        offset + this.pagination.itemsPerPage
      );
      this.dataToRender = data;
    } else {
      this.dataToRender = this.data;
    }
  }

  resetTable() {
    this.expandedRows = [];
    this.openDialogRows = [];
    this.selectedItems = [];
    this.selectedAll.patchValue(false);
    this.indeterminate = false;
  }

  rowClick(i: number) {
    if (this.expandRows) {
      this.expandedRows.includes(i)
        ? this.expandRow(i, ETableAction.close)
        : this.expandRow(i, ETableAction.open);
    }

    if (this.dialogRows) {
      this.openDialogRows.includes(i)
        ? this.openDialogRow(i, ETableAction.close)
        : this.openDialogRow(i, ETableAction.open);
    }
  }

  expandRow(i: number, action: ETableAction) {
    if (action === ETableAction.open) {
      this.expandedRows.push(i);
    } else {
      this.expandedRows = this.expandedRows.filter(r => r !== i);
    }
  }

  openDialogRow(i: number, action: ETableAction) {
    if (action === ETableAction.open) {
      this.openDialogRows.push(i);
    } else {
      this.openDialogRows = this.openDialogRows.filter(r => r !== i);
    }
  }

  selectAllFn(value: boolean) {
    this.selectedItems = value ? this.dataToRender : [];
    this.checkboxes.forEach(checkbox => {
      checkbox.checked = value;
    });
  }

  selectItem(e: MatCheckboxChange, item: ITableItem) {
    this.selectedItems = e.checked
      ? [...this.selectedItems, item]
      : this.selectedItems.filter(i => i[this.multiSelectionBy] !== item[this.multiSelectionBy]);
    this.selectedAll.patchValue(this.selectedItems.length === this.dataToRender.length, { emitEvent: false });
    this.indeterminate = this.selectedItems.length > 0 && this.selectedItems.length < this.dataToRender.length;
  }

  changePagination(pagination: ITablePagination) {
    if (this.autoPagination) {
      this.pagination = pagination;
      this.setData();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
