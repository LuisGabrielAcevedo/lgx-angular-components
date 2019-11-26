import { Component } from '@angular/core';
import { EDynamicFormFieldTypes } from './components/dynamic-form/dynamic-form.interfaces';
import { DynamicFormValidators } from './components/dynamic-form/validate/dynamic-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = [
    {
        name: 'Name',
        key: 'name',
        component: EDynamicFormFieldTypes.textField,
        validators: [DynamicFormValidators.required()],
        flexConfig: {
            row: 1,
            flex: 50
        },
        options: {
            disableCondition: arg => arg._id
        }
    },
    {
        name: 'Code',
        key: 'code',
        component: EDynamicFormFieldTypes.textField,
        validators: [DynamicFormValidators.required()],
        flexConfig: {
            row: 1,
            flex: 50
        },
        options: {
            disableCondition: arg => arg._id
        }
    },
    {
        name: 'Description',
        key: 'description',
        component: EDynamicFormFieldTypes.textarea
    }
]
}
