import { memo, MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { Info, Links, StyledLink, Wrapper } from './Footer.styled'
import { ABOUT_ME_URL, CONTACT_URL } from '@/constants/routes'

const Footer = () => {
  const { t } = useTranslation('footer')
  const currentYear = new Date().getFullYear()

  const handleScroll = (url: string) => (e: MouseEvent) => {
    if (!url.startsWith('/#')) return

    e.preventDefault()
    const targetId = url.replace('/#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const yOffset = -70
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <Wrapper>
      <Info>
        © {currentYear} Miguel Á. Gavilán. {t('rights')}
      </Info>
      <Links>
        <StyledLink
          href={ABOUT_ME_URL}
          aria-label={t('aboutMe')}
          onClick={handleScroll(ABOUT_ME_URL)}
        >
          {t('aboutMe')}
        </StyledLink>
        <StyledLink href={CONTACT_URL}>{t('contact')}</StyledLink>
      </Links>
    </Wrapper>
  )
}

export default memo(Footer)
