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
    <script
      defer
      src="https://umami.miguelgm.dev/script.js"
      data-website-id="adecf921-0072-4de1-b83d-8ecc56679523"
    ></script>
  </Head>
)

export default memo(HeadDefaultMetatags)
