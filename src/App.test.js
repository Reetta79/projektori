import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renderöi headeriksi Projektori', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Projektori/i);
  expect(headerElement).toBeInTheDocument();
});

