import styled, { DefaultTheme } from 'styled-components'

import { media } from '@/theme/media'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.size.units(72)};
`

export const StyledImage = styled.img`
  border-radius: 50%;
  width: ${({ theme }) => theme.size.units(8)};
  height: ${({ theme }) => theme.size.units(8)};
  margin-bottom: ${({ theme }) => theme.size.units(2)};
`

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.size.units(4.5)};
  font-weight: 700;

  ${media.greaterThan('sm')`
    font-size: ${({ theme }: DefaultTheme) => theme.size.units(6)};
  `}
`

export const Description = styled.p`
  line-height: ${({ theme }) => theme.size.units(3.5)};
  font-size: ${({ theme }) => theme.size.units(2.5)};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  margin-top: ${({ theme }) => theme.size.units(3)};
`

export const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size.units(2)};
  margin-top: ${({ theme }) => theme.size.units(4)};
`

export const SocialPill = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size.units(1)};
  transition: ${({ theme }) => theme.transition.standard('all')};
  border-radius: 9999px;
  padding-top: ${({ theme }) => theme.size.units(0.5)};
  padding-bottom: ${({ theme }) => theme.size.units(0.5)};
  padding-left: ${({ theme }) => theme.size.units(2)};
  padding-right: ${({ theme }) => theme.size.units(2)};
  background-color: ${({ theme }) => theme.colors.pillBackground};
  border: 1px solid ${({ theme }) => theme.colors.pillBorder};
  text-decoration: none;
  min-width: ${({ theme }) => theme.size.units(15.5)};
`
