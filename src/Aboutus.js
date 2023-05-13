import React from 'react'

const Aboutus = () => {
    return (
        <>
            <section className='common-section our-services'>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                            <img src='./images/aboutImg.webp' />
                        </div>

                        {/* Right section */}
                        <div className='col-12 col-lg-7 our-services-list'>
                            <h3 className='mini-title'>--available @ google and ios app store only</h3>
                            <h1 className='main-heading'>How to use the App?</h1>
                            <div className='row our-services-info'>
                                <div className='col-1 our-services-number'>1</div>
                                <div className='col-10 our-services-data'>
                                    <h2>Sign in</h2>
                                    <p className='main-hero-para'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dui et ligula mattis imperdiet. Cras hendrerit pharetra erat eu fermentum. Vestibulum sed placerat nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                    </p>
                                </div>
                            </div>
                            <br />
                            <button className='btn-style btn-style-border'>Learn More</button>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}

export default Aboutus;
