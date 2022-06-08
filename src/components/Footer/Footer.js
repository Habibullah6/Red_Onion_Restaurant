import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className='container  bg-dark p-5'>
            <div className='row'>
                <div className="col">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div className='w-50'>
                                <img src={logo} alt="" className='img-fluid w-50 p-2' />
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-12'>
                            <div className='d-flex justify-content-around text-white'>
                                <div className='lh-1 text-start'>
                                    <p>About online food</p>
                                    <p>Read our blog</p>
                                    <p>Sign up to deliver</p>
                                    <p>Add your restaurant</p>
                                </div>
                                <div className='lh-1 text-start'>
                                    <p>Get help</p>
                                    <p>Read FAQs</p>
                                    <p>View all cities</p>
                                    <p>Restaurant near me</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5'>
                <div className='row '>
                    <div className="col">
                        <div className="d-flex justify-content-between text-white  mt-5 ">
                            <div> 
                                <p>Copyright @2022 online food</p>
                            </div>
                            
                            <div className='d-flex row  justify-content-between w-50'>
                                <div className='col-lg-4 col-12'>
                                    <span>Privacy Policy</span>
                                </div>
                                <div className='col-lg-4 col-12'>
                                    <span>Terms of use</span>
                                </div>
                                <div className='col-lg-4 col-12'>
                                    <span>Pricing</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
    );
};

export default Footer;