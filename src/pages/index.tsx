import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { memo } from 'react'

import Presentation from '@/components/Home/components/Presentation/Presentation'
import Experience from '@/components/Home/components/Experience/Experience'
import AboutMe from '@/components/Home/components/AboutMe/AboutMe'
import Footer from '@/components/Home/components/Footer/Footer'
import Projects from '@/components/Home/components/Projects/Projects'

const Home = () => {
  return (
    <>
      <Presentation />
      <Experience />
      <Projects />
      <AboutMe />
      <Footer />
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
        'projects',
        'aboutMe',
        'footer'
      ]))
    }
  }
}

export default memo(Home)
