import React from 'react';
import { render } from '@testing-library/react';
import Urna from './urna';

test('renders learn react link', () => {
  const { getByText } = render(<Urna />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
