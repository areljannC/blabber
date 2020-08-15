import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../../../../shared/components/ThemeProvider'
import Splash from './Splash'

// Test Suite
describe(`src/pages/Landing/components/Splash`, () => {
  test(`renders <Splash /> to the page`, () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Splash />
      </ThemeProvider>
    )
    expect(container.querySelector(`div`)).toBeInTheDocument()
    expect(screen.getByText(`blabber.haus`)).toBeInTheDocument()
    expect(screen.getByText(`A social media for those that want to talk non-sense.`)).toBeInTheDocument()
    expect(screen.getByText(`Coming soon...`)).toBeInTheDocument()
  })
})
