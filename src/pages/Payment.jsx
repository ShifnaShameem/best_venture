import React from 'react'
import {  Link } from 'react-router-dom'
import Header from '../components/Header'
import {  Col, Form, FormGroup,  Row } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import p1 from '../assets/p1.webp'


function Payment() {
  const handleChange= e=>{}
  return (
    <div >
   
   <Header></Header>


<div className='booking text-center'>

<div className="booking__form">
  <h3 className='mt-5'>Booking Details</h3>
  <Form className='z1'>
    <FormGroup>
      <input className='f1' type="text" placeholder='Full Name' onChange={handleChange} />
    </FormGroup>
    <FormGroup>
      <input className='f1 mt-3' type="number" placeholder='Phone' onChange={handleChange} />
    </FormGroup>
    <FormGroup className='mt-3 '>
      <input type="date" placeholder=''id='bookAt' onChange={handleChange}  />
      <input type="number" placeholder='Guest'id='guestSize' onChange={handleChange}  />

    </FormGroup>

  </Form>
</div>

</div>
<div className='text-center w-75 container mt-5 y1'>
     <h5 >$199 <i class="fa-solid fa-xmark"></i> 1 person : <span>$199</span></h5>
     <h5>Service charge : <span>$10</span></h5> 
     <h5>Total : <span>$209</span></h5>

</div>

<Row  >
    <Col lg={8}>
    <  div className='text-center w-75  p-5 justify-content' >
        <h4 className='text-dark my-3' >Pay Through</h4>
        <div style={{border:'black solid 1px'}} >
          <div >
            <NavDropdown title="UPI" id="basic-nav-dropdown" style={{color:'blue'}}>
                          <NavDropdown.Item href="#action/3.1"><label className='container p-3 text-black'> <span style={{marginRight:'75px'}}>Google Pay</span>
                    <input type="radio" /> 
                    </label></NavDropdown.Item>
                    <hr />
                          <NavDropdown.Item href="#action/3.2">
                          <label className='container p-3 text-black'> <span style={{marginRight:'112px'}}>Paytm</span>
                    <input type="radio" /> 
                    </label>
                          </NavDropdown.Item>
                          <hr />
                          <NavDropdown.Item href="#action/3.3"><label className='container p-3 text-black'> <span style={{marginRight:'48px'}}>Add new UPI Id</span>
                    <input type="radio" /> 
                    </label></NavDropdown.Item>
                        
                          
                        </NavDropdown>
          </div>
          <hr />
          <div>
          <NavDropdown title="Credi/Debit/ATM Card" id="basic-nav-dropdown" style={{color:'blue'}}>
                        <NavDropdown.Item href="#action/3.1">


                    
                         <div className='text-black'>
                            Card Number
                            <input type="text" placeholder='xxxx xxxx xxxx xxxx' className='my-2 ' /><hr />
                         </div>
                         <div className='text-black'>
                          Valid Thru <input type="text" placeholder='MM/YY' /> CVV <input type="text" placeholder='CVV' /><br /><hr />
          <div style={{textAlign:'center'}}><button >Pay</button></div>
                         </div>
                          
                 
                  </NavDropdown.Item>
                       
                      
                        
                      </NavDropdown>
          </div>
        </div>
      </div>
    </Col>
    <Col lg={4} className='p-5'>
      <img src={p1} alt="" className='img-fluid' />
    </Col>
  </Row>

<div style={{textAlign:'center'}} className='mt-4'>
  <button className='form-control w-75 container' style={{ borderRadius: '10px',color:'white',backgroundColor:'orangered' }}>Book Now</button>
  
</div>

</div>


    
  )
}

export default Payment






