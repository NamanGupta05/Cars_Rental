import React,{useRef} from 'react'
import { Container,Row,Col } from 'reactstrap';
import { Link,NavLink} from 'react-router-dom';
import '../../style/header.css'
import Login from '../../components/UI/Login'
const navLinks = [
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'/about',
    display: 'About'
  },
  {
    path:'/CarListing',
    display: 'Cars'
  },
  {
    path:'/blog',
    display: 'Blog'
  },
  {
    path:'/Contact',
    display: 'Contact'
  },
]
function Header() {

  const menuRef = useRef(null);
  const handleToggle = () => {
    menuRef.current.classList.toggle('menu_active');
  }
  return <header className="header">
    {/* ========header top ========== */}
    <div className="header_top">
      <Container>
        <Row>
          <Col  sm="6" md="6" lg="6">
          <div className="header_top_left">
          <Link to="/Contact" className="Needy d-flex align-items-center gap-1"> <i class="ri-phone-fill"></i> Need Help</Link>
            <span className="header_top_help">
            +1-202-555-0149 
            </span>
          </div>
          </Col>
          <Col  sm="6" md="6" lg="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
              <Link to="/login" className=" d-flex align-items-center gap-1"> <i class="ri-login-circle-line"></i> Login</Link>
              <Link to='/register' className=" d-flex align-items-center gap-1"> <i class="ri-user-line"></i> Register</Link>
              </div>
          </Col>
        </Row>
      </Container>
    </div>

    {/* ========header middle ========== */}
    <div className="header_middle">
      <Container>
        <Row>
          <Col sm="4" md="3" lg="4">
            <div className="logo">
              <h1 >
                <Link to='/home' className='d-flex align-items-center gap-3'>
                <i class="ri-car-line"></i>
                <span>Rent Car <br/> Service</span>
                </Link>
              </h1>
            </div>
          </Col>
          <Col sm="4" md="3" lg="3">
          <div className="header_location d-flex align-items-center gap-2">
            <span><i class="ri-earth-fill"></i></span>
            <div className="header_location_content">
              <h4>India</h4>
              <h6>Chandigarh,Punjab</h6>
            </div>
          </div>
          </Col>

          < Col sm="4" md="3" lg="3">
            <div className="header_location d-flex align-items-center gap-2">
            <span><i class="ri-time-line"></i></span>
            <div className="header_location_content">
              <h4>Sunday to Friday </h4>
              <h6>10am - 8pm</h6>
            </div>
            </div>
            </Col>

          <Col lg='2' md= '3' sm= '0' className='d-flex align-items-center justify-content-end' >
            <button className='header_btn btn'>
              <Link to='/contact'>
              <i class="ri-phone-line"></i> Request a call
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </div>

  {/* ========main navigation ========== */}

  <div className="main_navbar">
    <Container>
      <div className="navigation_wrapper d-flex align-items-center justify-content-between">
        <span className='mobile_menu'>
        <i class="ri-menu-line" onClick={handleToggle}></i>
        </span>
        <div className="navigation" ref={menuRef} onClick={handleToggle}>
            <div className="menu">
                {
                  navLinks.map((item, index) => (
                    <NavLink key={index} className={navClass => navClass.isActive ? 'nav_active nav_item':'nav_item'} to={item.path} >{item.display}</NavLink>
                  ))
                }
            </div>
        </div>

        <div className="nav_right">
          <div className="search_box">
            <input type="text" placeholder='Searh here'/>
            <span>
            <i class="ri-search-line"></i>
            </span>
          </div>
        </div>
      </div>
    </Container>
  </div>
  </header>
} 

export default Header