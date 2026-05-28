import React from 'react';
import BreadCrumb from "../../common/breadcrumb";
import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import CalculatorsMain from "./calculators-main";
import FooterOne from "../../../layout/footers/footer-one";
import calculatorsBanner from "../../../../assets/img/service/services-4.png.webp";

const CalculatorsPage = () => {
    return (
        <>
            <SEO pageTitle="Construction Calculators" />
            <HeaderTwo />
            <BreadCrumb title="Calculators" innerTitle="Calculators" bgImage={calculatorsBanner} />
            <CalculatorsMain />
            <FooterOne />
        </>
    );
};

export default CalculatorsPage;
