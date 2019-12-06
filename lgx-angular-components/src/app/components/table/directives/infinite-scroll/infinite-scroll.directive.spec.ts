import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { TableComponent } from '../../table.component';

describe('InfiniteScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new InfiniteScrollDirective(new TableComponent());
    expect(directive).toBeTruthy();
  });
});
