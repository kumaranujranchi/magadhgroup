"use client"
import SEO from "../../../data/seo";
import HeaderThree from "../../../layout/headers/header-three";
import BannerThree from "./banner";
import AboutThree from "./about";
import CounterUp from "./counter";
import Services from "./services";
import ChooseUs from "./choose-us";
import WorkProcess from "./process";
import PortfolioThree from "./portfolio";
import Industry from "./industry";
import Award from "./award";
import Blog from "./blog";
import FooterThree from "../../../layout/footers/footer-three";

const HomeThree = () => {
    return (
        <>
            <SEO pageTitle="Modern Construction" />
            <HeaderThree />
            <BannerThree />
            <AboutThree />
            <CounterUp />
            <Services />
            <ChooseUs />
            <WorkProcess />
            <PortfolioThree />
            <Industry />
            <Award />
            <Blog />
            <FooterThree />
        </>
    );
};

export default HomeThree;
