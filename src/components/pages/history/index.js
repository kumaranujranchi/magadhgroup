import BreadCrumb from "../common/breadcrumb";
import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import FooterOne from "../../layout/footers/footer-one";
import CompanyHistory from "./history";

const History = () => {
    return (
        <>
            <SEO pageTitle="Company History" />
            <HeaderTwo />
            <BreadCrumb title="Company History" innerTitle="Company History" />
            <CompanyHistory />
            <FooterOne />
        </>
    );
};

export default History;