import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import theme from '../../styles/themes/Principal'

import { Button } from './Index';
import renderWithThemeWrapper from '../../TestAssets/RenderWithThemeProvider';

describe('<Button />', () => {

  it('should render correctly', () => {
    renderWithThemeWrapper(<Button>Children</Button>)
  });

  it("should have className when it's passed", () => {
    renderWithThemeWrapper(<Button className="jest-test">Children</Button>);

    expect(screen.getByRole('button')).toHaveClass("jest-test");
  });

  it("should call function when clicked", () => {
    const fn = jest.fn();
    renderWithThemeWrapper(<Button onClick={fn} className="jest-test">Children</Button>);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(fn).toHaveBeenCalled()
  
  });

  it("should call function just once clicked", () => {
    const fn = jest.fn();
    renderWithThemeWrapper(<Button onClick={fn} className="jest-test">Children</Button>);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should have secondary color when not receive inverse prop", () => {
    renderWithThemeWrapper(<Button className="jest-test">Children</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle(`background: ${theme.colors.secondary}`);
  });

  it("should have white background when receice inverse prop", () => {
    renderWithThemeWrapper(<Button inverse className="jest-test">Children</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle('background: #fff');
  });
});