import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { memo } from 'react'

import Presentation from '@/components/Home/components/Presentation/Presentation'

const Home = () => {
  return (
    <>
      <Presentation />
    </>
  )
}

export async function getStaticProps({ locale = 'en' }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'navbar',
        'presentation'
      ]))
    }
  }
}

export default memo(Home)
