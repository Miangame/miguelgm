import type { Metadata } from 'next'

import StyledComponentsRegistry from '@/lib/registry'
import ResetCSS from '@/style/resetCSS'
import {
  LayoutContent,
  LayoutWrapper
} from './_components/layout/Layout.styled'
import NextThemeProvider from '@/providers/NextThemeProvider'
import { theme } from '@/style/theme'

export const metadata: Metadata = {
  title: '👨🏽‍💻 Miguel Ángel Gavilán | Web developer',
  description: 'Miguel Ángel Gavilán portfolio'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <LayoutWrapper>
            <NextThemeProvider theme={theme}>
              <ResetCSS />

              {/* <Navbar /> */}
              <LayoutContent>{children}</LayoutContent>
            </NextThemeProvider>
          </LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
