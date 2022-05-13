import React from 'react'
import logo from '../images/logo1.png'

const Contact = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-1"></div>

                    <div className="col-md-10">
                        
                        <div className="d-flex justify-content-between">
                            <div>
                                <img className='rounded p-5' src={logo} alt="" width={300} />
                            </div>
                            <div className='mt-5'>
                                <h1 className='fs-2 mx-5 px-1'>Contact</h1>
                                <p className='m-0 p-2'><i className="bi bi-geo-alt px-2"></i>Electronics City Phase 1, <br /> Bengaluru, Karnataka 560100</p>
                                <p className='m-0 p-2'><i className="bi bi-envelope px-2"></i>socioclubsc@gmail.com</p>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

        </>
    )
}

export default Contact