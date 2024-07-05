import { useTranslation } from 'next-i18next'
import { memo } from 'react'
import useDarkMode from 'use-dark-mode'

import { ROUTES } from '@/constants/routes'
import {
  StyledLink,
  StyledMoonIcon,
  StyledNavbar,
  StyledSunIcon,
  Wrapper
} from './Navbar.styled'

const Navbar = () => {
  const { t } = useTranslation('navbar')

  const { value: isDarkMode, toggle: toggleDarkMode } = useDarkMode(false, {
    storageKey: 'miguelgm.darkMode'
  })

  const handleChangeTheme = () => {
    toggleDarkMode()
  }

  return (
    <Wrapper>
      <StyledNavbar>
        {ROUTES.map(({ title, label, url }) => (
          <StyledLink key={label} href={url} aria-label={label}>
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
      </StyledNavbar>
    </Wrapper>
  )
}

export default memo(Navbar)
