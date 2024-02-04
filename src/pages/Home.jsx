import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import photo from '../assets/photo.png'
import TravelCard from '../components/TravelCard'
import s1 from '../assets/s1.png'



function Home() {

  const navigate=useNavigate()
  const handleNavigate=()=>{
      navigate('/travel')
  }

  return (
    <>

      <div style={{ height: '90vh' }} className='b1 w-100 d-flex justify-content-center align-items-center rounded mb-5'>
        <div className="container">

        </div>
      </div>
      <h1 style={{ fontSize: '70px' }} className='fw-bolder text-light text-center text-dark  '>
          Best <span style={{color: '#0a2782'}}>Venture</span> <i className="fa-solid fa-jet-fighter fa-beat "></i>
          </h1>

      <div style={{ height: '90vh',marginTop:'-40px' }} className=' w-100 d-flex justify-content-center align-items-center rounded '>
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">
              <img className='img-fluid' src={photo} alt="" />
            </div>

            <div className="col-lg-5 mt-3">
              <h2 className='c1' style={{color:'#144d8e'}}><b>Travelling opens the door to creating <span style={{color:'#030b15'}}>memories</span></b></h2>
              <p className='mt-4' style={{ textAlign: 'justify', color: '#0077b6' }}>We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open. 
              Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one’s lifetime.</p>
              <Link style={{ textTransform: 'none', color: '#03045e'}} className='btn shadow mt-3 mb-4 ' to={'/login'}>Starts to Explore <i className="fa-solid fa-arrow-right-long"></i> </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=' w-100 d-flex justify-content-center align-items-center rounded '>
        <div className="container mb-5">

          <div className="row align-items-center">

            <div className="col-lg-3 ">
              <h4 className='c1'>What we serve</h4>
              <h1>We offer our best services</h1>
            </div>

            <div className="col-lg-3 shadow ">
            <i className="fa-solid fa-cloud-sun-rain fa-2x" style={{color: "#FFD43B"}}></i>
            <h3>Calculate Weather</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos provident pariatur quod architecto ipsam amet neque nisi fuga culpa iste, recusandae cupiditate repellat aut dignissimos non dolore ea maiores!</p>
            </div>
            <div className="col-lg-3 shadow ">
            <i className="fa-solid fa-map-location-dot fa-2x" style={{color: "#FFD43B"}}></i>
            <h3>Best Tour Guide</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem voluptas impedit nostrum, distinctio aspernatur quia dolor inventore deserunt corrupti, eius, quis repudiandae illum sit mollitia facere.</p>
            </div>
            <div className="col-lg-3 shadow ">
            <i className="fa-solid fa-soap fa-2x" style={{color: "#FFD43B"}}></i>
            <h3>Customization</h3>
            <p>Lorem ipsum dolor sit adipisicing elit. Ipsam veniam, esse odio incidunt ducimus soluta cupiditate vel expedita adipisci labore, dolorum corrupti reprehenderit inventore, ipsa voluptatem odit magnam eaque perspiciatis.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h1 className='text-center mb-5 '>Our Top Most Places</h1>

        <marquee >
          <div className="d-flex ">
            <div className="project me-5">
              <TravelCard/>
            </div>
            
          </div>
        </marquee>

        <div className="text-center mb-4">
          <button onClick={handleNavigate} className='btn btn-link'>View More Places</button>
        </div>
      </div>

      <div style={{ backgroundColor:'white' }} className=' w-100 d-flex justify-content-center align-items-center rounded mb-5'>
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7 mt-5 mb-4">
              <h2 className='mb-4'>Subscribe now to get useful travelling information</h2>
              <input type="text" placeholder='Enter your email' className='form-control'/><button style={{ borderRadius: '10px',backgroundColor:'orange',color:'black' }} className='mt-3 p-2 form-control'>Subscribe</button>
              <p className='mt-4 text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, maxime. Cum numquam exercitationem adipisci amet impedit illum eos. Nam neque facere nulla eveniet modi quia quaerat, a cumque vel velit.</p>
            </div>

            <div className="col-lg-5 ">
               <img src={s1} alt="" className='image-fluid w-100' />            
</div>
           
          </div>
        </div>
      </div>


    </>
  )
}

export default Home