import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Section } from '../../Home.styled'
import SectionTitle from '../SectionTitle/SectionTitle'

import CodeIcon from '@/components/icons/CodeIcon/CodeIcon'
import LinkIcon from '@/components/icons/LinkIcon/LinkIcon'
import NextJSIcon from '@/components/icons/NextJSIcon/NextJSIcon'
import StyledComponentsIcon from '@/components/icons/StyledComponentsIcon/StyledComponentsIcon'
import {
  DescriptionWrapper,
  ImageWrapper,
  ProjectDescription,
  ProjectImage,
  ProjectLinks,
  ProjectTags,
  ProjectTitle,
  ProjectWrapper,
  StyledLink,
  Tag
} from './Projects.styled'

const TAGS = {
  NEXT: {
    name: 'Next.js',
    bgColor: '#000000',
    icon: NextJSIcon
  },
  STYLED_COMPONENTS: {
    name: 'Styled Components',
    bgColor: '#D976FF',
    icon: StyledComponentsIcon
  }
}

const PROJECTS = [
  {
    title: 'project1.title',
    description: 'project1.description',
    link: 'https://3dvillafranca.es/',
    image: '/img/3dVillafranca.webp',
    tags: [TAGS.NEXT, TAGS.STYLED_COMPONENTS]
  },
  {
    title: 'project2.title',
    description: 'project2.description',
    link: 'https://vanacond.es/',
    image: '/img/vanacond.webp',
    tags: [TAGS.NEXT, TAGS.STYLED_COMPONENTS]
  }
]

const Projects = () => {
  const { t } = useTranslation('projects')

  return (
    <Section id="projects" $hasReducedPaddings>
      <SectionTitle title={t('title')} icon={CodeIcon} />
      {PROJECTS.map((project, index) => (
        <ProjectWrapper key={index}>
          <ImageWrapper>
            <ProjectImage src={project.image} alt={t('imageAlt')} />
          </ImageWrapper>
          <DescriptionWrapper>
            <ProjectTitle>{t(project.title)}</ProjectTitle>
            <ProjectTags>
              {project.tags.map((tag, index) => (
                <Tag key={index} $bgColor={tag.bgColor}>
                  <tag.icon />
                  <span>{tag.name}</span>
                </Tag>
              ))}
            </ProjectTags>
            <ProjectDescription>{t(project.description)}</ProjectDescription>
            <ProjectLinks>
              {/* {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('github')}
                </Link>
              )} */}

              {project.link && (
                <StyledLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                  {t('preview')}
                </StyledLink>
              )}
            </ProjectLinks>
          </DescriptionWrapper>
        </ProjectWrapper>
      ))}
    </Section>
  )
}

export default memo(Projects)
