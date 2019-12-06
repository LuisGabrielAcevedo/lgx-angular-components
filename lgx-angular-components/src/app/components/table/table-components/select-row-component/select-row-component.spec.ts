import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectRowComponent } from './select-row-component.component';
import { SimpleChange, ApplicationRef } from '@angular/core';
import { userHeaders, users } from '../../mocks/users';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TextComponent } from '../../row-components/text/text.component';
import { SelectRowComponentDirective } from '../../directives/select-row-component/select-row-component.directive';

describe('SelectRowComponent', () => {
    let component: SelectRowComponent;
    let fixture: ComponentFixture<SelectRowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectRowComponent, TextComponent]
        });
        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TextComponent]
            }
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectRowComponent);
        component = fixture.componentInstance;
        component.selectRowComponentDirective = new SelectRowComponentDirective(null);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('changes', () => {
        // component.header = userHeaders[0];
        // component.item = users[0];
        // component.ngOnChanges({
        //     item: new SimpleChange(null, users[0], true)
        // });
        // console.log(component);
        // fixture.detectChanges();
        // spyOn(component, 'loadComponent');
        // expect( component.loadComponent ).toHaveBeenCalled();
    // });
});
