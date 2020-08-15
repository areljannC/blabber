import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../ThemeProvider'
import App from './App'

// Test Suite
describe(`src/shared/components/App`, () => {
  test(`renders <App /> to the page`, () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
    expect(container.querySelector(`div`)).toBeInTheDocument()
  })
})
