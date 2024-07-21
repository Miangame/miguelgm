import styled from 'styled-components'

import { media } from '@/theme/media'

export const DescriptionWrapper = styled.article`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: ${({ theme }) => theme.size.units(4)};

  ${media.greaterThan('sm')`
    flex-direction: row;
  `}
`

export const Description = styled.p`
  margin: 0;
  line-height: ${({ theme }) => theme.size.units(3)};
  margin-bottom: ${({ theme }) => theme.size.units(2)};
  color: ${({ theme }) => theme.colors.text};
`

export const StyledImage = styled.img`
  object-fit: cover;
  width: 16rem;
  height: 100%;
  transform: rotate(3deg);
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.size.units(2)};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.aboutMePhotoShadow};
  background-color: ${({ theme }) => theme.colors.aboutMePhotoBackground};
  object-position: 50% 50%;
  padding: ${({ theme }) => theme.size.units(0.5)};
  flex-shrink: 0;
`
