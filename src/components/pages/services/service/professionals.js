import React, { useState } from 'react';
import imgSiteEngineer from "../../../../assets/img/site engineer.png.webp";
import imgPainter from "../../../../assets/img/Painter copy.png.webp";
import imgElectrician from "../../../../assets/img/electrician.png.webp";
import imgPlumber from "../../../../assets/img/Plumber.png.webp";
import imgContractor from "../../../../assets/img/contractor.png";
import imgACService from "../../../../assets/img/ac_service.png";

const professionalsData = [
    {
        name: "Site Engineer",
        description: "Expert project supervision, structural quality control, and site coordination.",
        image: imgSiteEngineer
    },
    {
        name: "Contractor",
        description: "Turnkey residential and commercial construction management, labor handling, and execution.",
        image: imgContractor
    },
    {
        name: "Painter",
        description: "High-quality wall painting, exterior coatings, and decorative texture application.",
        image: imgPainter
    },
    {
        name: "Electrician",
        description: "Safe residential wiring, lighting setups, panel installations, and repairs.",
        image: imgElectrician
    },
    {
        name: "Plumber",
        description: "Professional sanitary fittings, pipeline layouts, and smart drainage installations.",
        image: imgPlumber
    },
    {
        name: "AC Service",
        description: "Professional air conditioner installation, gas charging, coil cleaning, and maintenance.",
        image: imgACService
    }
];

const ProfessionalsSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        address: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "professional-booking-form", ...formData })
        })
        .then(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', service: '', address: '', message: '' });
        })
        .catch(error => {
            setIsLoading(false);
            alert("Error sending submission: " + error);
        });
    };

    return (
        <>
            {/* ── Professionals Cards Section ── */}
            <div className="team__area section-padding-two" style={{ background: '#fcfbf7' }}>
                <div className="container">
                    <div className="row mb-50 justify-content-center text-center">
                        <div className="col-lg-8">
                            <div className="team__area-title">
                                <span className="subtitle">Contract Services</span>
                                <h2>Professionals Service</h2>
                                <p className="mt-15">
                                    We provide highly skilled and certified professionals on a contract basis to ensure the highest standards of execution for your residential, commercial, and maintenance projects.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {professionalsData.map((data, id) => (
                            <div className="col-lg-4 col-md-6" key={id}>
                                <div
                                    className="team__area-item professional-card"
                                    style={{
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
                                        background: '#fff',
                                        height: '100%'
                                    }}
                                >
                                    {/* Fixed-height image container — objectPosition top keeps heads visible */}
                                    <div style={{ overflow: 'hidden', height: '300px' }}>
                                        <img
                                            className="img_full"
                                            src={data.image}
                                            alt={data.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'top center',
                                                transition: 'transform 0.5s ease'
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="team__area-item-content t-center pt-25 pb-25 px-4"
                                        style={{ position: 'relative', marginTop: '0', background: '#fff' }}
                                    >
                                        <h4 className="mb-2 font-weight-bold" style={{ fontSize: '20px', color: '#111' }}>
                                            {data.name}
                                        </h4>
                                        <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '24px' }}>
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Service Booking Form Section ── */}
            <div
                id="book-professional-form"
                style={{
                    background: 'var(--color-1)',
                    padding: '80px 0'
                }}
            >
                <div className="container">
                    <div className="row justify-content-center mb-50">
                        <div className="col-lg-7 text-center">
                            <span
                                className="subtitle"
                                style={{
                                    color: '#e8b86d',
                                    background: 'rgba(232,184,109,0.12)',
                                    border: '1px solid rgba(232,184,109,0.3)',
                                    borderRadius: '30px',
                                    padding: '6px 20px',
                                    fontSize: '13px',
                                    letterSpacing: '1.5px',
                                    textTransform: 'uppercase',
                                    display: 'inline-block',
                                    marginBottom: '16px'
                                }}
                            >
                                Book a Professional
                            </span>
                            <h2 style={{ color: '#ffffff', fontSize: '36px', fontWeight: '700', marginBottom: '14px' }}>
                                Schedule Your Service
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: '1.8' }}>
                                Fill in the form below and our team will get back to you within 24 hours to confirm your appointment.
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div
                                className="quote-form__wrapper"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '20px',
                                    padding: '48px 40px'
                                }}
                            >
                                {isSubmitted ? (
                                    <div
                                        className="text-center py-5"
                                        style={{
                                            color: '#fff',
                                            animation: 'fadeIn 0.5s ease'
                                        }}
                                    >
                                        <div style={{
                                            width: '80px', height: '80px',
                                            background: 'linear-gradient(135deg, #e8b86d, #f5d08a)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 24px'
                                        }}>
                                            <i className="fa-solid fa-circle-check" style={{ fontSize: '36px', color: '#1a1a2e' }}></i>
                                        </div>
                                        <h3 style={{ color: '#fff', marginBottom: '12px' }}>Booking Request Sent!</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
                                            Thank you for reaching out. Our team will contact you within 24 hours.
                                        </p>
                                        <button
                                            className="build_button mt-30"
                                            onClick={() => setIsSubmitted(false)}
                                            style={{ background: '#e8b86d', color: '#1a1a2e', border: 'none' }}
                                        >
                                            Book Another Service <i className="flaticon-right-up"></i>
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        name="professional-booking-form"
                                        method="POST"
                                        data-netlify="true"
                                        onSubmit={handleSubmit}
                                    >
                                        <input type="hidden" name="form-name" value="professional-booking-form" />

                                        <div className="row g-4">
                                            {/* Name */}
                                            <div className="col-md-6">
                                                <div className="quote-form__field">
                                                    <label style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>
                                                        Full Name <span style={{ color: '#e8b86d' }}>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your full name"
                                                        required
                                                        style={{
                                                            width: '100%',
                                                            background: 'rgba(255,255,255,0.08)',
                                                            border: '1px solid rgba(255,255,255,0.15)',
                                                            borderRadius: '10px',
                                                            padding: '14px 18px',
                                                            color: '#fff',
                                                            fontSize: '15px',
                                                            outline: 'none',
                                                            transition: 'border-color 0.3s'
                                                        }}
                                                        onFocus={e => e.target.style.borderColor = '#e8b86d'}
                                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="col-md-6">
                                                <div className="quote-form__field">
                                                    <label style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>
                                                        Phone Number <span style={{ color: '#e8b86d' }}>*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+91 98765 43210"
                                                        required
                                                        style={{
                                                            width: '100%',
                                                            background: 'rgba(255,255,255,0.08)',
                                                            border: '1px solid rgba(255,255,255,0.15)',
                                                            borderRadius: '10px',
                                                            padding: '14px 18px',
                                                            color: '#fff',
                                                            fontSize: '15px',
                                                            outline: 'none',
                                                            transition: 'border-color 0.3s'
                                                        }}
                                                        onFocus={e => e.target.style.borderColor = '#e8b86d'}
                                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                                                    />
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="col-md-6">
                                                <div className="quote-form__field">
                                                    <label style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="your@email.com"
                                                        style={{
                                                            width: '100%',
                                                            background: 'rgba(255,255,255,0.08)',
                                                            border: '1px solid rgba(255,255,255,0.15)',
                                                            borderRadius: '10px',
                                                            padding: '14px 18px',
                                                            color: '#fff',
                                                            fontSize: '15px',
                                                            outline: 'none',
                                                            transition: 'border-color 0.3s'
                                                        }}
                                                        onFocus={e => e.target.style.borderColor = '#e8b86d'}
                                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                                                    />
                                                </div>
                                            </div>

                                            {/* Service Dropdown */}
                                            <div className="col-md-6">
                                                <div className="quote-form__field">
                                                    <label style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>
                                                        Select Service <span style={{ color: '#e8b86d' }}>*</span>
                                                    </label>
                                                    <select
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                        required
                                                        style={{
                                                            width: '100%',
                                                            background: 'rgba(50,50,50,0.98)',
                                                            border: '1px solid rgba(255,255,255,0.15)',
                                                            borderRadius: '10px',
                                                            padding: '14px 18px',
                                                            color: formData.service ? '#fff' : 'rgba(255,255,255,0.45)',
                                                            fontSize: '15px',
                                                            outline: 'none',
                                                            cursor: 'pointer',
                                                            appearance: 'none',
                                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23e8b86d' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`,
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundPosition: 'calc(100% - 16px) center',
                                                            transition: 'border-color 0.3s'
                                                        }}
                                                        onFocus={e => e.target.style.borderColor = '#e8b86d'}
                                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                                                    >
                                                        <option value="" disabled style={{ color: '#888' }}>Choose a professional service</option>
                                                        <option value="Site Engineer" style={{ color: '#111', background: '#fff' }}>Site Engineer</option>
                                                        <option value="Contractor" style={{ color: '#111', background: '#fff' }}>Contractor</option>
                                                        <option value="Painter" style={{ color: '#111', background: '#fff' }}>Painter</option>
                                                        <option value="Electrician" style={{ color: '#111', background: '#fff' }}>Electrician</option>
                                                        <option value="Plumber" style={{ color: '#111', background: '#fff' }}>Plumber</option>
                                                        <option value="AC Service" style={{ color: '#111', background: '#fff' }}>AC Service</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Address */}
                                            <div className="col-12">
                                                <div className="quote-form__field">
                                                    <label style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>
                                                        Site / Project Address <span style={{ color: '#e8b86d' }}>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={handleChange}
                                                        placeholder="Enter your site or project address"
                                                        required
                                                        style={{
                                                            width: '100%',
                                                            background: 'rgba(255,255,255,0.08)',
                                                            border: '1px solid rgba(255,255,255,0.15)',
                                                            borderRadius: '10px',
                                                            padding: '14px 18px',
                                                            color: '#fff',
                                                            fontSize: '15px',
                                                            outline: 'none',
                                                            transition: 'border-color 0.3s'
                                                        }}
                                                        onFocus={e => e.target.style.borderColor = '#e8b86d'}
                                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                                                    />
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="col-12">
                                                <div className="quote-form__field">
                                                    <label style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>
                                                        Requirement Details
                                                    </label>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows="4"
                                                        placeholder="Describe your project, timeline, or any specific requirements..."
                                                        style={{
                                                            width: '100%',
                                                            background: 'rgba(255,255,255,0.08)',
                                                            border: '1px solid rgba(255,255,255,0.15)',
                                                            borderRadius: '10px',
                                                            padding: '14px 18px',
                                                            color: '#fff',
                                                            fontSize: '15px',
                                                            outline: 'none',
                                                            resize: 'vertical',
                                                            transition: 'border-color 0.3s',
                                                            fontFamily: 'inherit'
                                                        }}
                                                        onFocus={e => e.target.style.borderColor = '#e8b86d'}
                                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit */}
                                            <div className="col-12 text-center mt-10">
                                                <button
                                                    type="submit"
                                                    className="build_button quote-form__btn"
                                                    disabled={isLoading}
                                                    style={{
                                                        background: 'linear-gradient(135deg, #e8b86d, #f5c842)',
                                                        color: '#1a1a2e',
                                                        border: 'none',
                                                        padding: '16px 48px',
                                                        fontSize: '16px',
                                                        fontWeight: '700',
                                                        borderRadius: '50px',
                                                        cursor: isLoading ? 'not-allowed' : 'pointer',
                                                        opacity: isLoading ? 0.7 : 1,
                                                        transition: 'all 0.3s ease',
                                                        letterSpacing: '0.5px',
                                                        boxShadow: '0 8px 30px rgba(232,184,109,0.35)'
                                                    }}
                                                >
                                                    {isLoading ? (
                                                        <>Sending... <i className="fa-solid fa-spinner fa-spin ms-2"></i></>
                                                    ) : (
                                                        <>Book Professional <i className="flaticon-right-up ms-1"></i></>
                                                    )}
                                                </button>

                                                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginTop: '16px' }}>
                                                    <i className="fa-solid fa-lock me-1" style={{ color: '#e8b86d' }}></i>
                                                    Your information is safe and will never be shared with third parties.
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfessionalsSection;
