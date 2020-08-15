import React, { FC, ReactNode } from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import emotionReset from 'emotion-reset'
import { theme } from './theme'

/* Prop Types */
interface Props {
  children: ReactNode
}

/* Component */
const ThemeProvider: FC = ({ children }: Props) => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Karla&family=Rubik:wght@500&family=Space+Mono&display=swap');

        ${emotionReset}

        *, *::after, *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)

/* Display Names */
ThemeProvider.displayName = `ThemeProvider`

export default ThemeProvider
