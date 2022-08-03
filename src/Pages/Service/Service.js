import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{name, price, description, img}=service
    return (
        <div className='service'>
            <div className="card">
                <img src={img} alt="" className="card_img" />
                <div className="card_info">
                    <h3>{name}</h3>
                    <p>Price: {price}</p>
                    <p>{description}</p>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Service;