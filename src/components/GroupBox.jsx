import React from 'react'
import TitleBar from './TitleBar'
import DataTable from './DataTable'

const GroupBox = ({title , market}) => {
  return (
    <div>
        <TitleBar title={title} />
        <DataTable marketData={market} />
    </div>
  )
}

export default GroupBox