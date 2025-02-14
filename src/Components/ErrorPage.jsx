import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../assets/not.jpeg';

const ErrorPage = () => {
    return (
        
            <div className=' w-11/12 mx-auto p-5'>
            <img className=' w-2/3 mx-auto' src={notFound} alt="" />
            <div className=' text-center my-5'>
            <button className=' btn btn-neutral'><NavLink to={'/'}>Back To Home</NavLink></button>
            </div>
    </div>
    )
};

export default ErrorPage;