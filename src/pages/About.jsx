import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helment from '../components/Helmet/Helment'
import AboutSection from '../components/UI/AboutSection'
import { Container,Row,Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import driveImg from '../assests/all-images/drive.jpg'
import OurMembers from '../components/UI/OurMembers'
import '../style/about.css'
const About = () => {
  return (
    <Helment title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass = 'about'/>
      <section className="about_page_section">
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12'>
            <div className="about_page_img">
              <img src={driveImg} alt="" className='w-100 rounded-3'/>
            </div>
            </Col>
            <Col lg='6' md='6' sm='12'>
              <div className="about_page_content">
                <h2 className="section_title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>
                <p className="section_description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum error esse eum iusto odio perspiciatis quae necessitatibus. Officiis deleniti tempora fugit repudiandae maxime distinctio eveniet nam, consequatur nihil nobis.
                </p>

                <p className="section_description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum error esse eum iusto odio perspiciatis quae necessitatibus. Officiis deleniti tempora fugit repudiandae maxime distinctio eveniet nam, consequatur nihil nobis.
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className='fs-4'><i class="ri-phone-line"></i></span>

                  <div>
                    <h6 className="section_subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div> 
             </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
            <h6 className="section_subtitle">Experts</h6>
            <h2 className="section_title">Our Members</h2>
              </Col>
              <OurMembers />
          </Row>
        </Container>
      </section>
    </Helment>
  )
}

export default About