import styled, { keyframes } from 'styled-components'

import SunIcon from '@/components/icons/SunIcon/SunIcon'
import MoonIcon from '@/components/icons/MoonIcon/MoonIcon'

interface IsDarkModeProps {
  $isDarkMode: boolean
}

const navShadow = keyframes`
  to {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 9999rem;
    ring-width: 1px;
    ring-color: rgba(255, 255, 255, 0.1);
    // Para el tema oscuro
    // background-color: rgba(31, 41, 55, 0.9);
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.size.units(1)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${navShadow} 1s linear both;
  animation-timeline: scroll();
  animation-range: 0 100px;
  border-radius: 9999px;
`

export const StyledLink = styled.a`
  padding: ${({ theme }) => theme.size.units(1)};
  color: inherit;
  text-decoration: none;
  font-size: ${({ theme }) => theme.size.units(1.75)};
  transition: ${({ theme }) =>
    theme.transition.standard(
      'color',
      'background-color',
      'border-color',
      'text-decoration-color',
      'fill',
      'stroke',
      'opacity',
      'box-shadow',
      'transform',
      'filter',
      'backdrop-filter'
    )};

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`

const BaseIcon = (Icon: any) => styled(Icon)`
  width: ${({ theme }) => theme.size.units(2.5)};
  height: ${({ theme }) => theme.size.units(2.5)};
  transition: ${({ theme }) => theme.transition.standard('all')};
  margin-left: ${({ theme }) => theme.size.units(1)};
  margin-right: ${({ theme }) => theme.size.units(1)};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.standard('all')};

  &:hover {
    transform: scale(1.25);
  }
`

export const StyledSunIcon = styled(BaseIcon(SunIcon))<IsDarkModeProps>`
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 0 : 1)};
`

export const StyledMoonIcon = styled(BaseIcon(MoonIcon))<IsDarkModeProps>`
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 1 : 0)};
`
