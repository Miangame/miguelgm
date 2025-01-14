import styled, { DefaultTheme } from 'styled-components'

import { media } from '@/theme/media'

interface SectionProps {
  $hasPaddings?: boolean
  $hasReducedPaddings?: boolean
}

const getPadding = (
  theme: DefaultTheme,
  hasPaddings?: boolean,
  hasReducedPaddings?: boolean
) => {
  if (hasReducedPaddings) {
    return theme.size.units(12)
  }

  if (hasPaddings) {
    return theme.size.units(18)
  }

  return undefined
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${({ theme, $hasPaddings, $hasReducedPaddings }) =>
    $hasPaddings || $hasReducedPaddings ? theme.size.units(8) : undefined};
  padding-bottom: ${({ theme, $hasPaddings, $hasReducedPaddings }) =>
    $hasReducedPaddings ? 0 : $hasPaddings ? theme.size.units(8) : undefined};

  ${media.greaterThan('sm')`
    max-width: ${({ theme }: DefaultTheme) => theme.size.units(80)};
    padding-top: ${({
      theme,
      $hasPaddings,
      $hasReducedPaddings
    }: SectionProps & DefaultTheme) =>
      getPadding(theme, $hasPaddings, $hasReducedPaddings)};
    padding-bottom: ${({
      theme,
      $hasPaddings,
      $hasReducedPaddings
    }: SectionProps & DefaultTheme) =>
      $hasReducedPaddings
        ? 0
        : getPadding(theme, $hasPaddings, $hasReducedPaddings)};
  `}

  ${media.greaterThan('md')`
    max-width: ${({ theme }: DefaultTheme) => theme.size.units(84)};
  `}

  ${media.greaterThan('lg')`
    max-width: ${({ theme }: DefaultTheme) => theme.size.units(112)};
  `}
`
