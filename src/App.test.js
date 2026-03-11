import { render, screen } from '@testing-library/react';
import Dashboard from './components/Dashboard/Dashboard';

test('renders portfolio hero content', () => {
  render(<Dashboard />);
  expect(screen.getByText('Nhat Truong')).toBeInTheDocument();
  expect(screen.getByText(/Medical Imaging/i)).toBeInTheDocument();
});
