import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../images/bannerImg.png';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <Container>
        <figure className='position-relative'>
          <img src={banner} alt="" className='img-fluid' />
          <figcaption>
            <p className='fw-bold'>Best food waiting for your belly</p>
            <label>
              <input type="text" className='rounded-pill' placeholder='Search your favorite food'/>
              <button className='search-button rounded-pill'>Search</button>
            </label>
          </figcaption>
        </figure>

      </Container>
    </div>
  );
};

export default Banner;