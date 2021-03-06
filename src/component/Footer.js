import React from 'react'
import logo from './/images/logo.svg'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <>
      <div className='lower-section'>
        <div className='socials'>
          <img className='bottom-logo' src={logo} alt='corporation-logo' />
          <div className='social-links'>
            <FaFacebookSquare className='FB'/>
            <FaYoutube className='YT'/>
            <FaTwitter className='TW'/>
            <FaPinterest className='PT'/>
            <FaInstagram className='IG'/>
          </div>
        </div>
        <div className='links-status'>
          <ul className='target-links'>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul className='target-links'>
            <li>Career</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <button className='btn'>Request Invite</button>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}
