import { Directive } from '@angular/core';
import { TableComponent } from '../../table.component';

@Directive({
  selector: '[mobile]'
})
export class MobileDirective {

  constructor(el: TableComponent) {
    el.mobileMode = true;
  }

}
