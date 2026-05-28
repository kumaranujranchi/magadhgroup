import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import PricingPlansMain from "./pricing-plans";
import FooterOne from "../../layout/footers/footer-one";

const PricingPages = () => {
    return (
        <>
            <SEO pageTitle="Price Plan" />
            <HeaderTwo />
            <BreadCrumb title="Price Plan" innerTitle="Price Plan" />
            <PricingPlansMain />
            <FooterOne />
        </>
    );
};

export default PricingPages;