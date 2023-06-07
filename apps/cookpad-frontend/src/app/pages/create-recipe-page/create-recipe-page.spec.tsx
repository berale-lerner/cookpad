import { render } from '@testing-library/react';

import CreateRecipePage from './create-recipe-page';

describe('CreateRecipePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateRecipePage />);
    expect(baseElement).toBeTruthy();
  });
});
