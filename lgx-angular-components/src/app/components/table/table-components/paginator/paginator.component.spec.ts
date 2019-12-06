import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PaginatorComponent } from './paginator.component';
import { ITablePagination } from '../../table.component.interfaces';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    component.pagination = {
      page: 3,
      itemsPerPage: 10,
      total: 20
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pageParams()', () => {
    let pagination: ITablePagination;
    component.changePagination.subscribe(p => pagination = p);
    component.pageParams({
      pageIndex: 3,
      previousPageIndex: 2,
      pageSize: 10,
      length: 20
    });
    expect(pagination.page).toBe(4);
  });
});
