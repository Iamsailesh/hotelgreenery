import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
              <div className="left">
                <div className="logo">
                  <h1>HGV</h1>
                </div>
                <span>Follow Us On</span>
                <span className='social'>
                  <h3>F</h3>
                  <h3>G</h3>
                </span>
              </div>
              <div className="center">
                <span className='address'>
                  Middle Lingding ICAR Road, Tadong 737102 Gangtok India
                </span>
                <span className='phone detail'>03592295178 | +919732378888</span>
                <span className='mail detail'>hotelgreeneryview@gmail.com</span>
              </div>
              <div className="right">
                <div className="top">
                  <h3>Quick Links</h3>
                </div>
                <div className="links">
                  <Link to='/' className='link'>HOME</Link>
                  <Link to='/' className='link'>ABOUT US</Link>
                  <Link to='/' className='link'>AMENITIES</Link>
                  <Link to='/' className='link'>ROOM TARIFF</Link>
                  <Link to='/' className='link'>NEAR BY PLACES</Link>
                  <Link to='/' className='link'>GALLERY</Link>
                  <Link to='/' className='link'>CONTACT US</Link>
                </div>
              </div>
            </div>
            <div className="bottom">
              <hr/>
              <span>copyrights © 2023 <Link to='/' className='link linked'>Hotel Greenery View</Link>. all rights reserved. re-designed by Muffin</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
