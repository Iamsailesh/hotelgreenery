import React from 'react'
import { Link } from 'react-router-dom'
import './Room.scss'

const Room = ({item}) => {
  return (
    <div className="room">
        <div className="image">
            <img src="luxuryDelux.jpeg" />
        </div>
        <div className="details">
            <h3>Luxury Deluxe</h3>
            <p>Hotel Greenery View Offerto Our Respectable Guest Luxury Deluxe Room, Which Is 154/Squar Fit Of Floor.This Refind Living Experience has Distinct Clour Schems And Ethnic Flourishes.we Also Open Our Balcony With View Of The Gangtok Famuse Mountain.And</p>
            <hr/>
            <span>
                {item.old_price && (
                    <p>Starting from <span className='present'>Rs.1200</span><span className='old'><del>Rs. 1600</del></span></p>
                )}
                {!item.old_price && (
                    <p>Starting from <span className='present'>Rs.1200</span></p>
                )}
            </span>
            <Link to={`/room?room_name=${item.room_name}&description=${item.short_description}&image=${item.image}&price=${item.present_price}`} className='link'>
                <button>View & Book</button>
            </Link>
        </div>
    </div>
  )
}

export default Room
