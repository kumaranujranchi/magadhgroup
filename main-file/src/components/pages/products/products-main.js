import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products-data';

const ProductsMain = () => {
    return (
        <div className="products__page section-padding-three">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center mb-50">
                        <div className="section-title">
                            <span className="subtitle">Magadh Group Portfolio</span>
                            <h2>Premium Construction Materials</h2>
                            <p className="mt-15">
                                Discover our extensive range of high-quality construction materials and building systems,
                                engineered for durability, strength, and modern architectural elegance.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {productsData?.map((data, index) => {
                        // Calculate delayed animations for smooth staggered loading
                        const delay = `${0.2 + (index % 3) * 0.15}s`;
                        
                        return (
                            <div className="col-lg-4 col-md-6 mt-25 wow fadeInUp" data-wow-delay={delay} key={data.id}>
                                <div className="product__card">
                                    <span className="product__card-badge">
                                        {data.variantCount}
                                    </span>
                                    
                                    <div className="product__card-icon">
                                        {data.icon}
                                    </div>
                                    
                                    <h4 className="product__card-title">
                                        <Link to={`/products/${data.id}`}>{data.title}</Link>
                                    </h4>
                                    
                                    <div className="product__card-subtitle">
                                        {data.subtitle}
                                    </div>
                                    
                                    <p className="product__card-description">
                                        {data.description}
                                    </p>
                                    
                                    <div className="product__card-brands">
                                        {data.brands.slice(0, 4).map((brand, bIdx) => {
                                            const brandName = typeof brand === 'object' ? brand.name : brand;
                                            return (
                                                <span key={bIdx} className="product__card-brand-tag">
                                                    {brandName}
                                                </span>
                                            );
                                        })}
                                        {data.brands.length > 4 && (
                                            <span className="product__card-brand-tag" style={{ opacity: 0.7 }}>
                                                +{data.brands.length - 4} More
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className="product__card-footer">
                                        <Link className="product__card-link" to={`/products/${data.id}`}>
                                            View Details <i className="fa-regular fa-arrow-right-long"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductsMain;
