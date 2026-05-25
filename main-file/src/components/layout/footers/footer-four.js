
import Logo from '../logo';
import { Link } from 'react-router-dom';
import subscribeBg from "../../assets/img/page/subscribe.jpg";
import Social from '../../data/social';

const FooterFour = () => {
    return (
        <>
            <div className="cta__four">
                <div className="container">
                    <div className="row jc-center">
                        <div className="col-xl-12">
                            <div className="cta__four-area t-center" style={{backgroundImage: `url(${subscribeBg})`}}>
                                <div className="cta__four-area-content">
                                    <h2 className="wow fadeInRight" data-wow-delay=".6s">Join Our Community and Access Exclusive Insights Today</h2>
                                    <div className="wow fadeInDown" data-wow-delay="1.2s">
                                        <Link className="build_button mt-40" to="/request-quote">Free Consultation<i className="flaticon-right-up"></i></Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__four">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="footer__four-area">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="footer__four-widget mr-40">
                                            <Logo isLight={false} />
                                            <h5 style={{ marginTop: '25px' }}>We’re Solutions for all construction</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 sm-mt-30">
                                        <div className="footer__four-widget address">
                                            <h4>Address</h4>
                                            <div className="footer__four-widget-address">
                                                <h6><Link to="https://www.google.com/maps">Kanti Factory Road, Kankarbagh, 800020, Patna</Link></h6>
                                                <h4><Link to="tel:+919234718187">+91 92347 18187</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 lg-mt-30">
                                        <div className="footer__four-widget ml-40 lg-ml-0">
                                            <h4>Quick links</h4>
                                            <div className="footer-widget-menu">
                                                <ul>
                                                    <li><Link to="/about-us">About Us</Link></li>
                                                    <li><Link to="/blog">Blog</Link></li>
                                                    <li><Link to="/testimonial">Testimonials</Link></li>
                                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6 lg-mt-30">
                                        <div className="footer__four-widget address">
                                            <h4>Support</h4>
                                            <div className="footer-widget-menu">
                                                <ul>
                                                    <li><Link to="/contact-us">Term & Conditions</Link></li>
                                                    <li><Link to="/contact-us">Privacy policy</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__area copyright__custom-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="copyright__custom-content md-t-center md-mb-15">
                               <p className="copyright-text">
                                    © 2026 <span>Magadh Group of Company</span>. All rights reserved.
                                </p>
                                <p className="designer-text">
                                    Designed & Maintained by <a href="https://www.synergybrandarchitect.in" target="_blank" rel="noopener noreferrer">Synergy Brand Architect</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="copyright__custom-social t-right md-t-center">
                                <Social />						
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterFour;