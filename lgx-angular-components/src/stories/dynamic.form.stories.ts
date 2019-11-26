import { storiesOf, moduleMetadata } from '@storybook/angular';
import { DynamicFormModule } from 'src/app/components/dynamic-form/dynamic-form.module';
import { EDynamicFormFieldTypes } from 'src/app/components/dynamic-form/dynamic-form.interfaces';
import { DynamicFormValidators } from 'src/app/components/dynamic-form/validate/dynamic-form-validators';


storiesOf('Dynamic form', module)
    .addDecorator(
        moduleMetadata({
            imports: [DynamicFormModule],
        })
    )
    .add('Default form', () => {
        return {
            template: `<app-dynamic-form [fieldsConfig]="config"></app-dynamic-form>`,
            props: {
                config: [
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
        };
    });

