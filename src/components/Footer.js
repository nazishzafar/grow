import React from 'react'
import '../styles/Footer.css'



export default function Footer({footer}) {
    return(
    <div className='footer'>
        <div>
        <p>Support</p>
        {
            footer.support.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>
            ))
        }
        </div>
        <div>
        <p>Shop and Learn</p>
        {
            footer.shopAndLearn.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>
            ))
        }
        </div>
        <div>
            <p>Retail Store</p>
            {
            footer.retailStore.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>
            ))
        }
        </div>
        <div>
            <p>About Us</p>
            {
            footer.aboutUS.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>
            ))
        }
        </div>
        <div>
            <p>Contact Us</p>
            {
            footer.contactUs.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>
            ))
        }
        </div>
    
    </div>
    );
  
}
