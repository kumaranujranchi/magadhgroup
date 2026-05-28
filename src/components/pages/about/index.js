import BreadCrumb from "../common/breadcrumb";
import SEO from "../../data/seo";
import aboutBanner from "../../../assets/img/about/aboutuspage-1.png.webp";
import HeaderTwo from "../../layout/headers/header-two";
import AboutMain from "./about";
import Video from "./video";
import Certification from "./certification";
import WhyChooseUs from "./why-choose";
import Team from "./team";
import FooterOne from "../../layout/footers/footer-one";


const AboutUs = () => {
    return (
        <>
            <SEO pageTitle="About Us" />
            <HeaderTwo />
            <BreadCrumb title="About Us" innerTitle="About Us" bgImage={aboutBanner} />
            <AboutMain />
            <Video />
            <Certification />
            <WhyChooseUs />
            <Team />
            <FooterOne />
        </>
    );
};

export default AboutUs;