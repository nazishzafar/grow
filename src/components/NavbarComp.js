import React from 'react'
import '../styles/Nav.css'
import {Link} from 'react-router-dom'
import {data} from "../data/data"
import logo from "../Images/logo.png"


import {FaEnvelope,FaWpforms,FaClipboardList,FaAppleAlt,FaAddressBook, FaLock, FaPhoneAlt, FaUser, FaQuestionCircle,FaHome,FaInfoCircle} from 'react-icons/fa'


export default function NavbarComp() {
  return (
    <div className='Navs'>
    {/* <div className='PreNavbar'> */}
    {/* <div>
        <Link to='#'> <FaQuestionCircle/> Have a Question?</Link> <span>|</span>
        <Link to="#"><FaPhoneAlt/> + 92-3066465410</Link> <span>|</span>
        <Link to="#"> <FaEnvelope/>  GTgroup@gmail.com</Link> <span>|</span>
       
    </div> */}
    {/* <div>
    <Link to='/login' className='navlinks'><FaLock/> Log in</Link> <span>|</span>
        <Link to='/signup' className='navlinks'><FaUser/> Sign Up</Link>
        
    </div> */}

{/* </div> */}
    <div className='Navbar' >
        <div className='logo'>
            <Link to='/'>
                <img id='logoimg' src={logo} alt= 'logo' />
            </Link>

        </div>
       
        <div className='navlinks'>
       <Link to='/' className='navlinks'><FaHome/> Home</Link>
       <Link to='/assessment' className='navlinks'><FaWpforms/> Assessments</Link>
       <Link to='/articles' className='navlinks'><FaClipboardList/> Articles</Link>
       <Link to='/diet' className='navlinks'><FaAppleAlt/> Diet Plan</Link>
       {/* <Link to='/CommentApp' className='navlinks'>Community</Link> */}
       <Link to='/contact' className='navlinks'><FaAddressBook/> Contact</Link>
       <Link to='/about' className='navlinks'><FaInfoCircle/> About</Link>
       <Link to='/login' className='navlinks'><FaLock/> Log in</Link> 
        <Link to='/signup' className='navlinks'><FaUser/> Sign Up</Link>

     </div>

    </div>
    </div>
  )
}

