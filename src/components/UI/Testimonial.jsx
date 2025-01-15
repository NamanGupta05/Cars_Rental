import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assests/all-images/ava-1.jpg'
import ava02 from '../../assests/all-images/ava-2.jpg'
import ava03 from '../../assests/all-images/ava-3.jpg'
import ava04 from '../../assests/all-images/ava-4.jpg'
import '../../style/testimonial.css'
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        swipeToSlide:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite:true,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
  return (
  <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p className="section_description">
        "I’ve tried many car rental services, but this one stands out. The cars are well-maintained, stylish, and the renting process is super smooth. It feels like these cars were handpicked just for me!"
        </p>

        <div className="mt-3 d-flex-align-items-center gap-4">
            <img src={ava01} alt="" className='w-25 h-25 rounded-2' />
            <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p className="section_description">Happy Client</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section_description">
        "I couldn’t have asked for a better experience. From sleek interiors to seamless booking, everything was perfect. My road trip was unforgettable, thanks to this amazing collection of cars!"
        </p>

        <div className="mt-3 d-flex-align-items-center gap-4">
            <img src={ava02} alt="" className='w-25 h-25 rounded-2' />
            <div>
            <h6 className="mb-0 mt-3">Tanya Aggarwal</h6>
            <p className="section_description">Happy Client</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section_description">
        "These cars are a game-changer! Reliable, luxurious, and exactly what you need to make an impression. I’ve used this service multiple times, and it’s been exceptional every single time."
        </p>

        <div className="mt-3 d-flex-align-items-center gap-4">
            <img src={ava03} alt="" className='w-25 h-25 rounded-2' />
            <div>
            <h6 className="mb-0 mt-3">Ankit Goyal</h6>
            <p className="section_description">Happy Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section_description">
        "We rented a car for our family getaway, and it was the best decision ever! The car was spacious, comfortable, and drove like a dream. Highly recommend it to anyone looking for quality and comfort."
        </p>

        <div className="mt-3 d-flex-align-items-center gap-4">
            <img src={ava04} alt="" className='w-25 h-25 rounded-2' />
            <div>
            <h6 className="mb-0 mt-3">Radhika Aggarwal</h6>
            <p className="section_description">Happy Customer</p>
            </div>
        </div>
    </div>

    
  </Slider>
  )
}

export default Testimonial