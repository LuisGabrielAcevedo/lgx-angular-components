import { ShowIndexDirective } from './show-index.directive';
import { TableComponent } from '../../table.component';

describe('ShowIndexDirective', () => {
  it('should create an instance', () => {
    const directive = new ShowIndexDirective(new TableComponent());
    expect(directive).toBeTruthy();
  });
});
