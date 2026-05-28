"use client"
import SEO from "../../../data/seo";
import HeaderFour from "../../../layout/headers/header-four";
import BannerFour from "./banner";
import AboutFour from "./about";
import ServicesFour from "./services";
import Advices from "./advices";
import PortfolioFour from "./portfolio";
import Industry from "./industry";
import TextSlide from "./text-slide";
import BlogFour from "./blog";
import FooterFour from "../../../layout/footers/footer-four";

const HomeFour = () => {
    return (
        <>
            <SEO pageTitle="Digital Architecture" />
            <HeaderFour />
            <BannerFour />
            <AboutFour />
            <ServicesFour />
            <Advices />
            <PortfolioFour />
            <Industry />
            <TextSlide />
            <BlogFour />
            <FooterFour />
        </>
    );
};

export default HomeFour;
