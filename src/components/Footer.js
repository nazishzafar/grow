import React from 'react'
import '../styles/Footer.css'
import { data } from "../data/data";


import {Link} from 'react-router-dom'

export default function Footer({footer}) {
    return(
    <div className='footer'>
        
           
               
         

      
        <div>
        Services
        {
            data.Services.map((item,index)=>(
                <div key={index}>{item}</div>
                
            ))
        }
        </div>
        <div>
        Contact Us
        {
            data.Contact_Us.map((item,index)=>(
                <div key={index}>{item}</div>
                
            ))
        }
        </div>
       
    
    </div>
    );
  
}
