import React from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import logo from "../Images/logo.png"
import { FaEnvelope, FaWpforms, FaClipboardList, FaAppleAlt, FaAddressBook, FaLock, FaPhoneAlt, FaUser, FaQuestionCircle, FaHome, FaInfoCircle } from 'react-icons/fa'


export default function NavbarComp() {
  return (
    <div className='Navs'>

      <div className='Navbar' >
        <div className='logo-img' >
          <Link to='/'>
            <img id='logoimg' src={logo} alt='logo' />
          </Link>
        </div>

        <div className='navlinks'>
          <Link to='/' className='navlinks'><FaHome /> Home</Link>
          <Link to='/psychlogical' className='navlinks'><FaAddressBook /> Psychlogical</Link>
          <Link to='/diet' className='navlinks'><FaAppleAlt /> Nutrition</Link>
          <Link to='/activities' className='navlinks'><FaWpforms /> Activities</Link>
          <Link to='/articles' className='navlinks'><FaClipboardList /> Articles</Link>
          <Link to='/Community' className='navlinks'>Community</Link>
          <Link to='/contact' className='navlinks'><FaAddressBook /> Contact</Link>
          <Link to='/login' className='navlinks'><FaLock /> Log in</Link>
          <Link to='/signup' className='navlinks'><FaUser /> Sign Up</Link>

        </div>

      </div>
    </div>
  )
}

