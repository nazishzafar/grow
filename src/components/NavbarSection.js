import React, { useState , useEffect }  from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'
import logo1 from "../Images/logo5.png"
import '../styles/Navbar.css'
import { FaEnvelope, FaWpforms, FaClipboardList, FaAppleAlt, FaAddressBook, FaLock, FaPhoneAlt, FaUser, FaQuestionCircle, FaHome, FaInfoCircle } from 'react-icons/fa'

const NavbarSection = () => {

    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [color, setColor] = useState(false);


    useEffect(() => {
      window.addEventListener("scroll", backgrounColor);
    })

    const backgrounColor = () => {
        if(window.scrollY > 0){
          setColor(true);
        }
        else{
          setColor(false);
        }
    }

  
  return (
    <section id='navbar-section' className= {color ? "navbar1" : "navbar2"}>
      {/* <div className='container'> */}
       <div className='container'>
       <Navbar expand="lg">
       {/* <Container> */}
        <div className='container'>
        <Navbar.Brand href="/">
        <img style={{height:"60px",width:'80px'}} src={logo1} alt="Logo" />
        </Navbar.Brand>
        <div className="hamburger" variant="primary" onClick={handleShow}>
                  <div class="line line1"></div>
                  <div class="line line2"></div>
                  <div class="line line3"></div>
              </div> 
        <Navbar.Collapse id="basic-navbar-nav" className='navList'>
          <Nav className="list">
            <Nav.Link className='item' > <Link class="nav-link" to='/'><span style={{paddingRight:"5px"}}><FaHome /></span> Home</Link></Nav.Link>
            <Nav.Link className='item'> <Link to='/psychlogical' className='nav-link'><span style={{paddingRight:"5px"}}><FaAddressBook/> </span> Psychlogical</Link></Nav.Link>
            <Nav.Link className='item'>  <Link class="nav-link" to='/diet'><span style={{paddingRight:"5px"}}><FaAppleAlt/></span> Diet Plans</Link></Nav.Link>
            <NavDropdown style={{paddingTop:'10px'}} className='item' title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item style={{backgroundColor:"#437f86"}} className='item' href=""><Link  to='/activities'>Normal Child</Link></NavDropdown.Item>
              {/* <NavDropdown.Item  style={{backgroundColor:"#437f86"}}  className='item' href=""> */}
              <NavDropdown style={{backgroundColor:"#437f86", paddingLeft:'10px'}}  className='item' title="Autistic">
                <NavDropdown.Item style={{backgroundColor:"#437f86"}} className='item' href=""><Link  to='/Autistic'>Indoor Activities</Link></NavDropdown.Item>
                <NavDropdown.Item style={{backgroundColor:"#437f86"}} className='item' href=""><Link  to='/Autistic'>Outdoor Activities</Link></NavDropdown.Item>
                <NavDropdown.Item style={{backgroundColor:"#437f86"}} className='item' href=""><Link  to='/Autistic'>Sensory Activities</Link></NavDropdown.Item>
                <NavDropdown.Item style={{backgroundColor:"#437f86"}} className='item' href=""><Link  to='/Autistic'>Fun Activities</Link></NavDropdown.Item>
                
                </NavDropdown>
              {/* </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link className='item'> <Link to='/articles' className='nav-link'><span style={{paddingRight:"5px"}}><FaClipboardList/> </span>Articles</Link></Nav.Link>
            <Nav.Link className='item'> <Link to='/contact' className='nav-link'><span style={{paddingRight:"5px"}}><FaHome/></span> Contact</Link></Nav.Link>
            <Nav.Link className='item'> <Link to='/login' className='nav-link'><span style={{paddingRight:"5px"}}><FaLock/></span> Log in</Link></Nav.Link>
            <Nav.Link className='item'>  <Link to='/signup' className='nav-link'><span style={{paddingRight:"5px"}}><FaUser/></span> Sign Up</Link></Nav.Link>
           
            
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>

    

      <Offcanvas placement='top' show={show} onHide={handleClose} backdrop="static"  >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={logo1} alt="Logo" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="list">
            <Nav.Link className='item' > <Link class="nav-link" to='/'><span style={{paddingRight:"5px"}}><FaHome /></span> Home</Link></Nav.Link>
            <Nav.Link className='item'> <Link to='/psychlogical' className='nav-link'><span style={{paddingRight:"5px"}}><FaAddressBook/> </span> Psychlogical</Link></Nav.Link>
            <Nav.Link className='item'>  <Link class="nav-link" to='/diet'><span style={{paddingRight:"5px"}}><FaAppleAlt/></span> Diet Plans</Link></Nav.Link>
            <NavDropdown style={{paddingTop:'10px'}} className='item' title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item style={{backgroundColor:"#437f86"}} className='item' href=""><Link  to='/activities'>Normal Child</Link></NavDropdown.Item>
              <NavDropdown.Item  style={{backgroundColor:"#437f86"}}  className='item' href="">
              <Link to='/Autistic'>Autistic Child</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='item'> <Link to='/articles' className='nav-link'><span style={{paddingRight:"5px"}}><FaClipboardList/> </span>Articles</Link></Nav.Link>
            <Nav.Link className='item'> <Link to='/contact' className='nav-link'><span style={{paddingRight:"5px"}}><FaHome/></span> Contact</Link></Nav.Link>
            <Nav.Link className='item'> <Link to='/login' className='nav-link'><span style={{paddingRight:"5px"}}><FaLock/></span> Log in</Link></Nav.Link>
            <Nav.Link className='item'>  <Link to='/signup' className='nav-link'><span style={{paddingRight:"5px"}}><FaUser/></span> Sign Up</Link></Nav.Link>
           
            
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      
    </section>
  )
}

export default NavbarSection;