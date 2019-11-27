import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseFieldComponent } from '../base-field.mixin';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['../../dynamic-form.component.scss']
})
export class TextareaComponent extends BaseFieldComponent implements OnInit, OnDestroy {
  ngOnInit() {
    this.initComponent();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
