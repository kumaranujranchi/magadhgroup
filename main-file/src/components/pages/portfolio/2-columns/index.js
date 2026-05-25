import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "../../../layout/footers/footer-one";
import TwoColumns from "./two-columns";

const PortfolioTowColumns = () => {
    return (
        <>
            <SEO pageTitle="Portfolio 2 Columns" />
            <HeaderTwo />
            <BreadCrumb title="Portfolio 2 Columns" innerTitle="2 Columns" />
            <TwoColumns />
            <FooterOne />    
        </>
    );
};

export default PortfolioTowColumns;