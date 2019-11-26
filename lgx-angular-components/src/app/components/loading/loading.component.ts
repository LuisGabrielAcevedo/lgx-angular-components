import { Component, OnInit, Input } from '@angular/core';
import { ILoadingType } from './loading.interfaces';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() public type: ILoadingType;
  ngOnInit() {
  }
}
