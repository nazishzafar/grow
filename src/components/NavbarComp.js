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
          <Link to='/' className='navlinks'>Community</Link>
          <Link to='/contact' className='navlinks'><FaAddressBook /> Contact</Link>
          <Link to='/login' className='navlinks'><FaLock /> Log in</Link>
          <Link to='/signup' className='navlinks'><FaUser /> Sign Up</Link>

        </div>


      </div>
    </div>
  )
}

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
//  import logo from "../Images/logo.png"

// export default function NavbarComp(){
//   return(
   
//       <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#437f86",color:"white"}}>

        
//         <Container>
//           <Navbar.Brand to='/'>
//             <img
//               alt=""
//               src={logo}
//               width="20rem"
//               height="20rem"
//               className="d-inline-block align-top"
           
//             />{' '}
//           </Navbar.Brand>
//         </Container>
//         <Container>
          
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//             <Link to='/' className='navlinks'><FaHome /> Home</Nav.Link>
//          <Link to='/psychlogical' className='navlinks'><FaAddressBook /> Psychlogical</Nav.Link>
//           <Link to='/diet' className='navlinks'><FaAppleAlt /> Nutrition</Nav.Link>
//          <Link to='/activities' className='navlinks'><FaWpforms /> Activities</Nav.Link>
//          <Link to='/articles' className='navlinks'><FaClipboardList /> Articles</Nav.Link>
//           <Link to='/' className='navlinks'>Community</Nav.Link>
//          <Link to='/contact' className='navlinks'><FaAddressBook /> Contact</Nav.Link>
   

//               <NavDropdown title="Activities" id="collasible-nav-dropdown">
//                 <NavDropdown.Item to='/'>Normal Child</NavDropdown.Item>
//                 <NavDropdown.Item to='/'>
//                   Autistic Children
//                 </NavDropdown.Item>
              
             
//               </NavDropdown>
//             </Nav>
//             <Nav>
//             <Link to='/login' className='navlinks'><FaLock /> Log in</Nav.Link>
// <Link to='/signup' className='navlinks'><FaUser /> Sign Up</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
  
// }

