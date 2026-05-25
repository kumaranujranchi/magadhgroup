import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterOne from "../../../layout/footers/footer-one";

const TeamPage = () => {
    return (
        <>
            <SEO pageTitle="Our Team" />
            <HeaderTwo />
            <BreadCrumb title="Our Team" innerTitle="Our Team" />
            <TeamMain />
            <FooterOne />
        </>
    );
};

export default TeamPage;