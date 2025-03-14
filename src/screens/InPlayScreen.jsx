import React from 'react'
import ButtonGroup from '../components/ButtonGroup'

import dummyMarketData from '../details/dummymarket'
import GroupBox from '../components/GroupBox'

import HorizontalScrollList from '../components/HorizontalScrollbar/HorizontalScrollBarList'
import BottomNavigationBar from '../components/BottomNavigationBar'
import ListItem from '../components/ListItem'
import CasinoBox from '../components/casino/CasinoBox'


const secondMenu =
[
  { id: "sportsBar0", name: "ALL" },
  { id: "sportsBar1", name: "OUR CASINO" },
  { id: "sportsBar2", name: "OUR VIRTUAL" },
  { id: "sportsBar3", name: "EVOLUTION" },
  { id: "sportsBar4", name: "EZUGI" },
  { id: "sportsBar5", name: "TVBET" },
  { id: "sportsBar6", name: "BETGAME" },
  { id: "sportsBar7", name: "PLATINGAMES" },
]
const InPlayScreen = () => {
  
  return (
    <div>
    <ButtonGroup />
    <GroupBox title={"cricket"} market={[dummyMarketData[0]]} />
    <HorizontalScrollList menuItem={secondMenu}/>
    <ListItem item={"Cricket"} classname={"text-[#2789ce] font-semibold text-[4vw] "}  />
      <CasinoBox />
      <BottomNavigationBar />
    </div>
  )
}

export default InPlayScreen