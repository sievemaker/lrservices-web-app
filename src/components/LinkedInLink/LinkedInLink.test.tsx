import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinkedInLink from './LinkedInLink';

describe('<LinkedInLink />', () => {
  test('it should mount', () => {
    render(<LinkedInLink />);
    
    const linkedInLink = screen.getByTestId('LinkedInLink');

    expect(linkedInLink).toBeInTheDocument();
  });
});