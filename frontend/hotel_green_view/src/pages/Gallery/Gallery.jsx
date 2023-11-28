import React, { useEffect, useState } from 'react';
import './Gallery.scss';
import axios from 'axios';
import Zoom from 'react-image-zoom';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPhoto = await axios.get(`http://localhost:8000/gallery/Gallery/`);
        setPhotos(resPhoto.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='gallery'>
        <div className='container'>
           <span>
              <img src="meeting.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           
          
           <span>
              <img src="55.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           <span>
              <img src="7.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           <span>
              <img src="8.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           <span>
              <img src="9.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           <span>
              <img src="10.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           <span>
              <img src="11.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           <span>
              <img src="12.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           
           <span>
              <img src="14.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           <span>
              <img src="15.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           <span>
              <img src="17.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span><span>
              <img src="18.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span><span>
              <img src="19.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           <span>
              <img src="21.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span><span>
              <img src="12.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span><span>
              <img src="23.JPG" alt="" />
              <h2>Hotel Greenery View</h2>
           </span><span>
              <img src="4.jpeg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span><span>
              <img src="5.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span><span>
              <img src="8.jpg" alt="" />´
              <h2>Hotel Greenery View</h2>
           </span><span>
              <img src="11.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
           
           <span>
              <img src="0.jpg" alt="" />
              <h2>Hotel Greenery View</h2>
           </span>
          
        </div>
    </div>
  );
};

export default Gallery;
