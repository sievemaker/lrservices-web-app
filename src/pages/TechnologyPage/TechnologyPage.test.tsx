import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TechnologyPage from './TechnologyPage';

describe('<TechnologyPage />', () => {
  test('it should mount', () => {
    render(<TechnologyPage />);
    
    const technologyPage = screen.getByTestId('TechnologyPage');

    expect(technologyPage).toBeInTheDocument();
  });
});