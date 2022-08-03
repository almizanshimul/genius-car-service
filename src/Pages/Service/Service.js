import React from 'react';
import { useNavigate } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }


    return (
        <div className='service'>
            <div className="card">
                <img src={img} alt="" className="card_img" />
                <div className="card_info">
                    <h3>{name}</h3>
                    <p>Price: {price}</p>
                    <p>{description}</p>
                </div>
                <button onClick={()=>navigateToServiceDetail(id)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Service;