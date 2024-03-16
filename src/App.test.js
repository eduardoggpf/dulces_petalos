import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App and test if the header is there', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dulces Pétalos/i);
  expect(linkElement).toBeInTheDocument();
  
});
