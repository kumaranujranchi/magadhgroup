import React from 'react';

const RequestQuoteMain = () => {
	return (
		<>
			<div className="request__quote section-padding-three">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-10">
							<div className="quote-form-card">
								<form action="#">
									<div className="row">
										<div className="col-md-6 mt-30">
											<div className="request__quote-item">
												<label>First Name<span> *</span></label>
												<input type="text" name="name" placeholder="First" />
											</div>
										</div>
										<div className="col-md-6 mt-30">
											<div className="request__quote-item">
												<label>Last Name</label>
												<input type="text" placeholder="Last" />
											</div>
										</div>
										<div className="col-md-6 mt-30">
											<div className="request__quote-item">
												<label>Email Address<span> *</span></label>
												<input type="email" placeholder="Email" />
											</div>
										</div>
										<div className="col-md-6 mt-30">
											<div className="request__quote-item">
												<label>Number<span> *</span></label>
												<input type="text" placeholder="+00 123 4567" />
											</div>
										</div>
										<div className="col-md-6 mt-30">
											<div className="request__quote-item">
												<label>Company/Organization<span> *</span></label>
												<input type="text" placeholder="e.g., Magadh Group" />
											</div>
										</div>
										<div className="col-md-6 mt-30">
											<div className="request__quote-item">
												<label>Website<span> *</span></label>
												<input type="text" placeholder="e.g., www.magadhgroup.com" />
											</div>
										</div>
										<div className="col-md-12 mt-40">
											<h5 className="request__quote-services-title">What services can we provide you?<span> *</span></h5>
											<div className="row">
												<div className="col-md-4 mt-10">
													<div className="request__quote-services">
														<label className="custom-checkbox-container">
															Flooring Installation
															<input type="checkbox" />
															<span className="checkmark"></span>
														</label>
														<label className="custom-checkbox-container">
															Building Architecture
															<input type="checkbox" />
															<span className="checkmark"></span>
														</label>
													</div>
												</div>
												<div className="col-md-4 mt-10">
													<div className="request__quote-services">
														<label className="custom-checkbox-container">
															Interior Design
															<input type="checkbox" />
															<span className="checkmark"></span>
														</label>
														<label className="custom-checkbox-container">
															House Renovation
															<input type="checkbox" />
															<span className="checkmark"></span>
														</label>
													</div>
												</div>
												<div className="col-md-4 mt-10">
													<div className="request__quote-services">
														<label className="custom-checkbox-container">
															Foundation Repair
															<input type="checkbox" />
															<span className="checkmark"></span>
														</label>
														<label className="custom-checkbox-container">
															Construction Planning
															<input type="checkbox" />
															<span className="checkmark"></span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-12 mt-30">
											<div className="request__quote-item">
												<label>Message<span> *</span></label>
												<textarea name="message" placeholder="Write your message here..."></textarea>
											</div>
										</div>
										<div className="col-lg-12">
											<button className="build_button mt-30" type="submit">Submit Now<i className="flaticon-right-up"></i></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RequestQuoteMain;