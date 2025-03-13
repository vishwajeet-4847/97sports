import React from 'react'
import ButtonGroup from '../components/ButtonGroup'

import dummyMarketData from '../details/dummymarket'
import GroupBox from '../components/GroupBox'
import Section from '../components/Section'
import GridContainer from '../components/GridContainer'
import CasinoCard from '../components/CasinoCard'
import HorizontalScrollList from '../components/HorizontalScrollBarList'
import BottomNavigationBar from '../components/BottomNavigationBar'

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
    <>
    <ButtonGroup />
    <GroupBox title={"cricket"} market={[dummyMarketData[0]]} />
    <HorizontalScrollList menuItem={secondMenu}/>
    <Section backgroundImage="https://97sports.in/casinobg.4aafd0d08a047031.png">
        <GridContainer>
          <CasinoCard
            imageSrc="https://97sports.in/api/users/images/Point Teen Patti-min.png"
            title="POINT TEEN PATTI"
          />
          <CasinoCard
            imageSrc="https://97sports.in/api/users/images/Point Teen Patti-min.png"
            title="POINT TEEN PATTI"
          />
          <CasinoCard
            imageSrc="https://97sports.in/api/users/images/Point Teen Patti-min.png"
            title="POINT TEEN PATTI"
          />
        </GridContainer>
      </Section>
      <BottomNavigationBar />
    </>
  )
}

export default InPlayScreen