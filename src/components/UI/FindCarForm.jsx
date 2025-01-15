import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../style/find-car-form.css'
import {Form,FormGroup} from 'reactstrap'

const FindCarForm = () => {
    const navigate = useNavigate(); // Initialize navigate function

    const handleFindCarClick = () => {
      navigate("/CarListing"); // Redirect to /CarListing
    };
  return <Form className='form'>
    <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className='form_group'>
            <input type="text" placeholder='Form address'  required/>
        </FormGroup>

        <FormGroup className='form_group'>
            <input type="text" placeholder='To address'  required/>
        </FormGroup>
        <FormGroup className='form_group'>
            <input className='date' type="date" placeholder="Journey Date"  required/>
        </FormGroup>
        <FormGroup className='form_group'>
            <input className='Journey_time' type="time" placeholder='Journey Time'  required/>
        </FormGroup>
        <FormGroup className='select_group'>
            <select>
                <option value="ac">AC Car</option>
                <option value="non-ac">NON AC Car</option>
            </select>
        </FormGroup>
        <FormGroup className='form_group' onClick={handleFindCarClick} >
            <button className="btn find_cars_btns">Find Car</button>
        </FormGroup>
    </div>
  </Form>
}

export default FindCarForm