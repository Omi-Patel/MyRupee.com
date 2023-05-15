import React from 'react'

function Contact() {
    return (
        <>
            <section className='contactus-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='contact-leftside col-12 col-lg-5'>
                                    <h1 className='main-heading fw-bold'>
                                        Connect With Our <br /> Sales Team.
                                    </h1>
                                    <p className='main-hero-para'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Deserunt eaque alias similique.
                                    </p>
                                    <figure>
                                        <img src="./images/hero2.png" alt="" className='img-fluid' />
                                    </figure>
                                </div>
                                {/* Right side */}
                                <div className='contact-rightside col-12 col-lg-7'>
                                    <form method="post">
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact'>
                                                <input type="text" className='form-control' placeholder='First Name' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact'>
                                                <input type="text" className='form-control' placeholder='Last Name' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact'>
                                                <input type="text" className='form-control' placeholder='Phone Number' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact'>
                                                <input type="text" className='form-control' placeholder='Email id' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <input type="text" className='form-control' placeholder='Add Address' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <input type="text" className='form-control' placeholder='Enter Your Message' />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" className='main-hero-para'>
                                                I agree that the Rupee may contact me at the email address or phone number above.
                                            </label>
                                        </div>
                                        <button type='submit' className='btn btn-style'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
