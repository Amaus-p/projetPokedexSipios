import React from 'react';
import { render } from '@testing-library/react';
import App from './pages/Home';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Pokédex/i);
  expect(linkElement).toBeInTheDocument();
});
