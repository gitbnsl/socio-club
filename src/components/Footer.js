import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row m-0 p-0">
          <hr />
          <div className="col-4 text-center">
            <button className="btn btn-sm btn-outline-light text-center"><i className="bi bi-linkedin px-1"></i>Linkdin</button>
          </div>
          <div className="col-4 text-center">
            <button className="btn btn-sm btn-outline-light text-center"><i className="bi bi-instagram px-1"></i>Instagram</button>
          </div>
          <div className="col-4 text-center">
            <button className="btn btn-sm btn-outline-light text-center"><i className="bi bi-facebook px-1"></i>Facebook</button>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Footer