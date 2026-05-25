import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import ChooseUs from "../../homes/home/choose-us";
import WorkProcess from "../../homes/home-3/process";
import ServicesFaq from "./services-faq";
import FooterOne from "../../../layout/footers/footer-one";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Services" />
            <HeaderTwo />
            <BreadCrumb title="Services" innerTitle="Services" />
            <ServicesMain />
            <ChooseUs />
            <WorkProcess />
            <ServicesFaq />
            <FooterOne />
        </>
    );
};

export default ServicePage;