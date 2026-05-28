import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import BlogSingleMain from "./blog-details";
import BreadCrumb from "../../common/breadcrumb";
import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import FooterOne from "../../../layout/footers/footer-one";
import blogData from '../../../data/blog-data';

const BlogDetails = () => {
    const params = useParams();
    const singleData = blogData?.find((blog) => blog.id === params.id);
    const navigate = useNavigate();
    useEffect(() => {
        if (!singleData) {
            navigate("/404-error");
        }
    }, []);
    if (!singleData) {
        return null;
    }
    const firstThreeWords = singleData?.title.split(' ').slice(0, 3).join(' ') + '...';
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <HeaderTwo />
            <BreadCrumb title={firstThreeWords} innerTitle={singleData?.title} />
            <BlogSingleMain singleData={singleData}/>
            <FooterOne />
        </>
    );
};

export default BlogDetails;