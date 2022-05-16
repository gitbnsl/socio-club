import React from 'react'
import playstore from '../images/Googlep.gif'
import home from '../images/banner_image.gif'
import winner from '../images/torch.gif'
import '../css/home.css'
import Features from './Features'
import Contact from './Contact'

const Home = () => {
  return (
    <>

      <div className="container mt-5">

        <div className="row my-5">
          <div className="col-md-6 mt-5">
            <h1 className='txt'>
              Social And Entertainment Super Platform
              Socio-Club
            </h1>
            <h2 className='txt1'>
              Sink Yourself Into <br /> Vibes
            </h2>
          </div>
          <div className="col-md-6" id='img'>
            <img src={home} className='img-fluid' alt="" width={650} />
          </div>
        </div>


        <div className="row my-5">
          <div className="col-md-6 text-center">
            <img src={winner} className='rounded-pill' alt="" width={250} />
          </div>
          <div className="col-md-6 text-center mt-5 pt-4">
            <h1 className='txt3'>Participate In Contests For Free And Win Rewards</h1>
          </div>
        </div>


        <div className="row bg-light rounded-pill" id='playstore'>
         
          <div className="col-md-12 text-end">
            <div className="d-flex justify-content-between px-5 py-2">
            <h1 className='text-dark px-5 mt-5 pt-3 fw-bold txt2'>GET IT ON GOOGLE PLAYSTORE</h1>

              <img src={playstore} alt="" width={180} />
            </div>
          </div>
        </div>
      </div>

      <Features />

      <Contact />




    </>
  )
}

export default Home