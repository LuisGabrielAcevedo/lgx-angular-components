import { EDynamicFormFieldTypes } from 'src/app/components/dynamic-form/dynamic-form.interfaces';

export default [
    {
        name: 'Name',
        key: 'name',
        component: EDynamicFormFieldTypes.textField,
    },
    {
        name: 'Email',
        key: 'email',
        component: EDynamicFormFieldTypes.textField,
    },
    {
        name: 'Password',
        key: 'password',
        component: EDynamicFormFieldTypes.textField
    }
];
