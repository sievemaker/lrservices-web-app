import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Impressum from './Impressum';

describe('<Impressum />', () => {
  test('it should mount', () => {
    render(<Impressum />);
    
    const impressum = screen.getByTestId('Impressum');

    expect(impressum).toBeInTheDocument();
  });
});