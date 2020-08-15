import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../../shared/components/ThemeProvider'
import LandingPage from './LandingPage'

// Test Suite
describe(`src/pages/Landing/LandingPage`, () => {
  test(`renderes <LandingPage /> to the page`, () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    )
    expect(container.querySelector(`div`)).toBeInTheDocument()
  })
})
