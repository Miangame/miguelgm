import styled from 'styled-components'

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.size.units(3.75)};
  margin-bottom: ${({ theme }) => theme.size.units(3)};
  column-gap: ${({ theme }) => theme.size.units(1.5)};
`

export const StyledIcon = styled.i`
  width: ${({ theme }) => theme.size.units(4)};
  height: ${({ theme }) => theme.size.units(4)};
`
