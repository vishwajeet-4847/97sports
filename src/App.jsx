

import React , { useState } from 'react'
import './App.css'
import { Homescreen } from './screens/Homescreen'
import InPlayScreen from './screens/InPlayScreen'

function App() {
  const [LoggedIn, setLoggedIn] = useState (false)
  return (
    <>
     {/* <Header />
     <Outlet />
      <BottomNavigationBar /> */}
      {/* <Homescreen /> */}
      <InPlayScreen />
    </>
  )
}

export default App
