import React,{useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import './Home.scss'
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';


const Home = () => {
    const [banners, setBanner] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try{
            const resBan = await axios.get(`http://localhost:8000/gallery/Gallery/`);
            console.log(resBan.data)
            setBanner(resBan.data)
          } catch (error){
            console.error(error);
          }
        }
      fetchData();
    }, [])
  return (
    <div className='home'>
        <div className="container">
            <div className="banner">
                <Carousel autoPlay>
                    {banners.slice(0, 3).map(ban => (
                    <Banner item={ban} key={ban._id} />
                    ))}
                </Carousel>
            </div>
            <div className="cmpTitle explore">
              <h1>Hotel Greenery View</h1>
              <p>Peaceful stay! Have an amazing stay here.</p>
              <Link to='/' className='link'>Explore more</Link>
            </div>
            <div className="search">
              <form>
                <span>
                  <label>Check In</label>
                  <input type='text' name='check_in' placeholder='Choose date' />
                </span>
                <span>
                  <label>Check Out</label>
                  <input type='text' name='check_out' placeholder='Choose date' />
                </span>
                <span>
                  <label>Room Type</label>
                  <select>
                    <option>--Select Room--</option>
                    <option>Deluxe</option>
                    <option>Premium</option>
                  </select>
                </span>
                <span>
                  <label>Email</label>
                  <input type='text' name='email' placeholder='Email' />
                </span>
                <span>
                  <label>Search</label>
                  <button type='submit'>Check Now</button>
                </span>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Home
