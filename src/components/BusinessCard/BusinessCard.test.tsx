import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BusinessCard from './BusinessCard';

describe('<BusinessCard />', () => {
  test('it should mount', () => {
    render(<BusinessCard />);
    
    const businessCard = screen.getByTestId('BusinessCard');

    expect(businessCard).toBeInTheDocument();
  });
});