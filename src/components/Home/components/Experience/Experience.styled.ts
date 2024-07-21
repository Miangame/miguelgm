import styled, { DefaultTheme } from 'styled-components'

import BriefcaseIcon from '@/components/icons/BriefcaseIcon/BriefcaseIcon'
import { media } from '@/theme/media'

export const StyledBriefcaseIcon = styled(BriefcaseIcon)`
  width: ${({ theme }) => theme.size.units(4)};
  height: ${({ theme }) => theme.size.units(4)};
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.size.units(3.75)};
  margin-bottom: ${({ theme }) => theme.size.units(3)};
  column-gap: ${({ theme }) => theme.size.units(1.5)};
`

export const JobsWrapper = styled.div``

export const Job = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.size.units(6)};
  margin-left: ${({ theme }) => theme.size.units(6)};
  margin-right: ${({ theme }) => theme.size.units(6)};
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.experienceLine};
    width: 2px;
    height: 100%;
    position: absolute;
    left: -35px;
  }

  ${media.greaterThan('sm')`
    flex-direction: row;
    gap: ${({ theme }: DefaultTheme) => theme.size.units(12)};
  `}
`

export const JobTitle = styled.div`
  padding-bottom: ${({ theme }) => theme.size.units(6)};

  ${media.greaterThan('sm')`
    flex: 1;
  `}
`

export const Role = styled.h3`
  color: ${({ theme }) => theme.colors.highlight2};
  font-size: ${({ theme }) => theme.size.units(2.5)};
  font-weight: 700;
`

export const Company = styled.h4`
  font-size: ${({ theme }) => theme.size.units(2.5)};
  font-weight: 600;
`

export const Date = styled.time`
  font-size: ${({ theme }) => theme.size.units(1.75)};
`

export const JobDescription = styled.div`
  padding-bottom: ${({ theme }) => theme.size.units(2)};
  line-height: ${({ theme }) => theme.size.units(3)};
  color: ${({ theme }) => theme.colors.text};

  ${media.greaterThan('sm')`
    flex: 2;
  `}
`

export const StyledDotIcon = styled.span`
  color: ${({ theme }) => theme.colors.highlight2};
  font-size: ${({ theme }) => theme.size.units(6)};
  margin-right: ${({ theme }) => theme.size.units(1)};
  line-height: 1;
  border-radius: 50%;
  position: absolute;
  left: -42px;
`
