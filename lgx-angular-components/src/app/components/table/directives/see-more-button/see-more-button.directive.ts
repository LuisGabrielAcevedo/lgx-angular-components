import { Directive } from '@angular/core';
import { TableComponent } from '../../table.component';

@Directive({
  selector: '[seeMoreButton]'
})
export class SeeMoreButtonDirective {

  constructor(el: TableComponent) {
    el.seeMoreButton = true;
  }
}
