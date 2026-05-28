import React, { useState } from 'react';

const RequestQuoteMain = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		company: '',
		website: '',
		services: [],
		message: ''
	});
	const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (serviceName) => {
		setFormData(prev => {
			const services = prev.services.includes(serviceName)
				? prev.services.filter(s => s !== serviceName)
				: [...prev.services, serviceName];
			return { ...prev, services };
		});
	};

	const encode = (data) => {
		const formattedData = {
			...data,
			services: data.services.join(', ')
		};
		return Object.keys(formattedData)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(formattedData[key]))
			.join("&");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus('sending');
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "request-quote-form", ...formData })
		})
		.then(() => {
			setStatus('success');
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				company: '',
				website: '',
				services: [],
				message: ''
			});
		})
		.catch(() => {
			setStatus('error');
		});
	};

	return (
		<>
			<div className="request__quote section-padding-three">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-10">
							<div className="quote-form-card">
								{status === 'success' ? (
									<div className="text-center py-5" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '40px' }}>
										<i className="fa-solid fa-circle-check text-success mb-3" style={{ fontSize: '64px', color: 'var(--primary-color-1)' }}></i>
										<h4 className="text-white font-weight-bold">Thank You!</h4>
										<p className="px-4 mt-10 mb-0" style={{ color: '#b0b8c3' }}>
											Your quote request has been submitted successfully. Our representative will contact you shortly!
										</p>
										<button 
											className="btn btn-outline-light mt-30 px-4 py-2" 
											onClick={() => setStatus(null)}
											style={{ borderRadius: '30px', marginTop: '20px', border: '1px solid #fff', color: '#fff', background: 'transparent' }}
										>
											Send Another Request
										</button>
									</div>
								) : (
									<form onSubmit={handleSubmit}>
										{status === 'error' && (
											<div className="alert alert-danger mb-4" role="alert" style={{ background: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb', borderRadius: '4px', padding: '15px' }}>
												Something went wrong. Please try again.
											</div>
										)}
										<div className="row">
											<div className="col-md-6 mt-30">
												<div className="request__quote-item">
													<label>First Name<span> *</span></label>
													<input 
														type="text" 
														name="firstName" 
														placeholder="First" 
														required 
														value={formData.firstName}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className="col-md-6 mt-30">
												<div className="request__quote-item">
													<label>Last Name</label>
													<input 
														type="text" 
														name="lastName" 
														placeholder="Last" 
														value={formData.lastName}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className="col-md-6 mt-30">
												<div className="request__quote-item">
													<label>Email Address<span> *</span></label>
													<input 
														type="email" 
														name="email" 
														placeholder="Email" 
														required 
														value={formData.email}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className="col-md-6 mt-30">
												<div className="request__quote-item">
													<label>Number<span> *</span></label>
													<input 
														type="text" 
														name="phone" 
														placeholder="+00 123 4567" 
														required 
														value={formData.phone}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className="col-md-6 mt-30">
												<div className="request__quote-item">
													<label>Company/Organization<span> *</span></label>
													<input 
														type="text" 
														name="company" 
														placeholder="e.g., Magadh Group" 
														required 
														value={formData.company}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className="col-md-6 mt-30">
												<div className="request__quote-item">
													<label>Website<span> *</span></label>
													<input 
														type="text" 
														name="website" 
														placeholder="e.g., www.magadhgroup.com" 
														required 
														value={formData.website}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className="col-md-12 mt-40">
												<h5 className="request__quote-services-title">What services can we provide you?<span> *</span></h5>
												<div className="row">
													<div className="col-md-4 mt-10">
														<div className="request__quote-services">
															<label className="custom-checkbox-container">
																Flooring Installation
																<input 
																	type="checkbox" 
																	checked={formData.services.includes('Flooring Installation')}
																	onChange={() => handleCheckboxChange('Flooring Installation')}
																/>
																<span className="checkmark"></span>
															</label>
															<label className="custom-checkbox-container">
																Building Architecture
																<input 
																	type="checkbox" 
																	checked={formData.services.includes('Building Architecture')}
																	onChange={() => handleCheckboxChange('Building Architecture')}
																/>
																<span className="checkmark"></span>
															</label>
														</div>
													</div>
													<div className="col-md-4 mt-10">
														<div className="request__quote-services">
															<label className="custom-checkbox-container">
																Interior Design
																<input 
																	type="checkbox" 
																	checked={formData.services.includes('Interior Design')}
																	onChange={() => handleCheckboxChange('Interior Design')}
																/>
																<span className="checkmark"></span>
															</label>
															<label className="custom-checkbox-container">
																House Renovation
																<input 
																	type="checkbox" 
																	checked={formData.services.includes('House Renovation')}
																	onChange={() => handleCheckboxChange('House Renovation')}
																/>
																<span className="checkmark"></span>
															</label>
														</div>
													</div>
													<div className="col-md-4 mt-10">
														<div className="request__quote-services">
															<label className="custom-checkbox-container">
																Foundation Repair
																<input 
																	type="checkbox" 
																	checked={formData.services.includes('Foundation Repair')}
																	onChange={() => handleCheckboxChange('Foundation Repair')}
																/>
																<span className="checkmark"></span>
															</label>
															<label className="custom-checkbox-container">
																Construction Planning
																<input 
																	type="checkbox" 
																	checked={formData.services.includes('Construction Planning')}
																	onChange={() => handleCheckboxChange('Construction Planning')}
																/>
																<span className="checkmark"></span>
															</label>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 mt-30">
												<div className="request__quote-item">
													<label>Message<span> *</span></label>
													<textarea 
														name="message" 
														placeholder="Write your message here..." 
														required
														value={formData.message}
														onChange={handleChange}
													></textarea>
												</div>
											</div>
											<div className="col-lg-12">
												<button className="build_button mt-30" type="submit" disabled={status === 'sending'}>
													{status === 'sending' ? 'Submitting...' : 'Submit Now'}
													<i className="flaticon-right-up"></i>
												</button>
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

export default RequestQuoteMain;