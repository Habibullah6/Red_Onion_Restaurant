import React from 'react';
import { FaBus, FaRegBell } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import './Services.css';


const Services = () => {
    return (
        <div className='container  mb-5'>
            <div className='service-heading'>
                <h2>Why you choose us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt rem, doloribus corporis nemo.</p>
            </div>

            <div>
                <div className="card-group">
                    <div className="card  mx-3 allCards">
                        <img src={service1} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-start">
                            <h5 className="card-title"><FaBus className='serviceIcon'/>  Fast Delivery </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            
                        </div>
                    </div>
                    <div className="card  mx-3 allCards">
                        <img src={service2} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-start">
                            <h5 className="card-title"> <FaRegBell className='serviceIcon'/> A Good Auto Responder</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            
                        </div>
                    </div>
                    <div className="card  mx-3 allCards">
                        <img src={service3} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-start">
                            <h5 className="card-title"> <TbTruckDelivery className='serviceIcon'/> Home Delivery </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Services;