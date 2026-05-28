import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../../../assets/img/shape/content.png.webp";
import brand1 from "../../../../assets/img/brand/brand-1.png.webp";
import brand2 from "../../../../assets/img/brand/brand-2.png.webp";
import brand3 from "../../../../assets/img/brand/brand-3.png.webp";
import brand4 from "../../../../assets/img/brand/brand-4.png.webp";
import brand5 from "../../../../assets/img/brand/brand-5.png.webp";
import brand6 from "../../../../assets/img/brand/brand-6.png.webp";
import brand7 from "../../../../assets/img/brand/brand-7.png.webp";
import brand8 from "../../../../assets/img/brand/brand-8.png.webp";

const video = "https://buildgo-react.vercel.app/static/media/banner.b1e80eca5dee07cccccd.mp4";

const BannerFour = () => {
    return (
        <div className="banner__four">
            <div className="bg-video">
                <video autoPlay muted loop playsInline><source src={video} type="video/mp4" /></video>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__four-content">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".3s">Expert Solutions</span>
                                <h1 className="wow fadeInRight" data-wow-delay=".6s">Shaping Future</h1>
                                <h2 className="wow fadeInRight" data-wow-delay=".9s">Architecture</h2>
                                <div className="wow fadeInDown" data-wow-delay="1.2s">
                                    <Link className="build_button" to="/request-quote">Start Today<i className="flaticon-right-up"></i></Link>
                                </div>
                            <Link to="/request-quote"><img className="h_rotate" src={image} alt="image" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__four-brand">
                            <div className="title">
                                <h4>Our Trusted Partners</h4>
                            </div>
                            <div className="scroll__slider">
                                <div className="text-slide">
                                    <div className="sliders text_scroll">
                                        <ul>
                                            <li><img src={brand1} alt="image" /></li>
                                            <li><img src={brand2} alt="image" /></li>
                                            <li><img src={brand3} alt="image" /></li>
                                            <li><img src={brand4} alt="image" /></li>
                                            <li><img src={brand5} alt="image" /></li>
                                            <li><img src={brand6} alt="image" /></li>
                                            <li><img src={brand7} alt="image" /></li>
                                            <li><img src={brand8} alt="image" /></li>
                                        </ul>
                                    </div>
                                    <div className="sliders text_scroll">
                                        <ul>
                                            <li><img src={brand1} alt="image" /></li>
                                            <li><img src={brand2} alt="image" /></li>
                                            <li><img src={brand3} alt="image" /></li>
                                            <li><img src={brand4} alt="image" /></li>
                                            <li><img src={brand5} alt="image" /></li>
                                            <li><img src={brand6} alt="image" /></li>
                                            <li><img src={brand7} alt="image" /></li>
                                            <li><img src={brand8} alt="image" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerFour;