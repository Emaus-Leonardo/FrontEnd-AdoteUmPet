import React, { useState } from 'react'
import './Menu.css'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from './Sidebar'

export function Menu(){
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <div className='container-menu' onClick={showSiderbar}>
      <FaBars className='menu-hamburguer'/>
      {sidebar && <Sidebar active={setSidebar} />}
    </div>
  )
}