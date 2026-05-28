import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterOne from "../../../layout/footers/footer-one";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle="Blog Grid" />
            <HeaderTwo />
            <BreadCrumb title="Blog Grid" innerTitle="Blog Grid" />
            <BlogGridMain />
            <FooterOne />
        </>
    );
};

export default BlogGrid;