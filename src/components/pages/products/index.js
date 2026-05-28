import React from 'react';
import BreadCrumb from "../common/breadcrumb";
import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import ProductsMain from "./products-main";
import FooterOne from "../../layout/footers/footer-one";
import productsBanner from "../../../assets/img/banner/products-portfolio-banner.png.webp";

const ProductsPage = () => {
    return (
        <>
            <SEO pageTitle="Product Portfolio" />
            <HeaderTwo />
            <BreadCrumb title="Products Portfolio" innerTitle="Products Portfolio" bgImage={productsBanner} />
            <ProductsMain />
            <FooterOne />
        </>
    );
};

export default ProductsPage;
