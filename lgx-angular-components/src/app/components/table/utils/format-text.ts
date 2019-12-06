
import getValueFn from './get-value';
import { ITableItem } from '../table.component.interfaces';
export type TFormatTextFn = (item: ITableItem, key: string) => any;

const formatTextFn: TFormatTextFn = (item, key) => {
  if (key.indexOf('/a/') !== -1) {
    return getValueFn(item, key.split('/a/')[0]) + key.split('/a/')[1];
  } else if (key.indexOf('/b/') !== -1) {
    return key.split('/b/')[1] + getValueFn(item, key.split('/b/')[0]);
  } else if (key.indexOf(',') !== -1) {
    let value = '';
    key.split(',').forEach(keyItem => {
      const v = getValueFn(item, keyItem.trim());
      value += !value ? v : ' ' + v;
    });
    return value;
  } else if (key.indexOf('[]') !== -1) {
    let value = '';
    const items = getValueFn(item, key.split('[]')[0]);
    const newKey = key.split('[]')[1];
    items.forEach(i => {
      const fValue = newKey ? getValueFn(i, newKey) : i;
      value += !value ? fValue : ', ' + fValue;
    });
    return value;
  } else {
    return getValueFn(item, key);
  }
};

export default formatTextFn;
