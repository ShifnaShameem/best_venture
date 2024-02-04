import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';


function Auth({ insideRegister }) {
  return (
    <div style={{ width: '100%', height: '100vh' }} className='a1  d-flex justify-content-center align-items-center'>
    <div className=' x1'>

      <Link to={'/'}> <i className="fa-solid fa-xmark fa-2x text-black"></i> </Link>

      <div className='card shadow p-5'>
        <div className='row align-items-center'>
          
            <h2 className='fw-bolder  mt-2' style={{color:'#004754'}}>
          Best Venture
            </h2>

            <h6 className='fw-bolder   mt-2'>Sign {insideRegister ? 'Up' : 'In'} to your Account</h6>

            <Form>
              {
                insideRegister &&
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
              }
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="password" placeholder="Enter password"   />
              </Form.Group>

              {
                insideRegister ?
                  <div>
                    <button className='btn btn-light mb-2'>Register</button>
                    <p>Already have Account? Click here to <Link to={'/login'} style={{color:'#FC8955'}}>Login</Link></p>
                  </div> :
                  <div>
                    <button className='btn btn-light mb-2'>Login</button>
                    <p>New User? Click here to <Link to={'/register'} style={{color:'#FC8955'}}>Register</Link></p>

                  </div>
              }
            </Form>
          
        </div>
      </div>
    </div>
  </div>
)
}

 
export default Auth