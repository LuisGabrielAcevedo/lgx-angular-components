import { Component, Input } from '@angular/core';
import { ITableHeader, ITableItem } from '../../table.component.interfaces';
import formatTextFn from '../../utils/format-text';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() public header: ITableHeader;
  @Input() public item: ITableItem;
  constructor() { }

  formatText() {
    const text: string = formatTextFn(this.item, this.header.key);
    return text || '- -';
  }

}
