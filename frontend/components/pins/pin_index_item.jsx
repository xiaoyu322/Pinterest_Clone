import React from 'react';
import { Link } from "react-router-dom";



const PinIndexItem = ({ pin }) => (
    <ul>
        <Link to={`/pins/${pin.id}`}>
            <img src={pin.photo_url} id={pin.id} className='pin-images'/>
        </Link>
    </ul>
);

export default PinIndexItem;