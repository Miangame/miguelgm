import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { memo } from 'react'

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
    </>
  )
}

export async function getStaticProps({ locale = 'en' }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar']))
    }
  }
}

export default memo(Home)
