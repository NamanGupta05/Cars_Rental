import React from 'react'
import {Col,Row,Container} from 'reactstrap'
import Helment from '../components/Helmet/Helment'
import CommonSection from '../components/UI/CommonSection'
import CarItem from '../components/UI/CarItem'
import carData from '../assests/data/carData'
function CarListing() {
  return (
    <Helment title='Cars'>
      <CommonSection title='Cars'/>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <div className="d-flex align-items-center gap-3 mb-5">
              <span className="d-flex align-items-center gap-2"><i class='ri-sort-asc'></i>Sort By</span>
              <select>
                <option value="">Select</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
            </Col>

            {
              carData.map(item => (
                  <CarItem item={item} key={item.id}/>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helment>
  )
}

export default CarListing