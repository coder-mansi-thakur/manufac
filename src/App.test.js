import { render, screen } from '@testing-library/react';
import App from './App';

test('finds element by ARIA label', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId('flavnoids'); // Replace with your actual data-testid value
  expect(element).toBeInTheDocument();
});
