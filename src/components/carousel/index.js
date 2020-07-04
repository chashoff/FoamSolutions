import React, { Component } from 'react';
import Slider from "react-slick";

class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <img height="300" src={'/images/bg.jpg'} alt="" />
                </div>
                <div>
                    <img height="300" src={'/images/bg.jpg'} alt="" />
                </div>
                <div>
                    <img height="300" src={'/images/bg.jpg'} alt="" />
                </div>
                <div>
                    <img height="300" src={'/images/bg.jpg'} alt="" />
                </div>
            </Slider>
        )
    }
}
export default Carousel;