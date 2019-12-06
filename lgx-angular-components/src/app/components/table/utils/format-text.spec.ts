import formatTextFn from './format-text';
import { users } from '../mocks/users';

describe('formatTextFn', () => {
    const item = users[0];

    it('Should return the field in a string', () => {
        const resp1 = formatTextFn(item, 'firstName');
        expect(resp1).toBe('Luis gabriel');
        const resp2 = formatTextFn(item, 'company.name');
        expect(resp2).toBe('Date musica internacional AA');
        const resp3 = formatTextFn(item, 'company.currencies[0]');
        expect(resp3).toBe('AR $');
        const resp4 = formatTextFn(item, 'followers/b/Followers: ');
        expect(resp4).toBe('Followers: 0');
        const resp5 = formatTextFn(item, 'followers/a/ followers');
        expect(resp5).toBe('0 followers');
    });

    it('Should return the fields in a string', () => {
        const resp1 = formatTextFn(item, 'firstName,lastName');
        expect(resp1).toBe('Luis gabriel Acevedo');
        const resp2 = formatTextFn(item, 'firstName,company.name');
        expect(resp2).toBe('Luis gabriel Date musica internacional AA');
        const resp3 = formatTextFn(item, 'company.currencies[]');
        expect(resp3).toBe('AR $, USD $');
        const resp4 = formatTextFn(item, 'company.stores[]name');
        expect(resp4).toBe('Store 1, Store 2, Store 3');
    });
});
