import React, { useContext } from 'react'
import Section from './Section'
import GridContainer from './GridContainer'
import CasinoCard from './CasinoCard'
import { CasinoContext } from '../services/casino.context'


const CasinoBox = () => {
  const { allCasinoGames } = useContext(CasinoContext);
  
  return (
      <Section backgroundImage="https://97sports.in/casinobg.4aafd0d08a047031.png">
          <GridContainer>
              {allCasinoGames.map((game) => (
                  <CasinoCard
                      key={game.eid}
              
                      
                      game={game}
                  />
              ))}
          </GridContainer>
      </Section>
  );
};

export default CasinoBox;