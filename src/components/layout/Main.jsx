import React from 'react'
import Header from '../partials/main/header/Header';
import Search from '../partials/main/search/Search';
import Slider from '../partials/main/slider/Slider';
import Footer from '../partials/main/footer/Footer';

function Main() {
    return (
        <div>
            <Header></Header>
            <Search></Search>
            <Slider></Slider>
            <Footer></Footer>
        </div>
    );
}

export default Main