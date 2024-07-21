import { memo } from 'react'

import { StyledIcon, Title } from './SectionTitle.styled'

interface SectionTitleProps {
  title: string
  icon: React.FC
}

const SectionTitle = ({ title, icon: Icon }: SectionTitleProps) => {
  return (
    <Title>
      <StyledIcon as={Icon} />
      {title}
    </Title>
  )
}

export default memo(SectionTitle)
