import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, QueryList, SimpleChange } from '@angular/core';
import { users, userHeaders } from './mocks/users';
import { MatCheckbox } from '@angular/material/checkbox';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let fixture2: ComponentFixture<MatCheckbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, MatCheckbox],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    fixture2 = TestBed.createComponent(MatCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Mock inputs
    component.data = users;
    component.dataToRender = users;
    component.headers = userHeaders;
    component.checkboxes = new QueryList();
    // Mock view children
    component.data.forEach(() => {
      component.checkboxes.reset([...component.checkboxes.toArray(), fixture2.debugElement.children[0].componentInstance]);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectAllFn()', () => {
    component.selectedAll.patchValue(true);
    expect(component.selectedItems.length).toBe(4);
    expect(component.checkboxes.toArray()[0].checked).toBe(true);
    component.selectedAll.patchValue(false);
    expect(component.selectedItems.length).toBe(0);
    expect(component.checkboxes.toArray()[0].checked).toBe(false);
  });

  it('selectItem()', () => {
    const checkbox: MatCheckbox = component.checkboxes.toArray()[0];
    component.selectItem({
      checked: true,
      source: checkbox
    }, users[0]);
    expect(component.selectedItems.length).toBe(1);
    expect(component.indeterminate).toBe(true);
    expect(component.selectedAll.value).toBe(false);

    component.selectItem({
      checked: false,
      source: checkbox
    }, users[0]);
    expect(component.selectedItems.length).toBe(0);
  });

  it('resetTable()', () => {
    component.selectedItems = component.data;
    component.selectedAll.patchValue(true);
    component.resetTable();
    expect(component.selectedItems.length).toBe(0);
  });

  it('rowClick()', () => {
    component.expandRows = true;
    component.rowClick(1);
    expect(component.expandedRows).toContain(1);
    component.rowClick(1);
    expect(component.expandedRows.length).toBe(0);
    component.dialogRows = true;
    component.rowClick(1);
    expect(component.openDialogRows).toContain(1);
    component.rowClick(1);
    expect(component.openDialogRows.length).toBe(0);
  });


  it('setData()', () => {
    component.autoPagination = true;
    component.ngOnChanges({
      data: new SimpleChange(null, users, true)
    });
    expect(component.dataToRender.length).toBe(2);
    component.autoPagination = false;
    component.ngOnChanges({
      data: new SimpleChange(null, users, true)
    });
    expect(component.dataToRender.length).toBe(4);
  });

  it('changePagination()', () => {
    component.autoPagination = true;
    component.changePagination({
      page: 10,
      itemsPerPage: 20,
      total: 2000
    });
    expect(component.pagination.page).toBe(10);
    expect(component.pagination.itemsPerPage).toBe(20);
  });
});
