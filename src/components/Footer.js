import React from 'react'
import '../css/footer.css'
import logo1 from '../images/logo1.png'

const Footer = () => {
  return (
    <>
      <div className="container mt-5 p-3">
        <div className="row m-0 p-0">
          {/* <hr className='opacity-75' /> */}
          {/* <div className="col-4 text-center">
            <button className="btn btn-sm btn-outline-light text-center"><i className="bi bi-instagram px-1"></i>Instagram</button>
          </div>
          <div className="col-4 text-center">
            <button className="btn btn-sm btn-outline-light text-center"><i className="bi bi-linkedin px-1"></i>Linkdin</button>
          </div>
          <div className="col-4 text-center">
            <button className="btn btn-sm btn-outline-light text-center"><i className="bi bi-facebook px-1"></i>Facebook</button>
          </div> */}
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img src={logo1} className='img-fluid' alt="" width={50} />
              </a>
              <span className="mb-3 mb-md-0 text-muted">© 2022 Socio-club</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex" id='set'>
              <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-linkedin"></i></a></li>
              <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-instagram"></i></a></li>
              <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-facebook"></i></a></li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Footer