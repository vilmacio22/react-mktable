import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App.js';

describe('Testing App Component', ()=>{
  it('renders learn react link', () => {
    const { getByTestId } = render(<App />);
    const linkElement = getByTestId('title');
    expect(linkElement).toBe(linkElement);
  });
})
