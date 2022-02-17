import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/themes/Principal'

export default function renderWithThemeWrapper(component: React.ReactElement,) {
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider theme={theme} >
        {children}
      </ThemeProvider>
    )
  }

  return render(component, { wrapper: wrapper })
}
