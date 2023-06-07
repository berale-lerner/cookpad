import { render } from '@testing-library/react';

import CookingModePage from './cooking-mode-page';

describe('CookingModePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CookingModePage />);
    expect(baseElement).toBeTruthy();
  });
});
