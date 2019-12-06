import { Directive } from '@angular/core';
import { TableComponent } from '../../table.component';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

  constructor(el: TableComponent) { 
    el.infiniteScroll = true;
  }

}
