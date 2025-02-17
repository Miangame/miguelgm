import styled from 'styled-components'
import Link from 'next/link'

import { media } from '@/theme/media'

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.size.units(1)};
`

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.size.units(4)};
  gap: ${({ theme }) => theme.size.units(3)};

  ${media.greaterThan('md')`
    flex-direction: row;
  `};
`

export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.size.units(2)};
  display: flex;
  justify-content: center;
  flex: 1;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

export const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.size.units(3)};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.size.units(1)};
`

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.size.units(1)};
`

export const Tag = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.size.units(1)};
  margin-right: ${({ theme }) => theme.size.units(1)};
  border-radius: ${({ theme }) => theme.size.units(5)};
  font-size: ${({ theme }) => theme.size.units(1.5)};
  font-weight: 600;
  background-color: ${({ $bgColor }) => $bgColor};
  color: #d1d5db;

  svg {
    width: ${({ theme }) => theme.size.units(2)};
    height: ${({ theme }) => theme.size.units(2)};
    margin-right: ${({ theme }) => theme.size.units(1)};
  }
`

export const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.size.units(2)};
  margin-bottom: ${({ theme }) => theme.size.units(2)};
  color: ${({ theme }) => theme.colors.projectDescription};
`

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.units(2)};
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.size.units(2)};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding-top: ${({ theme }) => theme.size.units(1)};
  padding-bottom: ${({ theme }) => theme.size.units(1)};
  padding-left: ${({ theme }) => theme.size.units(1.5)};
  padding-right: ${({ theme }) => theme.size.units(1.5)};
  border-radius: ${({ theme }) => theme.size.units(1)};
  background-color: ${({ theme }) => theme.colors.pillBackground};
  border: 1px solid ${({ theme }) => theme.colors.pillBorder};
  gap: ${({ theme }) => theme.size.units(1)};
`
