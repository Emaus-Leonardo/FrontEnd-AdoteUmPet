import React from 'react'
import './SidebarItem.css'

export function SidebarItem({ Icon, Text }){
  return (
    <div className='container-sidebar-item'>
      <Icon />
      {Text}
    </div>
  )
}