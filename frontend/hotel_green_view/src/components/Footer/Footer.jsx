import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
              <div className="left">
                <div className="logo">
                  <Link to='/' className='link'><img src='new.png' alt="Logo" /></Link>
                </div>
                <span>Follow Us On</span>
                <span className='social'>
                  <Link to='https://www.facebook.com/hotelgreenery.view/'><FontAwesomeIcon icon={faFacebook} /></Link>
                  <Link to='https://www.youtube.com/watch?v=XnjwDw3fh2s'><FontAwesomeIcon icon={faYoutube} style={{color: "#ff2600",}} /></Link>
                </span>
              </div>
              <div className="center">
                <span className='address'>
                 Lingding, ICAR Lingding Road, Tadong 737102 Gangtok India
                </span>
                <span className='phone detail'>+919732378888 | 03592295178 | +919732181111 </span>
                <span className='mail detail'>hotelgreeneryview@gmail.com</span>
              </div>
              <div className="right">
                <div className="top">
                  <h3>Quick Links</h3>
                </div>
                <div className="links">
                  <Link to='/' className='link'>HOME</Link>
                  <Link to='/about' className='link'>ABOUT US</Link>
                  <Link to='/gallery' className='link'>GALLERY</Link>
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
