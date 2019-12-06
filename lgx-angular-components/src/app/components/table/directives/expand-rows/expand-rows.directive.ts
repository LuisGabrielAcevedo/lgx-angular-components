import { Directive } from '@angular/core';
import { TableComponent } from '../../table.component';

@Directive({
  selector: '[expandRows]'
})
export class ExpandRowsDirective {

  constructor(el: TableComponent ) {
    el.expandRows = true;
  }

}
