import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <hr className='mt-5' />
            <p className='text-center my-4'>Copyright @ {year}</p>
        </div>
    );
};

export default Footer;