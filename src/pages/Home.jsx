import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helment from '../components/Helmet/Helment'
import { Container,Row,Col } from 'reactstrap';
import FindCarForm from '../components/UI/FindCarForm';
import AboutSection from '../components/UI/AboutSection';
import ServiesList from '../components/UI/ServiesList';
import CarItem from '../components/UI/CarItem'
import carData from '../assests/data/carData'
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import Testimonial from '../components/UI/Testimonial';
import BlogList from '../components/UI/BlogList';
import SlideImages from '../components/UI/SlideImages';
import '../style/home.css'
const Home = ()=> {
  return <Helment title='Home'>
    {/*===========Hero Section =========*/}
    <section className='p-0 hero_slider_section'>
      <HeroSlider />
      <div className="hero_form">
        <Container>
          <Row className='form_row'>
            <Col lg='4' md='4'>
            <div className="find_cars_left">
              <h2>Find Your Dream Car here</h2>
            </div>
            </Col>
            <Col lg='8' md='8' sm='12'>
              <FindCarForm/>
            </Col>
          </Row>
        </Container>
      </div>
    </section>

    {/*============ About Section =============*/}
    <AboutSection />

    <SlideImages/>
    {/** ============Services Serction ===============*/}
    <section style={{ background: 'linear-gradient( rgb(234, 219, 185),rgb(190, 228, 238))' }}>
    <Container>
        <Row>
          <Col lg='12' className='text-center'>
          <h2 className="section_subtitle">
            See Our
          </h2>
          <h2 className="section_title">
            Popular Services
          </h2>
          </Col>
          
          <ServiesList/>
        </Row>
      </Container>
    </section>

    {/*==============Car Offer Section ========= */}
    <section className='Cars_offer'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h6 className="section_subtitle">Come with</h6>
            <h2 className="section_title">Hot Offers</h2>
          </Col>
          {
            carData.slice(0,6).map(item=>(
              <CarItem key={item.id} item={item}/>
            ))
          }
        </Row>
      </Container>
    </section>

    {/*============ Become Driver Section =============*/}
    <BecomeDriverSection />

    {/*============ Testimonial Section =============*/}
    <section className='testimonial'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-4'>
            <h6 className="section_subtitle">What Our</h6>
            <h2 className="section_title">Customers Say</h2>
          </Col>
          <Testimonial/>
        </Row>
      </Container>
    </section>

    {/**=========Blog Section ========= */}
    <section className='Blog_home'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h6 className="section_subtitle">Expore Our Blogs</h6>
            <h2 className="section_title">Latest Blogs</h2>
          </Col>
          <BlogList/>
        </Row>
      </Container>
    </section>
  </Helment>
};

export default Home