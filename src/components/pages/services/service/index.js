import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import servicesBanner from "../../../../assets/img/service/services-1.png.webp";
import ServicesMain from "./services";
import ProfessionalsSection from "./professionals";
import ChooseUs from "../../homes/home/choose-us";
import WorkProcess from "./process";
import ServicesFaq from "./services-faq";
import FooterOne from "../../../layout/footers/footer-one";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Services" />
            <HeaderTwo />
            <BreadCrumb title="Services" innerTitle="Services" bgImage={servicesBanner} />
            <ServicesMain />
            <ProfessionalsSection />
            <ChooseUs />
            <WorkProcess />
            <ServicesFaq />
            <FooterOne />
        </>
    );
};

export default ServicePage;