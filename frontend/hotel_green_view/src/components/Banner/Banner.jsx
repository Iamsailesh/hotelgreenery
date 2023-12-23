import React from 'react'
import './Banner.scss'
import config from '../../config'

const Banner = ({item}) => {
  return (
    <div className='banner'>
        <div className="container">
            <img src={`${config.apiBaseUrl}${item.image}`} alt=""/>
        </div>
    </div>
  )
}

export default Banner;
