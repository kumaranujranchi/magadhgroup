import React from 'react';
import bannerBg from "../../../assets/img/shape/banner-shape.png";
import award from "../../../assets/img/shape/award.png";
import image from "../../../../assets/img/homepage-banner.png";

const BannerOne = () => {
    return (
        <div className="banner__one" style={{backgroundImage: `url(${bannerBg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__one-content">
                            <h1 className="wow fadeInRight" data-wow-delay=".4s">Building Construction Solutions</h1>
                            <div className="banner__one-content-user wow fadeInUp" data-wow-delay=".6s">
                                <a href="#contact" className="banner__one-cta-btn">
                                    <span>Get Free Quote</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                                <h5>More then 3K Clients Reviews</h5>
                            </div>
                            <div className="banner__one-content-award bounce_y">
                                <img src={award} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner__one-image">
                <img className="img_full" src={image} alt="image" />
            </div>
        </div>
    );
};

export default BannerOne;