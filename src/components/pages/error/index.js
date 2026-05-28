"use client";
import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import Error from "./error";
import FooterOne from "../../layout/footers/footer-one";

const ErrorPage = () => {
    return (
        <>
            <SEO pageTitle='Page Not Found' />
            <HeaderTwo />
            <BreadCrumb title='Page Not Found' innerTitle='404' />
            <Error />
            <FooterOne />
        </>
    );
};

export default ErrorPage;