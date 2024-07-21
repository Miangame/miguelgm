import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Section } from '../../Home.styled'
import SectionTitle from '../SectionTitle/SectionTitle'

import CodeIcon from '@/components/icons/CodeIcon/CodeIcon'

const Projects = () => {
  const { t } = useTranslation('projects')

  return (
    <Section $hasReducedPaddings>
      <SectionTitle title={t('title')} icon={CodeIcon} />
    </Section>
  )
}

export default memo(Projects)
