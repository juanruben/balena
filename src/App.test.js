import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const submitButton = screen.getByText(/Submit/i);
  const outputText = screen.getByText(/Output/i);
  expect(submitButton).toBeInTheDocument();
  expect(outputText).toBeInTheDocument();
});
