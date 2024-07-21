import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { memo } from 'react'

import Presentation from '@/components/Home/components/Presentation/Presentation'
import Experience from '@/components/Home/components/Experience/Experience'
import AboutMe from '@/components/Home/components/AboutMe/AboutMe'

const Home = () => {
  return (
    <>
      <Presentation />
      <Experience />
      <AboutMe />
    </>
  )
}

export async function getStaticProps({ locale = 'en' }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'navbar',
        'presentation',
        'experience',
        'aboutMe'
      ]))
    }
  }
}

export default memo(Home)
