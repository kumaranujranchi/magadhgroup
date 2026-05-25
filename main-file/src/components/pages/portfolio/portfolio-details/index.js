import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioDetailsMain from "./portfolio-details";
import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import FooterOne from "../../../layout/footers/footer-one";
import portfolioData from "../../../data/portfolio-data";

const PortfolioDetails = () => {
    const params = useParams();
    const singleData = portfolioData?.find((portfolio) => portfolio.id === params.id);
    const navigate = useNavigate();
    useEffect(() => {
        if (!singleData) {
            navigate("/404-error");
        }
    }, []);
    if (!singleData) {
        return null;
    }
    const firstThreeWords = singleData?.title.split(' ').slice(0, 3).join(' ') + '...';
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <HeaderTwo />
            <BreadCrumb title={firstThreeWords} innerTitle={singleData?.title} />
            <PortfolioDetailsMain singleData={singleData}/>
            <FooterOne />
        </>
    );
};

export default PortfolioDetails;