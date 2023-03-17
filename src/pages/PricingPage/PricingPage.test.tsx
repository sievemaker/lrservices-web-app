import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PricingPage from './PricingPage';

describe('<PricingPage />', () => {
  test('it should mount', () => {
    render(<PricingPage />);
    
    const pricingPage = screen.getByTestId('PricingPage');

    expect(pricingPage).toBeInTheDocument();
  });
});