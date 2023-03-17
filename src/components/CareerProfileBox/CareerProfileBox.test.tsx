import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CareerProfileBox from './CareerProfileBox';

describe('<CareerProfileBox />', () => {
  test('it should mount', () => {
    render(<CareerProfileBox />);
    
    const careerProfileBox = screen.getByTestId('CareerProfileBox');

    expect(careerProfileBox).toBeInTheDocument();
  });
});