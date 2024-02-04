import React, { useState } from 'react'
import Header from '../components/Header'
import { Col, Modal, Row } from 'react-bootstrap'
import TravelCard from '../components/TravelCard'
import { Card } from 'react-bootstrap';
import tr1 from '../assets/tr1.jpg'
import tr2 from '../assets/tr2.jpg'
import tr3 from '../assets/tr3.jpg'
import { Link } from 'react-router-dom';



function Travel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header></Header>

      <div style={{ marginTop: '100px' }} className='container-fluid'>
        <div className='d-flex justify-content-between '>
          <h2 style={{ color: 'darkred' }}><b>Explore Places with Best Ventures</b></h2>
          <input style={{ width: '500px' }} className='rounded p-2 ms-auto' type="text" placeholder='Search Places' /> <button style={{ borderRadius: '5px' }}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>

       
          <Link to={'/view'} style={{textDecoration:'none'}}>
            <Card className='shadow mb-5 mx-5 mt-5' style={{ width: '18rem' }} onClick={handleShow}>
              <Card.Img variant="top" style={{ height: '200px' }} src={tr1} />
              <Card.Body>
                <Card.Title className='text-center'>Munnar</Card.Title>
              </Card.Body>
            </Card>
          </Link>


          {/* <Card className='shadow mb-5 mx-5' style={{ width: '18rem' }} onClick={handleShow} >
            <Card.Img variant="top" src={tr2} />
            <Card.Body>
              <Card.Title className='text-center'>New York</Card.Title>
              <div className="row align-items-between">

              <div className="col-lg-6 ">
                  <Link to={'/login'}><button style={{ borderRadius: '10px' }}>Add to Cart <i className="fa-solid fa-cart-shopping " style={{ color: "#00040a" }}></i> </button></Link>
                </div>

                <div className="col-lg-6">
                  <Link to={'/login'}><button style={{ borderRadius: '10px' }}>Add to Whishlist <i className="fa-solid fa-heart" style={{ color: "#ce1c1c" }}></i></button></Link>
                </div>

                <h5 className='text-center mt-4'><b className='text-black'>$99</b>/per person</h5>

              </div>

            </Card.Body>
          </Card>

          <Card className='shadow mb-5 mx-5' style={{ width: '18rem' }} onClick={handleShow} >
            <Card.Img variant="top" style={{ height: '200px' }} src={tr3} />
            <Card.Body>
              <Card.Title className='text-center'>New Delhi</Card.Title>
              <div className="row align-items-between">

              <div className="col-lg-6 ">
                  <Link to={'/login'}><button style={{ borderRadius: '10px' }}>Add to Cart <i className="fa-solid fa-cart-shopping " style={{ color: "#00040a" }}></i> </button></Link>
                </div>

                <div className="col-lg-6">
                  <Link to={'/login'}><button style={{ borderRadius: '10px' }}>Add to Whishlist <i className="fa-solid fa-heart" style={{ color: "#ce1c1c" }}></i></button></Link>
                </div>

                <h5 className='text-center mt-4'><b className='text-black'>$99</b>/per person</h5>

              </div>
            </Card.Body>
          </Card> */}

        

      </div>

    </>
  )
}

export default Travel