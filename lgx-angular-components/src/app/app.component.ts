import { Component } from '@angular/core';
import { EDynamicFormFieldTypes } from './components/dynamic-form/dynamic-form.interfaces';
import { ITableItem, ETableComponents, ITableHeader } from './components/table2/table/table.interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    config = [
        {
            name: 'Text field',
            key: 'textField',
            component: EDynamicFormFieldTypes.textField
        },
        {
            name: 'Number field',
            key: 'numberField',
            component: EDynamicFormFieldTypes.numericField
        },
        {
            name: 'Password field',
            key: 'passwordField',
            component: EDynamicFormFieldTypes.passwordField
        },
        {
            name: 'Checkbox',
            key: 'checkbox',
            component: EDynamicFormFieldTypes.checkbox
        },
        {
            name: 'Switch',
            key: 'switch',
            component: EDynamicFormFieldTypes.switch
        }
    ];

    public headers: ITableHeader[] = [
        {
            label: 'Fecha',
            key: 'date',
            component: ETableComponents.text,
            visibleOnMobile: true
        },
        {
            label: 'N° de propuesta',
            key: 'proposalNumber',
            component: ETableComponents.text,
            visibleOnMobile: true
        },
        {
            label: 'DNI',
            key: 'docNumber',
            component: ETableComponents.text
        },
        {
            label: 'Status',
            key: 'status',
            component: ETableComponents.text
        }
    ];

    public data: ITableItem[] = [
        {
            date: 400,
            proposalNumber: 65465,
            docNumber: 29747505,
            fullName: 'Diego Dalairac',
            vehicle: '500 1.4 CABRIO',
            value: '$ 721.395',
            status: 'Pendiente'
        },
        {
            date: 400,
            proposalNumber: 29747505,
            docNumber: 29747505,
            fullName: 'Aprobada',
            vehicle: '500 1.4 CABRIO',
            value: '$ 721.395',
            status: 'Pendiente'
        },
        {
            date: 400,
            proposalNumber: 29747505,
            docNumber: 29747505,
            fullName: 'Aprobada',
            vehicle: '500 1.4 CABRIO',
            value: '$ 721.395',
            status: 'Pendiente'
        }
    ];
}
