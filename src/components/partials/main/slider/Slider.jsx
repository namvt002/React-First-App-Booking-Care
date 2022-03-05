import React from 'react';
import Item from './items/item'
import {Link} from 'react-router-dom'
import './Slider.scss'
const Slider = () => {
    return (
        <div className="slider-wrapper">
            <Link to="/sub-page" className="slider-link"><Item></Item></Link>
            <Link to="/sub-page" className="slider-link"><Item></Item></Link>
            <Link to="/sub-page" className="slider-link"><Item></Item></Link>
            <Link to="/sub-page" className="slider-link"><Item></Item></Link>
            <Link to="/sub-page" className="slider-link"><Item></Item></Link>
            <Link to="/sub-page" className="slider-link"><Item></Item></Link>          
        </div>
    );
};

export default Slider;