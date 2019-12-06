export interface ITableHeader {
    name: string;
    key: string;
    component?: ETableRowComponent;
    sortable?: boolean;
    dynamicComponent?: any;
    hideOnMobile?: boolean;
}

export interface ITableItem {
    [key: string]: any;
}

export enum ETableRowComponent {
    text = 'TextComponent',
    avatar = 'AvatarComponent',
    image = 'ImageComponent'
}

export enum ETableAction {
    open = 'OPEN',
    close = 'CLOSE'
}

export enum ETableSortDirection {
    asc = 'ASC',
    desc = 'DESC'
}

export enum ETableLoadingType {
    progressSpinner = 'PROGRESSSPINNER',
    progressBar = 'PROGRESSBAR',
    simple = 'SIMPLE'
}

export interface ITableSort {
    prop: string;
    dir: ETableSortDirection;
}

export interface ITableAction {
    label?: string;
    tooltip?: string;
    icon?: string;
    isMobile?: boolean;
    hideOnMobile?: boolean;
    visibleCondition?: (arg: ITableItem) => boolean;
    disableCondition?: (arg: ITableItem) => boolean;
    onclickEvent?: (arg: ITableItem) => void;
}

export interface ITablePagination {
    page: number;
    itemsPerPage: number;
    total: number;
    itemsPerPageOptions?: number[];
}

export interface ITableChanges {
    pagination?: ITablePagination;
    sort?: ITableSort;
}
