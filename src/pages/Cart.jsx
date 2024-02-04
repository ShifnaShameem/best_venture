import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import tr1 from '../assets/tr1.jpg'



function Cart() {
  return (
    <>
      <Header></Header>

      <div style={{ height: '50vh' }} className=' w-100 d-flex justify-content-center align-items-center rounded mb-5'>
        <div className="container">

          <div className="row align-items-center">
            <div className="col-lg-5">

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tr1} />
                <Card.Body>
                  <Card.Title className='text-center'>Munnar</Card.Title>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-7">
              <h1>Munnar</h1>
              <p>Hill station and town in Kerala</p>
              <p>Munnar is a hill station in South India with tea plantations, waterfalls, wildlife and scenic beauty. Explore the best places to visit in Munnar, such as Eravikulam National Park, Mattupetty Dam, etc.</p>
              <h5>Our Package : 3 Day 2 Night</h5>
              <Link to={'/payment'} style={{color:'brown'}}>Book Now</Link>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Cart