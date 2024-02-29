import React from 'react'
import './navbar.css'

export const Navbar = ({children}) => {
  return (
    <ul id='NavList'>
      {children}
    </ul>
  )
}