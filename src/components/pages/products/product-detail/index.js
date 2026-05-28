import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BreadCrumb from "../../common/breadcrumb";
import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import ProductDetailMain from "./product-detail-main";
import FooterOne from "../../../layout/footers/footer-one";
import productsData from '../../../data/products-data';

const ProductDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    // Find the product by ID/slug
    const product = productsData.find(item => item.id === slug);

    useEffect(() => {
        // If product not found, redirect to 404
        if (!product) {
            navigate('/404-error');
        }
    }, [product, navigate]);

    if (!product) {
        return null;
    }

    return (
        <>
            <SEO pageTitle={`${product.title} - Product Portfolio`} />
            <HeaderTwo />
            <BreadCrumb title={product.title} innerTitle={product.title} />
            <ProductDetailMain product={product} />
            <FooterOne />
        </>
    );
};

export default ProductDetailPage;
