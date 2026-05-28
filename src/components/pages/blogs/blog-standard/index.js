import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import BlogStandardMain from "./blog-standard";
import FooterOne from "../../../layout/footers/footer-one";
import blogStandardBanner from "../../../../assets/img/service/services-1.png.webp";


const BlogStandardPage = () => {
    return (
        <>
            <SEO pageTitle="Blog Standard" />
            <HeaderTwo />
            <BreadCrumb title="Blog Standard" innerTitle="Blog Standard" bgImage={blogStandardBanner} />
            <BlogStandardMain />
            <FooterOne />
        </>
    );
};

export default BlogStandardPage;