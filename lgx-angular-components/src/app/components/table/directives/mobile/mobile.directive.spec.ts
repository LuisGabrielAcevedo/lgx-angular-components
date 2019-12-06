import { MobileDirective } from './mobile.directive';
import { TableComponent } from '../../table.component';

describe('MobileDirective', () => {
  it('should create an instance', () => {
    const directive = new MobileDirective(new TableComponent());
    expect(directive).toBeTruthy();
  });
});
