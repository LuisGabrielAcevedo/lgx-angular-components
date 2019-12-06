import { Component, OnInit, Input } from '@angular/core';
import { ITableHeader, ITableItem } from '../../table.component.interfaces';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() public header: ITableHeader;
  @Input() public item: ITableItem;
  constructor() { }

  ngOnInit() {
  }

}
