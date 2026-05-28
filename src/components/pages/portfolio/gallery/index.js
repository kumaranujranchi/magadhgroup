import SEO from "../../../data/seo";
import BreadCrumb from "../../common/breadcrumb";
import HeaderTwo from "../../../layout/headers/header-two";
import PortfolioFilter from "./portfolio-filter";
import FooterOne from "../../../layout/footers/footer-one";

const PortfolioFilterPage = () => {
    return (
        <>
            <SEO pageTitle="Filterable Gallery" />
            <HeaderTwo />
            <BreadCrumb title="Filterable Gallery" innerTitle="Filterable Gallery" />
            <PortfolioFilter />
            <FooterOne />
        </>
    );
};

export default PortfolioFilterPage;