import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseFieldComponent } from '../base-field.mixin';

@Component({
  selector: 'app-enum-select',
  templateUrl: './enum-select.component.html',
  styleUrls: ['../../dynamic-form.component.scss']
})
export class EnumSelectComponent extends BaseFieldComponent implements OnInit, OnDestroy {
  ngOnInit() {
    this.initComponent();
    this.loadFieldOptions().subscribe(data => (this.options = data));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
