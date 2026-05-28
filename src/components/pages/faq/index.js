import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import FaqArea from "./faq";
import FooterOne from "../../layout/footers/footer-one";
import faqBanner from "../../../assets/img/service/services-4.png.webp";

const FaqPage = () => {
    return (
        <> 
            <SEO pageTitle="FAQs" />
            <HeaderTwo />
            <BreadCrumb title="FAQs" innerTitle="FAQs" bgImage={faqBanner} />
            <FaqArea />
            <FooterOne />
        </>
    );
};

export default FaqPage;