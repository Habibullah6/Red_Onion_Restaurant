import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='p-5 text-danger'>
            <h1>404</h1>
            <p>Page not found</p>
            <NavLink to='/'><button className='btn btn-danger'>Go back to our homepage</button></NavLink>
        </div>
    );
};

export default NotFound;