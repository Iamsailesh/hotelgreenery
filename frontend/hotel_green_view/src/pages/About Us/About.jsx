import React, {useEffect, useState} from 'react'
import './About.scss'
import Banner from '../../components/Banner/Banner';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Room from '../../components/Room/Room';
import Testimonials from '../../components/Testimonials/Testimonials';

const About = () => {
    const [banners, setBanner] = useState([]);
    const [rooms, setRoom] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try{
            const resBan = await axios.get(`http://localhost:8000/gallery/Gallery/`);
            setBanner(resBan.data)
            const resRoom = await axios.get(`http://localhost:8000/room/Room/`);
            setRoom(resRoom.data)
            const resTest = await axios.get(`http://localhost:8000/testimonial/Testimonial/`);
            setTestimonials(resTest.data)
          } catch (error){
            console.error(error);
          }
        }
      fetchData();
    }, [])
  return (
    <div className='about'>
        <div className="container">
            <div className="banner">
            <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} autoFocus>
                    {banners.slice(3, 5).map(ban => (
                        <Banner item={ban} key={ban.id} />
                    ))}
                </Carousel>
            </div>
            <div className="cmpTitle">
                <h1>About Hotel Greenery View</h1>
            </div>
            <div className="desc">
                <p>
                One of the finest hotels in Gangtok is Hotel Greenery View, located in Tadong, Gangtok. This well-known business serves both 
                local and out-of-town consumers as a one-stop shop for services. This company has made significant progress along the way and now 
                firmly holds a position in its sector. This business has amassed a sizable client base that is only continuing to expand because of 
                its firm belief that customer happiness is just as vital as its goods and services.
                </p>
            </div>
            <div className="content-1">
                <div className="left">
                    <img src='organic.jpg' />
                </div>
                <div className="right">
                    <div className="title">
                        <h1>The Organic</h1>
                        <p>
                            We are offer 60 cover seating capacity fine dining multicuisine restaurant
                            with Delicious food .hotel greenery view offer to you three to six type”s 
                            of cuisine Like (indian, chines, tandoori, mughlai, continental, and 
                            nepalish also)  Our restaurent (the organic) also offer sikkim traditional 
                            food which is made by organic vegetable and herbs. 
                            This is unforgettable.
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-2">
                <div className="left">
                    <div className="title">
                        <h1>Meetings & Conferences</h1>
                        <p>
                            Hotel greenery offer a versatile locale for everybanqueting requirement.hotel greenery offer you         
                            80 people capacity conference hall. 150 people capacity of 
                            Banquet hall which is very attractiveof social funtion like,birthday party, 
                            Anniversary, get-togather, meny others. Hotel greenery always give you special
                            priority for your respectable busness promotion and your improtent 
                            Conference.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img src='meeting.jpg' />
                </div>
            </div>
            <div className="content-1">
                <div className="left">
                    <img src='banquet.jpg' />
                </div>
                <div className="right">
                    <div className="title">
                        <h1>Benquate, Hall Facility</h1>
                        <p>
                            Eighteen hundred square feet of Banquet hall and SUITABLE FOR 
                            THE Marriage party, birthday celebration.Get-together and others 
                            programmed. At time 250 to 300 people doing party.
                        </p>
                    </div>
                </div>
            </div>
            <div className="cmpTitle">
                <h1>Rooms & Suites</h1>
            </div>
            <div id="1" className="room">
         <div className="card">
         <div className="image">
            <img src="luxuryDelux.jpeg" />
          </div>
          <div className="details">
            <h3>Luxury Deluxe</h3>
            <p>Hotel Greenery View Offerto Our Respectable Guest Luxury Deluxe Room, Which Is 154/Squar Fit Of Floor.This Refind Living Experience has Distinct Clour Schems And Ethnic Flourishes.we Also Open Our Balcony With View Of The Gangtok Famuse Mountain.And</p>
            <hr />
            <span>
              <p>Starting from <span className='present'>NA</span></p>
            </span>

            <button>View & Book</button>

          </div>
         </div>
         <div className="card">
         <div className="image">
            <img src="luxurypremium2.jpeg" />
          </div>
          <div className="details">
              <h3>Luxury Premium</h3>
              <p>The Extensive and Eclectic Accommodation 168/Squar Fitiels Floor. You Can See Gangtok Famous Valley From Your Room Bed</p>
              <hr />
              <span>
                <p>Starting from <span className='present'>NA</span></p>
              </span>

              <button>View & Book</button>

            </div>
         </div>
          {/* {rooms.slice(0,2).map(room => (
          <Room item={room} key={room._id} />
        ))} */}
        </div>
        <div className="testimonials">
          <div className="cmpTitle test">
            <h1>What Guest are Saying</h1>
          </div>
          <div className="logo">
            <img src='google.png' />
            <img src='trip.png' />
            <img src='booking.png' />
          </div>
          <div className="review">
            <div className="container">
              <h1>Anil Kumar Sharma</h1>
              <p>Hotel Greenery View exceeded expectations with impeccable service, luxurious amenities, and a central location, creating a truly unforgettable stay.</p>
              <h3>Kolkata</h3>
            </div>
            <div className="container">
              <h1>Amitav Jain</h1>
              <p>Wow! Hotel Greenery View is super cool. The people who work there are really nice and make you feel special. The room was like a fancy home with comfy beds and everything you need. The food was yummy, and the hotel had a great vibe. I can't wait to go back because it was so much fun!</p>
              <h3>Delhi</h3>
            </div>
          </div>
        </div>
            <div className="cmpTitle">
                <h1>TERMS & CONDITIONS</h1>
            </div>
            <div className="conditions">
                <ul>
                    <li>All room rates are inclusive of buffet breakfast, Lunch, Dinner and Exclude taxes</li>
                    <li>CHECK IN 12 PM / CHECK OUT 11 AM</li>
                    <li>Booking : Can be made at any time with advance payment</li>
                    <li>Valid permit orAdvance Payment Invoice and ID proof has to be presented by visitors at the time check in.</li>
                    <li>Each room having the specified number of beds is meant strictly for such number of persons. Only two children below the age of 10 years will be allowed free.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About
