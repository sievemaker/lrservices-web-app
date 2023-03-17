import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MySnackBar from './MySnackBar';

describe('<MySnackBar />', () => {
  test('it should mount', () => {
    render(<MySnackBar />);
    
    const mySnackBar = screen.getByTestId('MySnackBar');

    expect(mySnackBar).toBeInTheDocument();
  });
});