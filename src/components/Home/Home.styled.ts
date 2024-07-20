import styled, { DefaultTheme } from 'styled-components'

import { media } from '@/theme/media'

interface SectionProps {
  $hasPaddings?: boolean
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${({ theme, $hasPaddings }) =>
    $hasPaddings ? theme.size.units(8) : undefined};
  padding-bottom: ${({ theme, $hasPaddings }) =>
    $hasPaddings ? theme.size.units(8) : undefined};

  ${media.greaterThan('sm')`
    max-width: ${({ theme }: DefaultTheme) => theme.size.units(112)};
    padding-top: ${({ theme, $hasPaddings }: SectionProps & DefaultTheme) =>
      $hasPaddings ? theme.size.units(18) : undefined};
    padding-bottom: ${({ theme, $hasPaddings }: SectionProps & DefaultTheme) =>
      $hasPaddings ? theme.size.units(18) : undefined};
  `}

  ${media.greaterThan('md')`
    max-width: ${({ theme }: DefaultTheme) => theme.size.units(84)};
  `}
`
