import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card p-5">
                            <div className="card-body">
                                <h1 className='my-3 text-center'>CONTACT US</h1>
                                <form className='my-2' ref={form} onSubmit={sendEmail}>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label fs-5">Name</label>
                                        <input type="text" className="form-control" name='name' placeholder='Your Name' id="exampleInputPassword1" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email</label>
                                        <input type="email" className="form-control" name='email' id="exampleInputEmail1" placeholder='Your Email' aria-describedby="emailHelp" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label fs-5">Message</label>
                                        <textarea className='form-control' placeholder='Type a Message' name="msg" id="" cols="10" rows="5"></textarea>
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

    );
};

export default From;