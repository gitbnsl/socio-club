import React, { useState, useRef } from 'react'

import email from 'emailjs-com'
// import email from '@emailjs/browser';

const ContactFrom = () => {
    const form = useRef();

    const [data, setData] = useState({
        name: "",
        email: "",
        msg: ""
    })

    const getData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...data, [name]: value })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('click active')

        email.sendForm('service_x3zc6nk', 'template_xh65ho7', form.current, 'tXYQhNSTkw49_VQSu')
            .then((result) => {
                console.log(result.text);
                alert("Success")
            }, (error) => {
                console.log(error.text);
            });
    }



    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card p-2">
                            <div className="card-body">
                                <h1 className='my-3 text-center'>CONTACT US</h1>
                                <form className='my-2' ref={form} onSubmit={sendEmail}>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label fs-5">Name</label>
                                        <input type="text" className="form-control" onClick={getData} name='name' placeholder='Your Name' id="exampleInputPassword1" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email</label>
                                        <input type="email" className="form-control" onClick={getData} name='email' id="exampleInputEmail1" placeholder='Your Email' aria-describedby="emailHelp" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label fs-5">Message</label>
                                        <textarea className='form-control' onClick={getData} placeholder='Type a Message' name="message" id="" cols="10" rows="5"></textarea>
                                    </div>

                                    <div className="mt-5 text-center">
                                        <button className="btn px-5 btn-register fw-bold rounded shadow" >Send</button>
                                    </div>

                                </form>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default ContactFrom