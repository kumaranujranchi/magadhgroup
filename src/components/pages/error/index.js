"use client";
import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import Error from "./error";
import FooterOne from "../../layout/footers/footer-one";
import errorBanner from "../../../assets/img/banner/banner-highrise.png.webp";

const ErrorPage = () => {
    return (
        <>
            <SEO pageTitle='Page Not Found' />
            <HeaderTwo />
            <BreadCrumb title='Page Not Found' innerTitle='404' bgImage={errorBanner} />
            <Error />
            <FooterOne />
        </>
    );
};

export default ErrorPage;