import React from 'react'
import './item.scss'

const item = () => {
    return (
        <div className="silder-item-wrapper">
            <div className="silder-item-image">
                <img src="https://cdn.bookingcare.vn/fo/2021/07/27/140801-test-covid.jpg" alt="" />
            </div>
            <div className="slider-item-content">
                <p>Testing for covid</p>
                <ul>
                    <li>Screening and identifying COVID-19</li>
                    <li>Rapid Test Methods &amp; PCR</li>
                    <li>According to the regulations of the Ministry of Health</li>
                </ul>
            </div>
            <p className='silder-item-detail'>See details</p>
        </div>
    );
};

export default item;