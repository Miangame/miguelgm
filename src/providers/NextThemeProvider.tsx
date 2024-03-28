'use client'
import { ThemeProvider } from 'styled-components'

const NextThemeProvider = ({
  children,
  theme
}: {
  children: React.ReactNode
  theme: Record<string, unknown>
}): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default NextThemeProvider
