import React from 'react'
import { Container,Col,Row } from 'reactstrap'
import '../../style/about-section.css'
import aboutimg from "../../assests/all-images/car-img/bmw-offer.png"
const AboutSection = (aboutClass) => {
  return (
  <section className='about_part'>
    <Container>
        <Row>
            <Col lg ='6' md='6'>
            <div className="about_section_content">
                <h3 className="section_subtitle">
                    About Us
                </h3>
                <h2 className="section_title">
                    Welcome to Cars Rent Service
                </h2>
                <p className="section_description">
                Experience the freedom of choosing your ride with Cars Rent Service. Whether you need a car for a weekend getaway, a business trip, or just to explore the city, we provide a wide range of vehicles to meet all your travel needs. Our services are designed to be convenient, affordable, and customer-friendly.
                </p>
                <p className="section_description">
                Book your car in just a few clicks and hit the road with confidence. Your journey starts here!
                </p>


               <div className="about_section_item d-flex align-items-center">
                    <p className="section_description d-flex align-items-center gap-2">
                    <i className='ri-checkbox-circle-line'></i>
                    Reliable & Affordable
                    </p>

                    <p className="section_description d-flex align-items-center gap-2">
                    <i className='ri-checkbox-circle-line'></i>
                    Convenient Booking
                    </p>
                </div> 

                <div className="about_section_item d-flex align-items-center">
                    <p className="section_description d-flex align-items-center gap-2">
                    <i className='ri-checkbox-circle-line'></i>
                    Travel with Confidence
                    </p>

                    <p className="section_description d-flex align-items-center gap-2">
                    <i className='ri-checkbox-circle-line'></i>
                    Flexible Options
                    </p>
                </div> 
            </div>
            </Col>
            <Col lg ='6' md='6'>
                <div className="about_img">
                    <img src={aboutimg} alt="" className='w-100'/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default AboutSection