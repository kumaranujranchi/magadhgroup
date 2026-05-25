import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import FaqArea from "./faq"; 
import FooterOne from "../../layout/footers/footer-one";

const FaqPage = () => {
    return (
        <> 
            <SEO pageTitle="FAQs" />
            <HeaderTwo />
            <BreadCrumb title="FAQs" innerTitle="FAQs" />
            <FaqArea />
            <FooterOne />
        </>
    );
};

export default FaqPage;