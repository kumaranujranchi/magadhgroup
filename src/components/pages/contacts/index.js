import SEO from "../../data/seo";
import FooterOne from "../../layout/footers/footer-one";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import ContactMain from "./contact";
import contactBanner from "../../../assets/img/service/services-3.png.webp";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contact Us" />
            <HeaderTwo />
            <BreadCrumb title="Contact Us" innerTitle="Contact Us" bgImage={contactBanner} />
            <ContactMain />
            <div className="map section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 wow fadeInUp" data-wow-delay=".4s">
                            <div className="map-area">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2489065411887!2d85.1690326!3d25.596644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58bd671ca50b%3A0x79134c1458e374f0!2sKanti%20Factory%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1716623400000!5m2!1sen!2sin" loading="lazy" title="Magadh Group - Kanti Factory Rd, Patna, Bihar" aria-label="Magadh Group location on Kanti Factory Rd, Patna, Bihar"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    );
};

export default ContactUs;