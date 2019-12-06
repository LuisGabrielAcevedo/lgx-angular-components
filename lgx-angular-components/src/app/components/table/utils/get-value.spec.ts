import getValueFn from './get-value';
import { users } from '../mocks/users';

describe('getValueFn', () => {
    const item = users[0];
    it('Should return the value of the field', () => {
        const resp1 = getValueFn(item, 'firstName');
        expect(resp1).toBe('Luis gabriel');
    });
});
