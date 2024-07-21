import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Section } from '../../Home.styled'
import SectionTitle from '../SectionTitle/SectionTitle'

import ProfileCheckIcon from '@/components/icons/ProfileCheckIcon/ProfileCheckIcon'
import { Description, DescriptionWrapper, StyledImage } from './Aboutme.styled'

const AboutMe = () => {
  const { t } = useTranslation('aboutMe')

  return (
    <Section id="about-me" $hasReducedPaddings>
      <SectionTitle title={t('title')} icon={ProfileCheckIcon} />

      <DescriptionWrapper>
        <div>
          <Description
            dangerouslySetInnerHTML={{ __html: t('description1') }}
          />
          <Description
            dangerouslySetInnerHTML={{ __html: t('description2') }}
          />
        </div>

        <StyledImage src="/img/aboutMePhoto.webp" alt="Miguel Ángel" />
      </DescriptionWrapper>
    </Section>
  )
}

export default memo(AboutMe)
