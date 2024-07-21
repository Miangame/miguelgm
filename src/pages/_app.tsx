import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from 'next-i18next'
import useDarkMode from 'use-dark-mode'
import { useEffect, useState } from 'react'

import { Layout } from '../components/Layout/Layout.styled'
import { ResetCSS } from '../components/ResetCSS/ResetCSS.styles'
import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles.styled'

import Navbar from '@/components/Layout/components/Navbar/Navbar'
import { darkTheme, lightTheme } from '@/theme/theme'
import { DarkBackground } from '@/components/DarkBackground/DarkBackground.styled'
import { DARK_MODE_KEY } from '@/constants/localStorage'
import Head from '@/components/Head/Head'

const App = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState<boolean>(false)

  const { value: isDarkMode } = useDarkMode(false, {
    storageKey: DARK_MODE_KEY
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Head />
      <ResetCSS />
      <GlobalStyles $isDarkMode={isDarkMode} />
      <DarkBackground $isDarkMode={isDarkMode} />
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
