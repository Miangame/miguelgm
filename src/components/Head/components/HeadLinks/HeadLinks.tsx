import React, { memo } from 'react'
import Head from 'next/head'

const HeadLinks = (): JSX.Element => (
  <Head>
    <link rel="icon" href="/img/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
  </Head>
)

export default memo(HeadLinks)
