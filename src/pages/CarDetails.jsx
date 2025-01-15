import React,{useEffect} from 'react'
import carData from '../assests/data/carData'
import { Container,Row,Col} from 'reactstrap'
import Helmet from '../components/Helmet/Helment'
import { useParams } from 'react-router-dom'
import PaymentMethod from '../components/UI/PaymentMethod'
import BookingInfo from '../components/UI/BookingInfo'
import '../style/car-details.css'
function CarDetails() {

  const { slug } = useParams();
  const singleCarItem = carData.find(item=> item.carName === slug)
  useEffect(()=>{
    window.scroll(0,0)
  },[singleCarItem]);
  return <Helmet title={singleCarItem.carName}>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='car_details'>
              <img src={singleCarItem.imgUrl} alt={singleCarItem.carName} className='w-100'/>          
            </div>
          </Col>
          <Col lg='6'>
          <div className="car_info">
          <h2 className='section_title'>{singleCarItem.carName}</h2>
          <div className="d-flex align-items-center gap-5 mb-4 mt-3">
            <h6 className="rent_price fw-bold fs-4">Price: ${singleCarItem.price},00 /Day</h6>
            <span className="d-flex align-items-center gap-2">
              <span style={{color:'#f9a826'}}>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
              </span>
              ({singleCarItem.rating} ratings)
            </span>

          </div>
          <p className="section_description">
            {singleCarItem.description}
          </p>

          <div className="d-flex align_items-center mt-3" style={{columnGap:'4rem'}}>
            <span className="d-flex align-items-center gap-1 section_description">
              <i class='ri-roadster-line' style={{color:'#f9a826'}}></i>{singleCarItem.model}
            </span>

            <span className="d-flex align-items-center gap-1 section_description">
              <i class='ri-settings-2-line' style={{color:'#f9a826'}}></i>{singleCarItem.automatic}
            </span>

            <span className="d-flex align-items-center gap-1 section_description">
              <i class='ri-timer-flash-line' style={{color:'#f9a826'}}></i>{singleCarItem.speed}
            </span>
          </div>

          <div className="d-flex align_items-center mt-3" style={{columnGap:'4rem'}}>
            <span className="d-flex align-items-center gap-1 section_description">
              <i class='ri-map-pin-line' style={{color:'#f9a826'}}></i>{singleCarItem.gps}
            </span>

            <span className="d-flex align-items-center gap-1 section_description">
              <i class='ri-wheelchair-line' style={{color:'#f9a826'}}></i>{singleCarItem.seatType}
            </span>

            <span className="d-flex align-items-center gap-1 section_description">
              <i class='ri-building-2-line' style={{color:'#f9a826'}}></i> {singleCarItem.brand}
            </span>
          </div>
          </div>
          </Col>

          <Col lg='7' className=''>
            <div className="booking-info mt-5">
              <h5 className='mb-4 fw-bold'>Booking Information</h5>
              <BookingInfo />
            </div>
          </Col>

          <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default CarDetails