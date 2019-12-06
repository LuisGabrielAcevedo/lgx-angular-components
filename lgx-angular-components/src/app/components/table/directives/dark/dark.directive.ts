import { Directive } from '@angular/core';
import { TableComponent } from '../../table.component';

@Directive({
  selector: '[dark]'
})
export class DarkDirective {
  constructor(el: TableComponent) { 
    el.theme = 'dark';
  }

}
