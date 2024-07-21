import React, { memo } from 'react'

import HeadLinks from './components/HeadLinks/HeadLinks'
import HeadDefaultMetatags from './components/HeadDefaultMetatags/HeadDefaultMetatags'

const Head = (): JSX.Element => (
  <>
    <HeadDefaultMetatags />
    <HeadLinks />
  </>
)

export default memo(Head)
