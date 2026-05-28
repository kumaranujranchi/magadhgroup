import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import TestimonialMain from "./testimonial";
import FooterOne from "../../layout/footers/footer-one";
import testimonialBanner from "../../../assets/img/service/services-5.png.webp";

const Testimonial = () => {
    return (
        <>
            <SEO pageTitle='Testimonials' />
            <HeaderTwo />
            <BreadCrumb title='Testimonials' innerTitle='Testimonials' bgImage={testimonialBanner} />
            <TestimonialMain />
            <FooterOne />
        </>
    );
};

export default Testimonial;