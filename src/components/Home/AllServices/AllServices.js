import React from 'react';
import { Link } from 'react-router-dom';
import './AllServices.css';

const AllServices = ({ allServices }) => {

    const { _id, image, title, description } = allServices;

    return (
        <Link to={'/dashboard'} style={{ textDecoration: 'none' }} >
            <div className="card services my-5" style={{ height: 250 }}>
                <div className="card-body">
                    <img src={image} alt="No Image" style={{ height: '40px' }} />
                    <h3 className="text-dark">{title}</h3>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default AllServices;