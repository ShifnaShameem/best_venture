import React from 'react'
import {  Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import tr1 from '../assets/tr1.jpg'
import Header from '../components/Header'


function Whishlist() {
  return (
    <div className='mx-3'>
      <Header></Header>
              <div className='mt-5 mb-4'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={tr1} />
                  <Card.Body>
                    <Card.Title className='text-center'>Munnar</Card.Title>
<div className='text-center mt-3'>
  <button>Delete</button>
  <Link to={'/cart'}><button  className='mx-4'>Add to Cart</button></Link>
</div>
                  </Card.Body>
                </Card>
              </div>
      </div>
  )
}

export default Whishlist


