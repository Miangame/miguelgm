import React, { memo } from 'react'
import Head from 'next/head'

const HeadLinks = () => (
  <Head>
    <link rel="icon" href="/img/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
  </Head>
)

export default memo(HeadLinks)
