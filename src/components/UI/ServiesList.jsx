import React from 'react'
import {Col} from 'reactstrap'
import '../../style/service-list.css' 
import serviceData from '../../assests/data/serviceData';
const ServiesList = () => {
  return <>
  {
    serviceData.map(item=>(
        <ServiceItem key={item.id} item={item}/>
    ))
  }
  </>
}

const ServiceItem = ({item})=>(
    <Col lg='4' md='4' sm='6' className='mb-3'>
        <div className="service_items ">
            <span className='mb-3 d-inline-block'>
                <i class={item.icon}></i> 
            </span>
            <h6>{item.title}</h6>
            <p className="section_description">{item.desc}</p>
        </div>

        
    </Col>
)
export default ServiesList