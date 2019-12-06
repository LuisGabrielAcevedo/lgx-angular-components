import { Directive } from '@angular/core';
import { TableComponent } from '../../table.component';

@Directive({
  selector: '[autoPagination]'
})
export class AutoPaginationDirective {

  constructor(el: TableComponent) {
    el.autoPagination = true;
  }

}
