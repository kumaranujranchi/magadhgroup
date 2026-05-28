import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterOne from "../../../layout/footers/footer-one";
import blogBanner from "../../../../assets/img/service/services-6.png.webp";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle="Blog Grid" />
            <HeaderTwo />
            <BreadCrumb title="Blog Grid" innerTitle="Blog Grid" bgImage={blogBanner} />
            <BlogGridMain />
            <FooterOne />
        </>
    );
};

export default BlogGrid;