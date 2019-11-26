import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FormComponent } from './dynamic-form.mixin';
import { FormBuilder } from '@angular/forms';
import cloneDeep from 'lodash/cloneDeep';
import {
  IDynamicFormField,
  IDynamicFormModel,
  IDynamicFormResponse
} from './dynamic-form.interfaces';
import { DynamicFormService } from './dynamic-form.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent extends FormComponent
  implements OnInit, OnChanges {
  constructor(
    public fb: FormBuilder,
    public dynamicFormService: DynamicFormService
  ) {
    super(fb, dynamicFormService);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const fields: IDynamicFormField[] = changes.fieldsConfig
      ? changes.fieldsConfig.currentValue
      : undefined;
    const model: IDynamicFormModel = changes.model
      ? changes.model.currentValue
      : undefined;
    if (fields && fields.length) {
      this.mainGroupsFormatted = cloneDeep(this.formatFields());
    }
    if (model) {
      this.currentModel = cloneDeep(model);
      this.updateForm(model);
    }
  }

  public submit(): Observable<IDynamicFormResponse> {
    this.updateModel();
    if (this.form.valid) {
      return of({
        valid: true,
        model: this.currentModel,
        errors: null
      });
    } else {
      this.errors = {};
      this.validateForm(this.form);
      this.searchInvalidMainGroup();
      return of({
        valid: false,
        model: this.currentModel,
        errors: this.errors
      });
    }
  }
}
