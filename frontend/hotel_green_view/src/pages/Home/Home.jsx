import React,{useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import './Home.scss'
import Banner from '../../components/Banner/Banner';

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
        </div>
    </div>
  )
}

export default Home
