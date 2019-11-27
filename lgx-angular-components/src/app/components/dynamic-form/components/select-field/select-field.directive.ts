import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicFormSelectComponentDirective]'
})
export class IDynamicFormSelectComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
