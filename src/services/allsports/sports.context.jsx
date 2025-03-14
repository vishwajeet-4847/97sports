import React , {useState , useEffect , createContext } from 'react'


const SportsContext = createContext();
const SportsProvider = ({children}) => {
  return (
    <SportsContext.Provider value={{}}>
      {children}
    </SportsContext.Provider>
  )
}

export default  SportsProvider;