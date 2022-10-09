import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import {FaInstagram, FaFacebook} from "react-icons/fa"
import logo from "../../Images/logo5.png"
// import {Vector, facebook, Instagram, twitter, LinkedIn} from '../../assets/index';

const Footer = () => {
  return (
      
    <section className ="FooterSection">

        <div className ="container FooterContainer">
        
            <div className ="row FooterRow">
                <div className ="col-lg-5 col-md-12 col-sm-12 col-xs-12 aboutFooter">
                    <div> <img src={logo}style={{height:"70px",width:'110px'}}  className ="footerLogo" alt="Logo" srcset="" /></div>
               
                <p >
                    Nor again is there anyone who loves or pursues or desires to obtain pain
                    of itself.Nor again is there anyone who loves or pursues or desires to 
                    obtain pain of itself.</p>
                {/* <input type="email" name="" className ="InputEmail" id="EmaiInput" placeholder="Enter your email" /> */}
                </div>
                <div className ="col-lg-3 col-md-6 col-sm-12 col-xs-12 homeFooter">
                <h5 className ="title">Features</h5>
                <ul className ="homeList">
                    <li style={{textDecoration:'none'}} className ="ListContent"><Link style={{color:"white"}} to='/'>Home</Link></li>
                    <li className ="ListContent">Features</li>
                    <li className ="ListContent">FAQs</li>
                    <li className ="ListContent">
                    Reviews</li>
                    <li className ="ListContent">
                        Stories</li>
                </ul>

                </div>
                {/* <div className ="col-lg-2 col-md-6 col-sm-12 col-xs-12 helpfooter">
                <h5 className ="title">Help</h5>
                <ul className ="helpList">
                    <li className ="helpListContent">Help Centre</li>
                    <li className ="helpListContent" >Privacy Policy</li>
                </ul>
                </div> */}
                <div className ="col-lg-4 col-md-6 col-sm-12 col-xs-12 contactFooter">
                <h5 className ="title">Contact Us</h5>
                <ul className ="contactFooterList">
                    <li className ="contactListcontent">+01 234 5684 6545</li>
                    <li className ="contactListcontent">letsgrowtogether91@gmail.com</li>
                </ul>
                <div className ="SocialMedia">
                    <FaFacebook style={{color:'white'}}/>
                    <FaInstagram style={{color:"white"}}/>
                    {/* <img className ="instagram socialIcon" src=  alt="instagram" />
                    <img className ="linkedin socialIcon" src= alt="linkedin" />
                    <img className ="twitter socialIcon" src=  alt="twitter" />
                    <img className ="facebook socialIcon" src= {facebook} alt="facebook" /> */}
                </div>

                </div>
            </div>
            <div className ="HorizontalRow"></div>
            <div className ="copyright"><span>© Copyright 2022 All rights reserved.</span></div> 
        </div>
    </section>
  )
}

export default Footer