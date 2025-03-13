

import React , { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import BottomNavigationBar from './components/BottomNavigationBar'
import { Outlet } from 'react-router'


function App() {
  const [LoggedIn, setLoggedIn] = useState (false)
  return (
    <>
     <Header />
     <Outlet />
      <BottomNavigationBar />
    
    </>
  )
}

export default App
