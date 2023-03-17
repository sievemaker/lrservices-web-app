import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BottomNavigationComponent from './BottomNavigationComponent';

describe('<BottomNavigationComponent />', () => {
  test('it should mount', () => {
    render(<BottomNavigationComponent />);
    
    const bottomNavigationComponent = screen.getByTestId('BottomNavigationComponent');

    expect(bottomNavigationComponent).toBeInTheDocument();
  });
});