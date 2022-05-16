import React from 'react'
import '../css/error.css'

const Error = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <h1 className='head'>404 ERROR PAGE</h1>
                        <a href='/' className='btn btn-outline-light my-3 fw-bold text-muted'>Go Back</a>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default Error