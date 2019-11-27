import { EDynamicFormFieldTypes, IDynamicFormField } from 'src/app/components/dynamic-form/dynamic-form.interfaces';
import { DynamicFormValidators } from 'src/app/components/dynamic-form/validate/dynamic-form-validators';
import { of } from 'rxjs';

const metadata: IDynamicFormField[] = [
    {
        name: 'Nombre',
        key: 'name',
        component: EDynamicFormFieldTypes.textField,
        validators: [DynamicFormValidators.required({ message: 'The field name is required' })]
    },
    {
        name: 'Email',
        key: 'email',
        component: EDynamicFormFieldTypes.textField,
        validators: [DynamicFormValidators.required(), DynamicFormValidators.email()]
    },
    {
        name: 'Contraseña',
        key: 'password',
        component: EDynamicFormFieldTypes.textField,
        validators: [
            DynamicFormValidators.required({ message: 'The field password is required' }),
            DynamicFormValidators.minLength(10),
            DynamicFormValidators.hasNumber(),
            DynamicFormValidators.hasCapitalCase(),
            DynamicFormValidators.hasSpecialCharacters(),
            DynamicFormValidators.hasSmallCase()]
    },
    {
        name: 'Confirmar contraseña',
        key: 'confirmPassword',
        component: EDynamicFormFieldTypes.textField,
        validators: [
            DynamicFormValidators.required(),
            DynamicFormValidators.confirm('password')
        ]
    },
    {
        name: 'Tipo de documento',
        key: 'dni.type',
        component: EDynamicFormFieldTypes.select,
        validators: [DynamicFormValidators.required()],
        options: {
            fieldOptions: () =>
                of([
                    { value: '1', text: 'DNI' },
                    { value: '2', text: 'DNI Extranjero' }
                ])
        }
    },
    {
        name: 'Numero de documento',
        key: 'dni.number',
        component: EDynamicFormFieldTypes.textField,
        validators: [DynamicFormValidators.required()]
    }
];

export default metadata;
