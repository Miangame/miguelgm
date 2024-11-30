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

const calculateYears = (date: string) => {
  const currentDate = new Date()
  const newDate = new Date(date)

  let years = currentDate.getFullYear() - newDate.getFullYear()

  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()
  const newMonth = newDate.getMonth()
  const newDay = newDate.getDate()

  if (
    currentMonth < newMonth ||
    (currentMonth === newMonth && currentDay < newDay)
  ) {
    years--
  }

  return years
}

const Presentation = () => {
  const { t } = useTranslation('presentation')

  const numberOfYears = calculateYears('2018-05-01')

  return (
    <Section id="presentation" $hasPaddings>
      <Wrapper>
        <StyledImage src="/img/profile.webp" />
        <StyledTitle>{t('title')}</StyledTitle>
        <Description
          dangerouslySetInnerHTML={{
            __html: t('description', { years: numberOfYears })
          }}
        />

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
