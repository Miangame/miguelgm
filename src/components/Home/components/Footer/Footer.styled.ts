import styled, { DefaultTheme } from 'styled-components'

import { media } from '@/theme/media'

export const Wrapper = styled.footer`
  margin-top: ${({ theme }) => theme.size.units(8)};
  margin-bottom: ${({ theme }) => theme.size.units(5)};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.size.units(1.5)};
  gap: ${({ theme }) => theme.size.units(2)};

  ${media.greaterThan('sm')`
    font-size: ${({ theme }: DefaultTheme) => theme.size.units(2)};
    max-width: ${({ theme }: DefaultTheme) => theme.size.units(112)};
    flex-direction: row;
  `}

  ${media.greaterThan('md')`
    max-width: ${({ theme }: DefaultTheme) => theme.size.units(84)};
  `}

  ${media.greaterThan('lg')`
    max-width: ${({ theme }: DefaultTheme) => theme.size.units(112)};
  `}
`

export const Info = styled.div``

export const Links = styled.div`
  display: flex;
  justify-content: left;
  gap: ${({ theme }) => theme.size.units(2)};

  ${media.greaterThan('sm')`
    justify-content: center;
  `}
`

export const StyledLink = styled.a`
  text-decoration: none;
`
