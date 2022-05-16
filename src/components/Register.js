import React from 'react'
import pic from '../images/Image.png'
import '../css/register.css'

const Register = () => {
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 my-5">

                        <div className="card text-light px-2">
                            <div className="card-body">
                                <h1 className='my-3 text-center'>REGISTER</h1>
                                <div className='pic text-center p-3'>
                                    <img src={pic} alt="" width={120} />
                                    <h5 className='my-2'>browse media on your device</h5>
                                </div>

                                <form className='my-2'>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label fs-5">Upload</label>
                                        <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label fs-5">Full Name</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Name' aria-describedby="emailHelp" />

                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label fs-5">Username</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Username' aria-describedby="emailHelp" />

                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label fs-5">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp" />

                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label fs-5">Password</label>
                                        <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
                                    </div>

                                    <div className="d-flex justify-content-between mt-4">
                                        <button className="btn px-4 btn-register fw-bold rounded shadow">Register</button>
                                        <a href='/login' className="btn px-4 btn-register1 fw-bold rounded shadow">Login</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default Register