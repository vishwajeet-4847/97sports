import React from 'react'
import TitleBar from './TitleBar'

import MatchList from './matchlist/MatchList2'

const GroupBox = ({title , market}) => {
  return (
    <div>
        <TitleBar title={title} />
        <MatchList marketData={market} />
    </div>
  )
}

export default GroupBox