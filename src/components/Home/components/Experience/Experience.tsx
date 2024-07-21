import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Section } from '../../Home.styled'

import {
  Company,
  Date,
  Job,
  JobDescription,
  JobsWrapper,
  JobTitle,
  Role,
  StyledBriefcaseIcon,
  StyledDotIcon,
  Title
} from './Experience.styled'
import { EXPERIENCE } from '@/constants/experience'

const Experience = () => {
  const { t } = useTranslation('experience')

  return (
    <Section>
      <Title>
        <StyledBriefcaseIcon />
        {t('title')}
      </Title>

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
