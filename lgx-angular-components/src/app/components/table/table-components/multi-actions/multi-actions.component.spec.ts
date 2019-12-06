import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiActionsComponent } from './multi-actions.component';

describe('MultiActionsComponent', () => {
  let component: MultiActionsComponent;
  let fixture: ComponentFixture<MultiActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
