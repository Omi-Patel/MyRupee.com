import React from 'react';

const Header = () => {
    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
                            <h1 className='display-2'>
                                Online Payment Made <br /> Easy For You.
                            </h1>
                            <p className='main-hero-para'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel reprehenderit, delectus voluptates eius blanditiis deleniti? Dignissimos quidem dolorum illo similique reprehenderit temporibus, dolores nisi ex. Sequi a unde quis velit libero corrupti iste. Nihil?
                            </p>
                            <h3>Get early access for you</h3>
                            <div className='input-group mt-3'>
                                <input type='text' className='rounded-pill w-75 p-2 me-3 form-control-text' placeholder='Enter Your Email' />
                                <div className='input-group-button'>Get it Now</div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center alingn-items-center main-herosection-images'>
                            <img src='./images/hero.avif' alt='' className='img-fluid' />
                            <img src='./images/hero3.avif' alt='' className='img-fluid main-hero-img2' />
                        </div>

                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;
