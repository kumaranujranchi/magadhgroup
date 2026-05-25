import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterOne from "../../../layout/footers/footer-one";

const TeamPageTwo = () => {
    return (
        <>
            <SEO pageTitle="Team Two" />
            <HeaderTwo />
            <BreadCrumb title="Team Two" innerTitle="Team Two" />
            <TeamMain />
            <FooterOne />
        </>
    );
};

export default TeamPageTwo;