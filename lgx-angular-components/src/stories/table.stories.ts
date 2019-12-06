import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TableModule } from 'src/app/components/table/table.module';
import { userHeaders, usersData, userRowActions } from 'src/app/mocks/table/users';
import { ETableLoadingType } from 'src/app/components/table/table.component.interfaces';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

storiesOf('Table', module)
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            imports: [TableModule, BrowserAnimationsModule],
        })
    )
    .add('Simple table', () => {
        return {
            template: `<app-table [headers]="headers" [data]="data" [loading]="loading" [loadingType]="loadingType"></app-table>`,
            props: {
                headers: userHeaders,
                data: usersData,
                loading: boolean('loading', false),
                loadingType: select(
                    'loadingType',
                    [ETableLoadingType.simple, ETableLoadingType.progressBar, ETableLoadingType.progressSpinner],
                    ETableLoadingType.progressBar)
            }
        };
    })
    .add('Dark table', () => {
        return {
            template: `<app-table dark [headers]="headers" [data]="data"></app-table>`,
            props: {
                headers: userHeaders,
                data: usersData
            }
        };
    })
    .add('Table index', () => {
        return {
            template: `<app-table showIndex [headers]="headers" [data]="data"></app-table>`,
            props: {
                headers: userHeaders,
                data: usersData
            }
        };
    })
    .add('Multi selection table', () => {
        return {
            template: `<app-table [multiSelectionBy]="'_id'" [headers]="headers" [data]="data"></app-table>`,
            props: {
                headers: userHeaders,
                data: usersData
            }
        };
    })
    .add('Pagination', () => {
        return {
            template: `<app-table  [headers]="headers" [data]="data" [pagination]="pagination"></app-table>`,
            props: {
                headers: userHeaders,
                data: usersData,
                pagination: {
                    page: 1,
                    itemsPerPage: 7,
                    total: 7
                }
            }
        };
    })
    .add('Auto pagination', () => {
        return {
            template: `<app-table autoPagination [headers]="headers" [data]="data" itemsPerPage="5"></app-table>`,
            props: {
                headers: userHeaders,
                data: usersData
            }
        };
    })
    .add('Row actions', () => {
        return {
            template: `<app-table [headers]="headers" [data]="data" [rowActions]="rowActions"></app-table>`,
            props: {
                headers: userHeaders,
                data: usersData,
                rowActions: userRowActions
            }
        };
    })
    .add('Expand rows', () => {
        return {
            template: `<app-table expandRows [headers]="headers" [data]="data"></app-table>`,
            props: {
                headers: userHeaders,
                data: usersData,
                rowActions: userRowActions
            }
        };
    });

