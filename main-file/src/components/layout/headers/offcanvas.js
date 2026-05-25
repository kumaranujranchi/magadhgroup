import { Link } from 'react-router-dom';
import Social from '../../data/social';
import Logo from '../logo';

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
                <div className="header__area-menubar-right-sidebar-popup-logo">
                    <Logo isLight={true} />
                </div>
                <p>Redefining the construction industry with innovative solutions, cuttin-edge technology and sustainable practices</p>
                <div className="header__area-menubar-right-sidebar-popup-contact">
                    <h4 className="mb-30">Address</h4>
                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="flaticon-phone"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Phone:</span>
                            <h6><Link to="tel:+919234718187">+91 92347 18187</Link></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="flaticon-email-3"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Email Address:</span>
                            <h6><Link to="mailto:info@magadhgroup.com">info@magadhgroup.com</Link></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="flaticon-location-1"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Location:</span>
                            <h6><Link to="https://google.com/maps" target="_blank">Kanti Factory Road, Kankarbagh, 800020, Patna</Link></h6>
                        </div>
                    </div>
                </div>
                <div className="header__area-menubar-right-sidebar-popup-social">
                    <Social />							
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;