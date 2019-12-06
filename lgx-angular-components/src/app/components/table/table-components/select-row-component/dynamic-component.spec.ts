import { DynamicComponent } from './dynamic-component.component';
import { TextComponent } from '../../row-components/text/text.component';
import { users, userHeaders } from '../../mocks/users';

describe('DynamicComponent', () => {
  it('should create', () => {
    const componentIntance = new DynamicComponent(
        TextComponent,
        users[0],
        userHeaders[0]
    );
    expect(componentIntance.component).toBeTruthy();
    expect(componentIntance.header.component).toBe('TextComponent');
    expect(componentIntance.item.firstName).toBe('Luis gabriel');
  });
});
