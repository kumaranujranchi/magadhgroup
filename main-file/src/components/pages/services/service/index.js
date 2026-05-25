import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import FooterOne from "../../../layout/footers/footer-one";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Services" />
            <HeaderTwo />
            <BreadCrumb title="Services" innerTitle="Services" />
            <ServicesMain />
            <FooterOne />
        </>
    );
};

export default ServicePage;