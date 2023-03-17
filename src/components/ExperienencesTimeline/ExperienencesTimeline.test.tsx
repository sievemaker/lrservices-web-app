import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExperienencesTimeline from './ExperienencesTimeline';

describe('<ExperienencesTimeline />', () => {
  test('it should mount', () => {
    render(<ExperienencesTimeline />);
    
    const experienencesTimeline = screen.getByTestId('ExperienencesTimeline');

    expect(experienencesTimeline).toBeInTheDocument();
  });
});