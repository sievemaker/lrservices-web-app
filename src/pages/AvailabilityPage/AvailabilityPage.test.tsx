import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AvailabilityPage from './AvailabilityPage';

describe('<AvailabilityPage />', () => {
  test('it should mount', () => {
    render(<AvailabilityPage />);
    
    const availabilityPage = screen.getByTestId('AvailabilityPage');

    expect(availabilityPage).toBeInTheDocument();
  });
});