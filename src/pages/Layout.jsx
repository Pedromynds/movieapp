import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import './Layout.css'
import Navbar2 from '../components/navbar2/Navbar2'

function Layout() {
  const [busca, setBusca] = useState("Ben 10");

  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='content'>
        <Navbar2 busca={busca} setBusca={setBusca} />
        <Outlet context={{ busca }} />
      </div>
    </div>
  )
}

export default Layout