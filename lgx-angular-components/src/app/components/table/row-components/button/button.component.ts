import { Component, OnInit, Input } from '@angular/core';
import { ITableAction } from '../../table.component.interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public button: ITableAction;
  constructor() { }

  ngOnInit() {
  }

}
