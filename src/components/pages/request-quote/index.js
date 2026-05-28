import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from "./request-quote";
import FooterOne from "../../layout/footers/footer-one";

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Request Quote" />
            <HeaderTwo />
            <BreadCrumb title="Request Quote" innerTitle="Request Quote" />
            <RequestQuoteMain />
            <FooterOne />
        </>
    );
};

export default RequestQuotePage;