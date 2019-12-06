import { Component, Input } from '@angular/core';
import { ETableLoadingType } from '../../table.component.interfaces';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() public type: ETableLoadingType;
}
