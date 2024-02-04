import React from 'react'
import tr1 from '../assets/tr1.jpg'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function View() {
  return (
    <>
    <Header></Header>
      <div style={{ height: '70vh' }} className=' w-100 d-flex justify-content-center align-items-center rounded '>
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">
              <img className='img-fluid' src={tr1} alt="" />
            </div>

            <div className="col-lg-6 text-center">
                <h1 style={{color:'darkolivegreen'}}><b>Munnar</b></h1>
                <h5 className='mt-3'><b className='text-black'>$99</b>/per person</h5>
                <h3 className='mt-4 c1'>Enjoy each and every places in Munnar with Best Ventures</h3>
                
                  <Link to={'/cart'}><button className='d1 mt-5' style={{ borderRadius: '10px' }}>Add to Cart <i className="fa-solid fa-cart-shopping " style={{ color: "#00040a" }}></i> </button></Link>
                

                  <Link to={'/whishlist'}><button className='e1' style={{ borderRadius: '10px' }}>Add to Whishlist <i className="fa-solid fa-heart" style={{ color: "#ce1c1c" }}></i></button></Link><br />

                  <Link style={{textDecoration:'none'}} to={'/payment'}><button className='mt-4 form-control mb-5' style={{ borderRadius: '10px',color:'white',backgroundColor:'orangered' }}>Book Now</button></Link>
                

            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default View