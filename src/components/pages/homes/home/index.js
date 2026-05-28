import SEO from "../../../data/seo";
import HeaderOne from "../../../layout/headers/header-one";
import BannerOne from "./banner";
import About from "./about";
import TextSlide from "./text-slide";
import Services from "./services";
import Video from "./video";
import ChooseUs from "./choose-us";
import Portfolio from "./portfolio";
import CounterUp from "./counter";
import Experience from "./experience";
import TestimonialTwo from "./testimonial-two";
import Blog from "./blog";
import FooterOne from "../../../layout/footers/footer-one";

const HomeOne = () => {
    return (
        <div>
            <SEO pageTitle='Construction Company' />
            <HeaderOne />
            <BannerOne />
            <About />
            <TextSlide />
            <Services />
            <Video />
            <ChooseUs />
            <Portfolio />
            <CounterUp />
            <Experience />
            <TestimonialTwo /> 
            <Blog /> 
            <FooterOne />
        </div>
    );
};

export default HomeOne;