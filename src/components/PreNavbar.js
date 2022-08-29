import React from 'react'
import '../styles/PreNavbar.css'
import {Link} from 'react-router-dom'
import {FaEnvelope, FaLock, FaPhoneAlt, FaUser, FaQuestionCircle} from 'react-icons/fa'


export default function PreNavbar() {
  return (
    <div className='PreNavbar'>
        <div>
            <a href='#'> <FaQuestionCircle/> Have a Question?</a> <span>|</span>
            <a href='#'><FaPhoneAlt/> + 92-3066465410</a> <span>|</span>
            <a href='#'> <FaEnvelope/>  GTgroup@gmail.com</a> <span>|</span>
           

        </div>
        <div>
        <Link to='/login' className='navlinks'><FaUser/> Log in</Link> <span>|</span>
            <Link to='/signup' className='navlinks'><FaUser/> Sign Up</Link>
            
        </div>

    </div>
  )
}
