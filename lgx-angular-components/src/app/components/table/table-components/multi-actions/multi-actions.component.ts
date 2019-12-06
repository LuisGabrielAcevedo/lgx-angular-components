import { Component, OnInit, Input } from '@angular/core';
import { ITableItem } from '../../table.component.interfaces';

@Component({
  selector: 'app-multi-actions',
  templateUrl: './multi-actions.component.html',
  styleUrls: ['../../table.component.scss']
})
export class MultiActionsComponent implements OnInit {
  @Input() public selectedItems: ITableItem[] = [];
  constructor() { }

  ngOnInit() {
  }
}
