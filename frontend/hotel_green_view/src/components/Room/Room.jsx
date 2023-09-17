import React from 'react'
import { Link } from 'react-router-dom'
import './Room.scss'

const Room = ({item}) => {
  return (
    <div className="room">
        <div className="image">
            <img src={item.image} />
        </div>
        <div className="details">
            <h3>{item.room_name}</h3>
            <p>{item.short_description}</p>
            <hr/>
            <span>
                {item.old_price && (
                    <p>Starting from <span className='present'>Rs. {item.present_price}</span><span className='old'><del>Rs. {item.old_price}</del></span></p>
                )}
                {!item.old_price && (
                    <p>Starting from <span className='present'>Rs.{item.present_price}</span></p>
                )}
            </span>
            <Link className='link' to=''><button>View & Book</button></Link>
        </div>
    </div>
  )
}

export default Room
