import Logo from '../logo';
import { Link } from 'react-router-dom';
import Social from "../../data/social";

const FooterThree = () => {
    return (
        <>
        <div className="cta__area">
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-7 lg-mb-30 lg-t-center title_split_anim">
                        <h2>Create Your Dream Space — Let’s Get Going!</h2>
                    </div>
                    <div className="col-lg-5 t-right lg-t-center wow fadeInDown" data-wow-delay="1.2s">
                        <Link className="build_button" to="/contact-us">Book Appointment<i className="flaticon-right-up"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer__one-area">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="footer__one-widget mr-40">
                                        <Logo isLight={true} />
                                        <h5 style={{ marginTop: '25px' }}>We’re Solutions for all construction</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 sm-mt-30">
                                    <div className="footer__one-widget address">
                                        <h4>Address</h4>
                                        <div className="footer__one-widget-address">
                                            <h6><Link to="https://www.google.com/maps">Kanti Factory Road, Kankarbagh, 800020, Patna</Link></h6>
                                            <h4><Link to="tel:+919234718187">+91 92347 18187</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 lg-mt-30">
                                    <div className="footer__one-widget ml-40 lg-ml-0">
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
                                    <div className="footer__one-widget address">
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
        <div className="copyright__area">
            <div className="container">
                <div className="row al-center">
                    <div className="col-md-7">
                        <div className="copyright__area-content md-t-center md-mb-10">
                            <p style={{ fontSize: '14px', lineHeight: '22px', color: '#a5a8a5', margin: 0 }}>
                                © 2026 Magadh Group of Company. All rights reserved.
                                <br />
                                <span style={{ fontSize: '13px', opacity: 0.85 }}>
                                    Designed and Maintained by{' '}
                                    <a 
                                        href="https://www.synergybrandarchitect.in" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ 
                                            color: 'var(--primary-color-1)', 
                                            textDecoration: 'none', 
                                            fontWeight: '600',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseOver={(e) => e.target.style.color = '#ffffff'}
                                        onMouseOut={(e) => e.target.style.color = 'var(--primary-color-1)'}
                                    >
                                        Synergy Brand Architect
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="copyright__area-social t-right md-t-center">
                            <Social />						
                        </div>
                    </div>
                </div>
            </div>
        </div>         
        </>
    );
};

export default FooterThree;