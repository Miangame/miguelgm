import React, { memo } from 'react'
import Head from 'next/head'

const HeadDefaultMetatags = () => (
  <Head>
    <title>👨🏽‍💻 Miguel A. Gavilán | Frontend Software Engineer</title>
    <meta
      name="description"
      content="Miguel Á. Gavilán portfolio. Frontend Software Engineer. React, Next.js, TypeScript, Styled Components, and more."
    />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
    />
  </Head>
)

export default memo(HeadDefaultMetatags)
