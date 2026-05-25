import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "../../../layout/footers/footer-one";
import ThreeColumns from "./three-columns";

const PortfolioThreeColumns = () => {
    return (
        <>
            <SEO pageTitle="Portfolio 3 Columns" />
            <HeaderTwo />
            <BreadCrumb title="Portfolio 3 Columns" innerTitle="3 Columns" />
            <ThreeColumns />
            <FooterOne />    
        </>
    );
};

export default PortfolioThreeColumns;