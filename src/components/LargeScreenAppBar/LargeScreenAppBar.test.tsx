import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LargeScreenAppBar from './LargeScreenAppBar';

describe('<LargeScreenAppBar />', () => {
  test('it should mount', () => {
    render(<LargeScreenAppBar />);
    
    const largeScreenAppBar = screen.getByTestId('LargeScreenAppBar');

    expect(largeScreenAppBar).toBeInTheDocument();
  });
});