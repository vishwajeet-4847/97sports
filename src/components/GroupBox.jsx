import React from 'react'
import TitleBar from './TitleBar'

import MatchList from './MatchList'

const GroupBox = ({title , market}) => {
  return (
    <div>
        <TitleBar title={title} />
        <MatchList marketData={market} />
    </div>
  )
}

export default GroupBox