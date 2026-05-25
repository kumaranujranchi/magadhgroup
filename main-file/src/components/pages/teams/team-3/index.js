import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterOne from "../../../layout/footers/footer-one";

const TeamPageThree = () => {
    return (
        <>
            <SEO pageTitle="Team Three" />
            <HeaderTwo />
            <BreadCrumb title="Team Three" innerTitle="Team Three" />
            <TeamMain />
            <FooterOne />
        </>
    );
};

export default TeamPageThree;