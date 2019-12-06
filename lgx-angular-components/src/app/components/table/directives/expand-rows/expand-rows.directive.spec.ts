import { ExpandRowsDirective } from './expand-rows.directive';
import { TableComponent } from '../../table.component';

describe('ExpandRowsDirective', () => {
  it('should create an instance', () => {
    const directive = new ExpandRowsDirective(new TableComponent());
    expect(directive).toBeTruthy();
  });
});
