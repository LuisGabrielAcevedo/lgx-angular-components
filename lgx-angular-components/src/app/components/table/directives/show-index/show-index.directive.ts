import { Directive } from '@angular/core';
import { TableComponent } from '../../table.component';

@Directive({
  selector: '[showIndex]'
})
export class ShowIndexDirective {
  constructor(el: TableComponent) {
    el.showIndex = true;
  }
}
