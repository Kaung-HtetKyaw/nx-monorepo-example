import { render } from '@testing-library/react';

import CiUi from './ci-ui';

describe('CiUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CiUi />);
    expect(baseElement).toBeTruthy();
  });
});
