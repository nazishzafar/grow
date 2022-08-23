import React from 'react'
import '../styles/Nav.css'
import {Link} from 'react-router-dom'
import {data} from "../data/data"



export default function NavbarComp() {
  return (
    <div className='Navbar'>
        <div className='logo'>
            <Link to='/'>
                <img id='logoimg' src={data.logo} alt= 'logo' />
            </Link>

        </div>
       
        <div className='navlinks'>
       <Link to='/' className='navlinks'>MI Phones</Link>
       <Link to='/' className='navlinks'>Redmi Phones</Link>
       <Link to='/' className='navlinks'>Smart Devices</Link>
       <Link to='/' className='navlinks'>Xiaomi</Link>

     </div>

    </div>
  )
}

