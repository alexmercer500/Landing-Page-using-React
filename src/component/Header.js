import { useState } from 'react';
import React from 'react'
import logo from './/images/logo.svg'

export default function Header() {


  const [navClose, navOpen] = useState({
    Transform: 'scale(1, 0)'
  }
  )
  const navClick = () => {
    if (navClose.transform === 'scale(1,0)') {
      navOpen({
        transform: 'scale(1,1)'
      })
    } else {
      navOpen({
        transform: 'scale(1,0)'
      })
    }
  }

  return (
    <>
      <div className='header'>
        <img className='logo-head' src={logo} alt="" />
        <nav style={navClose}>
          <ul className='nav-link'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>careers</li>
          </ul>
          <button className='btn' >Request Invite</button>
        </nav>
        <div onClick={navClick} className='menu-toggle'>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </>
  )
}

