import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import maldi from '../assets/maldives.png'
import kashu from '../assets/kashmir.jpg'
import thail from '../assets/thailand.jpg'



function TravelCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <CardGroup>
    <Card className='shadow mb-5 mx-5' style={{ width: '18rem' }} onClick={handleShow} >
        <Card.Img variant="top" style={{ height:'160px'}} src={maldi} />
        <Card.Body>
          <Card.Title className='text-center'>Maldives</Card.Title>
        </Card.Body>
      </Card>

      <Card className='shadow mb-5 mx-5' style={{ width: '18rem' }} onClick={handleShow} >
        <Card.Img variant="top" src={kashu} />
        <Card.Body>
          <Card.Title className='text-center'>Kashmir</Card.Title>
        </Card.Body>
      </Card>

      <Card className='shadow mb-5 mx-5' style={{ width: '18rem' }} onClick={handleShow} >
        <Card.Img variant="top" src={thail} />
        <Card.Body>
          <Card.Title className='text-center'>Thailand</Card.Title>
        </Card.Body>
      </Card>
      </CardGroup>
    </>
  )
}

export default TravelCard