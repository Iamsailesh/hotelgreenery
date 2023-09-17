import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <div className="logo">
                    <h1>HGV</h1>
                </div>
            </div>
            <div className="right">
                <Link to='/' className='link'>HOME</Link>
                <Link to='/about' className='link'>ABOUT US</Link>
                <Link to='/' className='link'>GALLERY</Link>
                <Link to='/' className='link'>CONTACT US</Link>
                <Link to='/' className='link'><button>RESERVATION</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
