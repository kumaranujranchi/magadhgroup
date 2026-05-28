import React from 'react';
import BreadCrumb from "../common/breadcrumb";
import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import ProductsMain from "./products-main";
import FooterOne from "../../layout/footers/footer-one";

const ProductsPage = () => {
    return (
        <>
            <SEO pageTitle="Product Portfolio" />
            <HeaderTwo />
            <BreadCrumb title="Products Portfolio" innerTitle="Products Portfolio" />
            <ProductsMain />
            <FooterOne />
        </>
    );
};

export default ProductsPage;
