import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExperienencesBox from './ExperienencesBox';

describe('<ExperienencesBox />', () => {
  test('it should mount', () => {
    render(<ExperienencesBox />);
    
    const experienencesBox = screen.getByTestId('ExperienencesBox');

    expect(experienencesBox).toBeInTheDocument();
  });
});