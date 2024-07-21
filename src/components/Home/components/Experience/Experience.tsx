import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Section } from '../../Home.styled'
import SectionTitle from '../SectionTitle/SectionTitle'

import {
  Company,
  Date,
  Job,
  JobDescription,
  JobsWrapper,
  JobTitle,
  Role,
  StyledDotIcon
} from './Experience.styled'
import { EXPERIENCE } from '@/constants/experience'
import BriefcaseIcon from '@/components/icons/BriefcaseIcon/BriefcaseIcon'

const Experience = () => {
  const { t } = useTranslation('experience')

  return (
    <Section>
      <SectionTitle title={t('title')} icon={BriefcaseIcon} />

      <JobsWrapper>
        {EXPERIENCE.map((job, index) => (
          <Job key={index}>
            <JobTitle>
              <StyledDotIcon>•</StyledDotIcon>
              <Role>{t(job.role)}</Role>
              <Company>{t(job.company)}</Company>
              <Date>{t(job.date)}</Date>
            </JobTitle>
            <JobDescription>{t(job.description)}</JobDescription>
          </Job>
        ))}
      </JobsWrapper>
    </Section>
  )
}

export default memo(Experience)
