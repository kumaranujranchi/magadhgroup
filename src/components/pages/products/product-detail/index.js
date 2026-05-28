import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BreadCrumb from "../../common/breadcrumb";
import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import ProductDetailMain from "./product-detail-main";
import FooterOne from "../../../layout/footers/footer-one";
import productsData from '../../../data/products-data';
import tmtBanner from '../../../../assets/img/banner/TMT-banner.png.webp';
import cementBanner from '../../../../assets/img/banner/products-portfolio-banner.png.webp';
import sandChipsBanner from '../../../../assets/img/banner/sand-chips-bricks-banner.png.webp';
import rmcBanner from '../../../../assets/img/banner/rmc-banner.png.webp';
import doorWindowsBanner from '../../../../assets/img/banner/door-windows-banner.png.webp';
import electricalBanner from '../../../../assets/img/banner/electrical-banner.png.webp';
import paintBanner from '../../../../assets/img/banner/paint-banner.png.webp';
import liftBanner from '../../../../assets/img/banner/lift-banner.png.webp';
import structureBanner from '../../../../assets/img/banner/structure-banner.png.webp';
import applianceBanner from '../../../../assets/img/banner/home-applincece-banner.png.webp';

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
            <BreadCrumb 
                title={product.title} 
                innerTitle={product.title} 
                bgImage={
                    product.id === 'tmt-bars' ? tmtBanner : 
                    product.id === 'cement' ? cementBanner : 
                    product.id === 'sand-chips-brick' ? sandChipsBanner : 
                    product.id === 'rmc' ? rmcBanner : 
                    product.id === 'doors-windows' ? doorWindowsBanner : 
                    product.id === 'electrical-items' ? electricalBanner : 
                    product.id === 'paints' ? paintBanner : 
                    product.id === 'lifts' ? liftBanner : 
                    product.id === 'structure-iron' ? structureBanner : 
                    product.id === 'home-appliances' ? applianceBanner : 
                    undefined
                } 
            />
            <ProductDetailMain product={product} />
            <FooterOne />
        </>
    );
};

export default ProductDetailPage;
