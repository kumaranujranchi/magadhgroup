import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterOne from "../../../layout/footers/footer-one";
import teamBanner from "../../../../assets/img/page/who-we-are.png.webp";

const TeamPage = () => {
    return (
        <>
            <SEO pageTitle="Our Team" />
            <HeaderTwo />
            <BreadCrumb title="Our Team" innerTitle="Our Team" bgImage={teamBanner} />
            <TeamMain />
            <FooterOne />
        </>
    );
};

export default TeamPage;