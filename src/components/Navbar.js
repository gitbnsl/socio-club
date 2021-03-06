import React from 'react'
import logo1 from '../images/logo1.png'
import '../css/navbar.css'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-black navbar-expand-lg padding">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        <img src={logo1} className='' alt="" width={150} />
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-danger"></span>
                    </button>
                    <div className="collapse navbar-collapse ui" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link h4" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link h4" href="#Feature">Features</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link h4" href="#" hidden></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link h4" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link h4" href="/login">Connect</a>
                            </li>

                        </ul>
                        <div className="d-flex justify-content-end">
                            <form action="" className=''></form>
                            <input type="text" className='form-control fw-bold bg-dark border-0 p-2' placeholder='Search The items' />
                        </div>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar