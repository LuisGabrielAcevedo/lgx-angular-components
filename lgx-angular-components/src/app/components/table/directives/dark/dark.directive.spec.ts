import { DarkDirective } from './dark.directive';
import { TableComponent } from '../../table.component';

describe('DarkDirective', () => {
  it('should create an instance', () => {
    const directive = new DarkDirective(new TableComponent());
    expect(directive).toBeTruthy();
  });
});
