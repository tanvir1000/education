import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {servicedescription} = useParams();
    return (
        <div>
            <h1>Details: {servicedescription}</h1>
        </div>
    );
};

export default Booking;