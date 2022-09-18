import React from 'react'
import '../styles/Nav.css'
import {Link} from 'react-router-dom'
import {data} from "../data/data"
import logo from "../Images/logo.png"



export default function NavbarComp() {
  return (
    <div className='Navbar'>
        <div className='logo'>
            <Link to='/'>
                <img id='logoimg' src={logo} alt= 'logo' />
            </Link>

        </div>
       
        <div className='navlinks'>
       <Link to='/' className='navlinks'>Home</Link>
       <Link to='/assessment' className='navlinks'>Assessments</Link>
       <Link to='/articles' className='navlinks'>Articles</Link>
       <Link to='/diet' className='navlinks'>Diet Plan</Link>
       <Link to='/CommentApp' className='navlinks'>Community</Link>
       <Link to='/contact' className='navlinks'>Contact</Link>
       <Link to='/about' className='navlinks'>About</Link>

     </div>

    </div>
  )
}

