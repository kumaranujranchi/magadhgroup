import React from 'react';
import BreadCrumb from "../../../common/breadcrumb";
import SEO from "../../../../data/seo";
import HeaderTwo from "../../../../layout/headers/header-two";
import CalculatorsMain from "./calculators-main";
import FooterOne from "../../../../layout/footers/footer-one";

const CalculatorsPage = () => {
    return (
        <>
            <SEO pageTitle="Construction Calculators" />
            <HeaderTwo />
            <BreadCrumb title="Calculators" innerTitle="Calculators" />
            <CalculatorsMain />
            <FooterOne />
        </>
    );
};

export default CalculatorsPage;
