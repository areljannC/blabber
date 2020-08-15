import React, { FC, ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from './theme'

/* Prop Types */
interface Props {
  children: ReactNode
}

/* Component */
const ThemeProvider: FC = ({ children }: Props) => <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>

/* Display Names */
ThemeProvider.displayName = `ThemeProvider`

export default ThemeProvider