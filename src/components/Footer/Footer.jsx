import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import '../../style/footer.css'

const quickLinks = [
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/Privacy',
    display:'Privacy Policy'
  },
  {
    path:'/carListing',
    display:'Cars Listings'
  },
  {
    path:'/blog',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12' >
        <div className="logo footer_logo">
              <h1 >
                <Link to='/home' className='d-flex align-items-center gap-3'>
                <i class="ri-car-line"></i>
                <span>Rent Car <br/> Service</span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo_content">
            At <em>Rent Car Service</em>, we are committed to providing reliable, 
            affordable, and convenient car rental solutions for all your travel needs. 
            Experience the freedom of the road with us.           </p>
        </Col>

        <Col lg='2' md = '4' sm ='6'>
          <div className='mb-4'>
            <h5 className="footer_link_title">
              Quick Links
            </h5>
            <ListGroup>
              {
                quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='p=0 mt-1 quick_link '>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
            <div className='mb-4'>
                <h5 className="footer_link_title mb-4">
                  Head Office
                </h5>
                <p className="office_info">
                  123 Zirakpur,Shidabad,India
                </p>
                <p className="office_info">
                 Phone: +09923487921
                </p>
                <p className="office_info">
                  Email: CarsRider@gmail.com
                </p>
                <p className="office_info">
                  Office Time: 10am - 8pm
                </p>
            </div>
        </Col>

        <Col lg='3' md='4' sm='12'>
        <div className="mb4">
        <h5 className="footer_link_title">
                  Newsletters
        </h5>
        <p className="section_description">
          Subscribe our newsletter
        </p>
        <div className="newsletter">
          <input type="email" placeholder='Email' />
          <span><i class="ri-send-plane-line"></i></span>
        </div>
        </div>
        </Col>
        
        <Col lg='12'>
        <div className="footer_bottom">
          <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-2 ">
          <i class="ri-copyright-line"></i>Copyright {year},
          Developed by Naman Gupta. All Rights Reserved
          </p>
        </div>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer;