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
                    Hotel Greenery View Middle Lingding ICAR Road is located in Gangtok, within a 14-minute walk of Sikkim Manipal University and 1.4 km of Do Drul Chorten Shrine. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi. The hotel features family rooms.
                    Guest rooms at the hotel are equipped with a seating area, a flat-screen TV with cable channels and a private bathroom with free toiletries and a shower. The rooms include a desk.
                    Guests at Hotel Greenery View Middle can enjoy a continental breakfast.
                    Enchey Monastery is 4.5 km from the accommodation, while Ganesh Tok Temple is 5.1 km away. The nearest airport is Bagdogra Airport, 119.1 km from FabHotel Greenery View Middle Lingding ICAR Road.
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
            <div className="room">
                {rooms.slice(0,2).map(room => (
                <Room item={room} key={room._id} />
                ))}
            </div>
            <div className="testimonials">
                <div className="cmpTitle test">
                    <h1>What Guest are Saying</h1>
                </div>
                <div className="review">
                    {testimonials.slice(0,2).map(test => (
                        <Testimonials item={test} key={test.id} />
                    ))}
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
