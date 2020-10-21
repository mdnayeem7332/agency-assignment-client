import React, { useEffect, useState } from 'react';
import AllServices from '../AllServices/AllServices';
import { useSpring, animated } from 'react-spring'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://fierce-cliffs-21804.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container text-center" style={{ marginTop: '150px', marginBottom: '50px' }}>
            <h1 className="mb-5">Providing awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            <div className="d-flex">
                {
                    services.map(allServices => <AllServices allServices={allServices} key={allServices._id}></AllServices>)
                }
            </div>
        </div>
    );
};

export default Services;