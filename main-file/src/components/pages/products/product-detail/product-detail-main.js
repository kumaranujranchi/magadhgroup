import React, { useState } from 'react';

const ProductDetailMain = ({ product }) => {
    // State for the Get Quote Form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        productName: product.title,
        variant: product.variants[0]?.name || '',
        quantity: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                productName: product.title,
                variant: product.variants[0]?.name || '',
                quantity: '',
                message: ''
            });
        }, 1200);
    };

    return (
        <div className="product-detail__page py-5">
            {/* Overview Section */}
            <div className="container mt-50">
                <div className="row align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
                        <div className="product-detail__content">
                            <span className="subtitle text-uppercase font-weight-bold" style={{ color: 'var(--primary-color-1)', letterSpacing: '1.5px', fontSize: '13px' }}>
                                Product Category
                            </span>
                            <h2 className="mt-10 mb-20 font-weight-bold" style={{ fontSize: '38px', color: 'var(--text-heading-color)' }}>
                                {product.title}
                            </h2>
                            <p className="lead font-weight-medium" style={{ fontSize: '18px', color: '#555', lineHeight: '1.7' }}>
                                {product.subtitle}
                            </p>
                            <p className="mt-20 mb-30" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                                {product.heroDescription}
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay=".5s">
                        <div className="row g-4">
                            <div className="col-sm-6">
                                <div className="product-detail__stat-card">
                                    <h5>{product.variants.length} +</h5>
                                    <p>Available {product.variantLabel}</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="product-detail__stat-card">
                                    <h5>{product.brands.length} +</h5>
                                    <p>Premium Partner Brands</p>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="p-4 rounded border" style={{ background: '#fcfbf7', borderColor: 'var(--border-color-1)' }}>
                                    <h6 className="font-weight-bold mb-2" style={{ color: 'var(--color-1)' }}>
                                        <i className="fa-solid fa-circle-check text-success me-2"></i> Quality Assurance
                                    </h6>
                                    <p className="mb-0" style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                                        Magadh Group guarantees 100% genuine products sourced directly from manufacturers. 
                                        All shipments are certified and tested for structural standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variants Section */}
            <div className="bg-light-gray py-5 my-5 section-padding-two" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center text-center mb-50">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <span className="subtitle">Available Specifications</span>
                                <h2>Types & Dimensions</h2>
                                <p className="mt-15">
                                    We supply the following variants and sizing standards for {product.title} to cater to diverse structural requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {product.variants.map((v, idx) => (
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + (idx % 4) * 0.1}s`} key={idx}>
                                <div className="variant__card">
                                    <span className="variant__card-num">Option 0{idx + 1}</span>
                                    <h4 className="variant__card-title">{v.name}</h4>
                                    <p>{v.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Brands Showcase Section */}
            <div className="container my-5 py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-10 wow fadeInUp" data-wow-delay=".3s">
                        <h3 className="brand-showcase__title">Authorized Brands We Deal In</h3>
                        <div className="brand-showcase__grid">
                            {product.brands.map((brand, bIdx) => (
                                <div className="brand-showcase__item" key={bIdx}>
                                    <i className="fa-solid fa-star text-warning me-2" style={{ fontSize: '12px' }}></i>
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Form Section */}
            <div id="get-quote-section" className="container mt-80 mb-50 section-padding-two">
                <div className="row justify-content-center">
                    <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
                        <div className="quote-form__wrapper">
                            <div className="text-center mb-40">
                                <h3>Request a Quote for {product.title}</h3>
                                <p>Fill out the form below to receive a customized pricing quote and delivery timeline within 24 hours.</p>
                            </div>

                            {isSubmitted ? (
                                <div className="text-center py-5 wow zoomIn" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                    <i className="fa-solid fa-circle-check text-success mb-3" style={{ fontSize: '64px' }}></i>
                                    <h4 className="text-white font-weight-bold">Thank You!</h4>
                                    <p className="px-4 mt-10 mb-0" style={{ color: '#b0b8c3' }}>
                                        Your quote request for <strong>{product.title}</strong> has been received. 
                                        Our representative will call you on your registered phone number or email shortly!
                                    </p>
                                    <button 
                                        className="btn btn-outline-light mt-30 px-4 py-2" 
                                        onClick={() => setIsSubmitted(false)}
                                        style={{ borderRadius: '30px' }}
                                    >
                                        Send Another Request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="row">
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="name">Full Name *</label>
                                        <input 
                                            type="text" 
                                            id="name"
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            required 
                                            placeholder="Enter your name" 
                                        />
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input 
                                            type="tel" 
                                            id="phone"
                                            name="phone" 
                                            value={formData.phone} 
                                            onChange={handleChange} 
                                            required 
                                            placeholder="Enter your phone number" 
                                        />
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="email">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email"
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            placeholder="Enter your email address" 
                                        />
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="variant">Preferred Option / Variant</label>
                                        <select 
                                            id="variant"
                                            name="variant" 
                                            value={formData.variant} 
                                            onChange={handleChange}
                                        >
                                            {product.variants.map((v, idx) => (
                                                <option key={idx} value={v.name}>{v.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="productName">Product Category</label>
                                        <input 
                                            type="text" 
                                            id="productName"
                                            name="productName" 
                                            value={formData.productName} 
                                            disabled 
                                            style={{ opacity: 0.7, cursor: 'not-allowed' }}
                                        />
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="quantity">Estimated Quantity Required</label>
                                        <input 
                                            type="text" 
                                            id="quantity"
                                            name="quantity" 
                                            value={formData.quantity} 
                                            onChange={handleChange} 
                                            placeholder="e.g. 50 Tons, 100 Bags, etc." 
                                        />
                                    </div>
                                    <div className="col-12 quote-form__field">
                                        <label htmlFor="message">Requirement Details / Special Instructions</label>
                                        <textarea 
                                            id="message"
                                            name="message" 
                                            rows="4" 
                                            value={formData.message} 
                                            onChange={handleChange} 
                                            placeholder="Mention specific delivery location, customized requirements or timing..."
                                        ></textarea>
                                    </div>
                                    <div className="col-12 mt-20">
                                        <button 
                                            type="submit" 
                                            className="quote-form__btn build_button"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Sending Request...
                                                </>
                                            ) : (
                                                <>
                                                    Get Customized Quote <i className="fa-solid fa-paper-plane ms-2"></i>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailMain;
