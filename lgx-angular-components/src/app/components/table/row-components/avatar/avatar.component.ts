import { Component, OnInit, Input } from '@angular/core';
import { ITableHeader, ITableItem } from '../../table.component.interfaces';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() public header: ITableHeader;
  @Input() public item: ITableItem;
  constructor() { }

  ngOnInit() {
  }

}
