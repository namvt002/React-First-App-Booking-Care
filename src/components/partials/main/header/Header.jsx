import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header-left">
                    <i className="fa-solid fa-bars"></i>
                    <img src="https://bookingcare.vn/assets/icon/bookingcare-2020.svg" alt="" />
                </div>
                <div className="header-center">
                    <ul>
                        <li>
                            <a href="">
                                <p className='header-title'>Specialist</p>
                                <p>Find a doctor by specialty</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p className='header-title'>Health facilities</p>
                                <p>Choose hospital clinic</p>
                            </a>

                        </li>
                        <li>
                            <a href="">
                                <p className='header-title'>Doctor</p>
                                <p>
                                    Choose a good doctor
                                </p>
                            </a>

                        </li>
                        <li>
                            <a href="">
                                <p className='header-title'>Examination package</p>
                                <p>
                                    General health check
                                </p>
                            </a>

                        </li>
                    </ul>
                </div >
                <div className="header-right">
                    <i className="fa-solid fa-circle-question"></i> <span>Support</span>
                </div>
            </div>
        </div>
    );
};

export default Header;