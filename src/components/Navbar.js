import React from 'react'
import logo1 from '../images/logo1.png'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black p-5">
                <div className="container padding">
                    <a className="navbar-brand" href="/">
                        <img src={logo1} alt="" class="d-inline-block align-text-top" width={170} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <form className="d-flex">
                        <input className="form-control-lg bg-dark border-0 fw-bold" type="search" placeholder="Search item here" aria-label="Search" />
                    </form> */}

                    <div className="collapse navbar-collapse float-center mx-5" id="navbarSupportedContent">
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

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar