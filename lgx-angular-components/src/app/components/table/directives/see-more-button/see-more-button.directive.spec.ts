import { SeeMoreButtonDirective } from './see-more-button.directive';
import { TableComponent } from '../../table.component';

describe('SeeMoreButtonDirective', () => {
  it('should create an instance', () => {
    const directive = new SeeMoreButtonDirective(new TableComponent());
    expect(directive).toBeTruthy();
  });
});
