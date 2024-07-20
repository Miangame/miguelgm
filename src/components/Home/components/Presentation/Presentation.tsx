import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Section } from '../../Home.styled'

import {
  Description,
  SocialPill,
  SocialWrapper,
  StyledImage,
  StyledTitle,
  Wrapper
} from './Presentation.styled'
import { SOCIAL } from '@/constants/social'

const Presentation = () => {
  const { t } = useTranslation('presentation')

  return (
    <Section $hasPaddings>
      <Wrapper>
        <StyledImage src="/img/profile.webp" />
        <StyledTitle>{t('title')}</StyledTitle>
        <Description dangerouslySetInnerHTML={{ __html: t('description') }} />

        <SocialWrapper>
          {SOCIAL.map(({ link, icon: Icon, title }) => (
            <SocialPill key={title} href={link}>
              <Icon />
              {title}
            </SocialPill>
          ))}
        </SocialWrapper>
      </Wrapper>
    </Section>
  )
}

export default memo(Presentation)
