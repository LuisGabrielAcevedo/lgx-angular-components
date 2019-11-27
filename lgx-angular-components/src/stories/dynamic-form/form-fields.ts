import { IDynamicFormField, EDynamicFormFieldTypes, IDynamicFormOption } from 'src/app/components/dynamic-form/dynamic-form.interfaces';
import { of } from 'rxjs';

const metadata: IDynamicFormField[] = [
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
        name: 'Textarea',
        key: 'textArea',
        component: EDynamicFormFieldTypes.textarea
    },
    {
        name: 'Select',
        key: 'select',
        component: EDynamicFormFieldTypes.select,
        options: {
            fieldOptions: () =>
                of([
                    { value: '1', text: 'Option 1' },
                    { value: '2', text: 'Option 2' }
                ])
        }
    },
    {
        name: 'Autocomplete',
        key: 'autocomplete',
        component: EDynamicFormFieldTypes.asyncAutocomplete,
        options: {
            fieldOptions: (arg) => {
                const values: IDynamicFormOption[] = [
                    { value: '1', text: 'Option 1' },
                    { value: '2', text: 'Option 2' }
                ];
                const filteredValues: IDynamicFormOption[] = values.filter(v => v.text.match(new RegExp(arg, 'gi')));
                return of(arg ? filteredValues : values);
            }

        }
    },
    {
        name: 'Radio Group',
        key: 'radioGrup',
        component: EDynamicFormFieldTypes.radioGroup,
        options: {
            fieldOptions: () =>
                of([
                    { value: 'opt1', text: 'Option 1' },
                    { value: 'opt2', text: 'Option 2' }
                ])
        }
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
export default metadata;
