import React, { useEffect } from 'react';
import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import FooterOne from "../../../layout/footers/footer-one";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../../../data/services-data";

const ServicesDetails = () => {
    const params = useParams();
    const singleData = servicesData?.find((service) => service.id === params.id);
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
            <ServicesSingleMain singleData={singleData}/>
            <FooterOne />
        </>
    );
};

export default ServicesDetails;
