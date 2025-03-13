import React from 'react'
import CircularButtons from '../components/CircularButtons'

const GameDetailsScreen = () => {
  return (
    <div>{
        [1,2,3,4].map((item,idx)=>
        <CircularButtons key={idx} title={"hello"} />
        )
        }</div>
  )
}

export default GameDetailsScreen