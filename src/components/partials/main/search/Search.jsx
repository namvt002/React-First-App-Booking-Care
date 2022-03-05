import React from 'react';
import './Search.scss'

const Search = () => {
    return (
        <div className="search-wrapper">
            {/* <span></span> */}
            <div className="search-form">
                <form action="">
                    <p>COMPREHENSIVE HEALTH CARE MEDICAL PLATFORM</p>
                    <div className="search-input">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="search" name="search" id="search" placeholder='Enter to search' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;