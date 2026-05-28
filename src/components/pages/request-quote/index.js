import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from "./request-quote";
import FooterOne from "../../layout/footers/footer-one";
import quoteBanner from "../../../assets/img/banner/banner-highrise.png.webp";

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Request Quote" />
            <HeaderTwo />
            <BreadCrumb title="Request Quote" innerTitle="Request Quote" bgImage={quoteBanner} />
            <RequestQuoteMain />
            <FooterOne />
        </>
    );
};

export default RequestQuotePage;