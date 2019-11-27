import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TableModule } from 'src/app/components/table2/table/table.module';
import { ETableComponents } from 'src/app/components/table2/table/table.interfaces';


storiesOf('Table', module)
    .addDecorator(
        moduleMetadata({
            imports: [TableModule],
        })
    )
    .add('Simple table', () => {
        return {
            template: `<app-table [headers]="headers" [data]="data"></app-table>`,
            props: {
                headers: [
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
                ],
                data: [
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
                ]
            }
        };
    });
