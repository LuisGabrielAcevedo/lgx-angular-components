import { AutoPaginationDirective } from './auto-pagination.directive';
import { TableComponent } from '../../table.component';

describe('AutoPaginationDirective', () => {
  it('should create an instance', () => {
    const directive = new AutoPaginationDirective(new TableComponent());
    expect(directive).toBeTruthy();
  });
});
