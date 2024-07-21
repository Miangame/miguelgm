import { useTranslation } from 'next-i18next'
import { memo, MouseEvent, useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'
import { useRouter } from 'next/router'

import { ROUTES } from '@/constants/routes'
import {
  StyledLink,
  StyledMoonIcon,
  StyledNavbar,
  StyledSpainFlagIcon,
  StyledSunIcon,
  StyledUKFlagIcon,
  Wrapper
} from './Navbar.styled'
import { DARK_MODE_KEY } from '@/constants/localStorage'

const Navbar = () => {
  const { t } = useTranslation('navbar')

  const { pathname, asPath, locale, push, query } = useRouter()

  const { value: isDarkMode, toggle: toggleDarkMode } = useDarkMode(false, {
    storageKey: DARK_MODE_KEY
  })

  const [sectionActive, setSectionActive] = useState('')

  const handleChangeTheme = () => {
    toggleDarkMode()
  }

  const handleChangeLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en'

    push({ pathname, query }, asPath, { locale: newLocale })
  }

  const handleScroll = (url: string) => (e: MouseEvent) => {
    if (!url.startsWith('/#')) return

    e.preventDefault()
    const targetId = url.replace('/#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const yOffset = -70
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({ top: y, behavior: 'smooth' })

      setSectionActive(url)
    }
  }

  const updateActiveSection = () => {
    const sections = ROUTES.map((route) => route.url.replace('/#', ''))
    let activeSection = ''
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        const activationPoint = window.innerHeight / 2 // Ajusta este valor según sea necesario
        if (rect.top <= activationPoint && rect.bottom >= activationPoint) {
          activeSection = `/#${section}`
          break
        }
      }
    }
    setSectionActive(activeSection)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection)
    updateActiveSection()

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
    }
  }, [])

  return (
    <Wrapper>
      <StyledNavbar>
        {ROUTES.map(({ title, label, url }) => (
          <StyledLink
            key={label}
            href={url}
            aria-label={label}
            $isActive={sectionActive === url}
            onClick={handleScroll(url)}
          >
            {t(title)}
          </StyledLink>
        ))}

        {isDarkMode ? (
          <StyledMoonIcon
            onClick={handleChangeTheme}
            $isDarkMode={isDarkMode}
          />
        ) : (
          <StyledSunIcon onClick={handleChangeTheme} $isDarkMode={isDarkMode} />
        )}

        {locale === 'en' ? (
          <StyledUKFlagIcon onClick={handleChangeLanguage} />
        ) : (
          <StyledSpainFlagIcon onClick={handleChangeLanguage} />
        )}
      </StyledNavbar>
    </Wrapper>
  )
}

export default memo(Navbar)
