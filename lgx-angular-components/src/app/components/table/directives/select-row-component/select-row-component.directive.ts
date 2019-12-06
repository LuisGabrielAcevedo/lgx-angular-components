import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[selectRowComponent]'
})
export class SelectRowComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
