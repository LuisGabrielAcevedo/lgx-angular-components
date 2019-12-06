import { Type } from '@angular/core';
import { ITableItem, ITableHeader } from '../../table.component.interfaces';

export class DynamicComponent {
  constructor(
    public component: Type<any>,
    public item: ITableItem,
    public header: ITableHeader
  ) {}
}
