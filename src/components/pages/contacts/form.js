import React, { useState } from 'react';

const FormArea = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...formData })
        })
        .then(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        })
        .catch(() => {
            setStatus('error');
        });
    };

    return (
        <>
            {status === 'success' ? (
                <div className="alert alert-success" role="alert" style={{ background: 'var(--primary-color-1)', color: '#000', border: 'none', padding: '20px', borderRadius: '5px' }}>
                    <h5 className="mb-2" style={{ fontWeight: 'bold' }}>Thank You!</h5>
                    Your message has been sent successfully. We will get back to you shortly.
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {status === 'error' && (
                        <div className="alert alert-danger mb-4" role="alert" style={{ background: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' }}>
                            Something went wrong. Please try again.
                        </div>
                    )}
                    <div className="row">
                        <div className="col-md-6 mb-25">
                            <div className="contact__form-area-item">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Full Name" 
                                    required="required" 
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 md-mb-25">
                            <div className="contact__form-area-item">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email Address" 
                                    required="required" 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-12 mb-25">
                            <div className="contact__form-area-item">
                                <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-12 mb-25">
                            <div className="contact__form-area-item">
                                <textarea 
                                    name="message" 
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="contact__form-area-item">
                                <button className="build_button" type="submit" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Submit Message'} <i className="flaticon-right-up"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>          
            )}
        </>
    );
};

export default FormArea;