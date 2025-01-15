import React from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import '../../style/hero-slider.css'


const HeroSlider = () => {
    const settings = {
        fade:true,
        speed:2000,
        autoplaySpeed:3000,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    }
    const navigate = useNavigate(); // Initialize navigate function

  const handleFindCarClick = () => {
    navigate("/CarListing"); // Redirect to /CarListing
  };
  return <Slider {...settings} className='hero_slider'>
    <div className="slider_item slider_item_01 mt0">
    <Container>
        <div className="slider_content">
            <h4 className="text-light mb-3">
                For Rent $70 Per Day
            </h4>
            <h3 className="text-light mb-4">
                Reserve Now and Get 25% Off
            </h3>
            <button className="btn reserve_btn mt-5" onClick={handleFindCarClick} >
                <Link to='/carListing'>Reserve Now</Link>
            </button>
        </div>
    </Container>
    </div>

    <div className="slider_item slider_item_02 mt0">
    <Container>
        <div className="slider_content">
            <h4 className="text-light mb-3">
                For Rent $70 Per Day
            </h4>
            <h3 className="text-light mb-4">
                Reserve Now and Get 50% Off
            </h3>
            <button className ="btn reserve_btn mt-5">
                <Link to='/cars'>Reserve Now</Link>
            </button>
        </div>
    </Container>
    </div>

    <div className="slider_item slider_item_03 mt0">
    <Container>
        <div className="slider_content">
            <h4 className="text-light mb-3">
                For Rent $70 Per Day
            </h4>
            <h3 className="text-light mb-4">
                Reserve Now and Get 50% Off
            </h3>
            <button className="btn reserve_btn mt-5">
                <Link to='/cars'>Reserve Now</Link>
            </button>
        </div>
    </Container>
    </div>
  </Slider>
}

export default HeroSlider