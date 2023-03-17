import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SmallScreenAppBar from './SmallScreenAppBar';

describe('<SmallScreenAppBar />', () => {
  test('it should mount', () => {
    render(<SmallScreenAppBar />);
    
    const smallScreenAppBar = screen.getByTestId('SmallScreenAppBar');

    expect(smallScreenAppBar).toBeInTheDocument();
  });
});