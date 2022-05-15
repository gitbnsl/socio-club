import React from 'react'
import logo from '../images/logo.png'
import '../css/login.css'

const Login = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row m-0 p-0">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">

                    
                        <div className="card p-4">
                            <div className="card-body">
                                <h1 className='my-3 text-center'>LOGIN</h1> 
                                <form className='my-2'>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label fs-5">Username</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Username' aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label fs-5">Password</label>
                                        <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
                                    </div>

                                    <div className="d-flex justify-content-between mt-4">
                                        <button className="btn px-4 btn-register fw-bold rounded shadow">Login</button>
                                        <a href='/register' className="btn px-4 btn-register1 fw-bold rounded shadow">Register</a>
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

export default Login