import React, { useState } from 'react';

function Contact() {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value })
    }


    // Connect With Firabase
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;

        if (firstName && lastName && phone && email && address && message) {

            const res = await fetch(
                'https://rupee-website-default-rtdb.firebaseio.com/userDataRecords.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "appication/json",
                    },
                    body: JSON.stringify({
                        firstName, lastName, phone, email, address, message
                    })
                }
            );

            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                });
                alert("Data Stored Successfully!");
            } else {
                alert("Please Fill The Data")
            }
        } else {
            alert("Please Fill The Data")
        }
    };

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
                                    <form method="POST">
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input type="text"
                                                    name='firstName'
                                                    id=''
                                                    className='form-control' placeholder='First Name'
                                                    value={userData.firstName}
                                                    onChange={postUserData} />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input type="text"
                                                    name='lastName'
                                                    id=''
                                                    className='form-control' placeholder='Last Name'
                                                    value={userData.lastName}
                                                    onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input type="text"
                                                    name='phone'
                                                    id=''
                                                    className='form-control' placeholder='Phone Number'
                                                    value={userData.phone}
                                                    onChange={postUserData} />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input type="text"
                                                    name='email'
                                                    id=''
                                                    className='form-control' placeholder='Email id'
                                                    value={userData.email}
                                                    onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 contact-input-feild'>
                                                <input type="text"
                                                    name='address'
                                                    id=''
                                                    className='form-control' placeholder='Add Address'
                                                    value={userData.address}
                                                    onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <input type="text"
                                                    name='message'
                                                    id=''
                                                    className='form-control' placeholder='Enter Your Message'
                                                    value={userData.message}
                                                    onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" className='main-hero-para'>
                                                I agree that the Rupee may contact me at the email address or phone number above.
                                            </label>
                                        </div>
                                        <button type='submit' className='btn btn-style' onClick={submitData}>Submit</button>
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
