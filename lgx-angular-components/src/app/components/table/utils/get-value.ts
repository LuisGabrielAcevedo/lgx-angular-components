import get from 'lodash/get';
import { ITableItem } from '../table.component.interfaces';
export type TGetValueFn = (item: ITableItem, key: string) => any;

const getValueFn: TGetValueFn = (item, key) => get(item, key, null);

export default getValueFn;
