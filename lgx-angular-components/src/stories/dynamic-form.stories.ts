import { storiesOf, moduleMetadata } from '@storybook/angular';
import { DynamicFormModule } from 'src/app/components/dynamic-form/dynamic-form.module';
import metadata from './dynamic-form/simple-form';
import formValidators from './dynamic-form/form-validations';
import formFields from './dynamic-form/form-fields';

storiesOf('Dynamic form', module)
    .addDecorator(
        moduleMetadata({
            imports: [DynamicFormModule],
        })
    )
    .add('Simple form', () => {
        return {
            template: `<app-dynamic-form [fieldsConfig]="config"></app-dynamic-form>`,
            props: {
                config: metadata
            }
        };
    }).add('Outline form', () => {
        return {
            template: `<app-dynamic-form [fieldsConfig]="config" [materialData]="materialData"></app-dynamic-form>`,
            props: {
                config: metadata,
                materialData: {
                    appearance: 'outline'
                }
            }
        };
    }).add('Fill form', () => {
        return {
            template: `<app-dynamic-form [fieldsConfig]="config" [materialData]="materialData"></app-dynamic-form>`,
            props: {
                config: metadata,
                materialData: {
                    appearance: 'fill'
                }
            }
        };
    })
    .add('Form fields', () => {
        return {
            template: `<app-dynamic-form [fieldsConfig]="config" [materialData]="materialData"></app-dynamic-form>`,
            props: {
                config: formFields,
                materialData: {
                    appearance: 'fill',
                    floatLabel: 'always'
                }
            }
        };
    })
    .add('Form columns', () => {
        return {
            template: `<app-dynamic-form [fieldsConfig]="config" [columns]="3" [materialData]="materialData"></app-dynamic-form>`,
            props: {
                config: formFields,
                materialData: {
                    appearance: 'fill',
                    floatLabel: 'always'
                }
            }
        };
    })
    .add('Form validations', () => {
        return {
            template: `<app-dynamic-form [fieldsConfig]="config" [materialData]="materialData"></app-dynamic-form>`,
            props: {
                config: formValidators,
                materialData: {
                    appearance: 'fill',
                    floatLabel: 'always'
                }
            }
        };
    });

