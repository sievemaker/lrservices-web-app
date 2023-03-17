import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompanyData from './CompanyData';

describe('<CompanyData />', () => {
  test('it should mount', () => {
    render(<CompanyData />);
    
    const companyData = screen.getByTestId('CompanyData');

    expect(companyData).toBeInTheDocument();
  });
});