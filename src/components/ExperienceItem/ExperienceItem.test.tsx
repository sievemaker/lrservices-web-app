import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExperienceItem from './ExperienceItem';

describe('<ExperienceItem />', () => {
  test('it should mount', () => {
    render(<ExperienceItem />);
    
    const experienceItem = screen.getByTestId('ExperienceItem');

    expect(experienceItem).toBeInTheDocument();
  });
});