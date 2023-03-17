import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppBarComponent from './AppBarComponent';

describe('<AppBarComponent />', () => {
  test('it should mount', () => {
    render(<AppBarComponent isLargeScreen={true}/>);
    
    const appBarComponent = screen.getByTestId('AppBarComponent');

    expect(appBarComponent).toBeInTheDocument();
  });
});