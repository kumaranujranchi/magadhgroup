"use client"
import SEO from "../../../data/seo";
import FooterTwo from "../../../layout/footers/footer-two";
import HeaderTwo from "../../../layout/headers/header-two";
import AboutTwo from "./about";
import BannerTwo from "./banner";
import BlogTwo from "./blog";
import FaqArea from "./faq";
import PortfolioTwo from "./portfolio";
import PricingPlan from "./pricing";
import ServicesTwo from "./services";
import TestimonialTwo from "./testimonial";

const HomeTwo = () => {
    return (
        <>
            <SEO pageTitle="Renovation Business" />
            <HeaderTwo />
            <BannerTwo />
            <ServicesTwo />
            <AboutTwo />
            <PortfolioTwo />
            <FaqArea />
            <PricingPlan />
            <TestimonialTwo />
            <BlogTwo />
            <FooterTwo />
        </>
    );
};

export default HomeTwo;