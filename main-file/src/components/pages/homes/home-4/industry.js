import React from 'react';
import image from "../../../assets/img/page/image-2.jpg";
import icon1 from "../../../assets/img/icon/icon-3.svg";
import icon2 from "../../../assets/img/icon/icon-2.svg";
import { Link } from 'react-router-dom';

const Industry = () => {
    return (
        <div className="industry__four section-padding">
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-6 lg-mb-30">
                        <div className="industry__four-left">
                            <img className="lg_img_full wow img_top_animation" src={image} alt="image" />
                            <div className="row mt-40">
                                <div className="col-md-6 md-mb-25 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="industry__four-left-item borders pr-10 lg-pr-0">
                                        <img src={icon1} alt="image" />
                                        <h5>Custom Designs</h5>
                                        <p>Tailored building solutions that reflect your vision style</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="industry__four-left-item pl-20 xl-pl-0">
                                        <img src={icon2} alt="image" />
                                        <h5>Interior Plans</h5>
                                        <p>Creating aesthetically pleasing functional interior spaces</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="industry__four-right ml-45 xl-ml-0">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Industry Certifications</span>
                            <h2 className="mb-20 wow fadeInRight" data-wow-delay=".6s">We Drive Client Success with Creative Building Designs</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">At Magadh Group, we pride ourselves on transforming our clients' visions into reality. Our innovative and client-focused designs ensure that every project stands out.</p>
                            <div className="wow fadeInDown" data-wow-delay="1.2s">
                                <Link className="build_button mt-25" to="/contact-us">Contact Us<i className="flaticon-right-up"></i></Link>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industry;