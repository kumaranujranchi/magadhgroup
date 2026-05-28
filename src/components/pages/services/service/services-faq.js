import React from 'react';

const ServicesFaq = () => {
    return (
        <div className="faq__area section-padding pt-0">
            <div className="container">
                <div className="row mb-55">
                    <div className="col-xl-12">
                        <div className="faq__area-right-title t-center">
                            <span className="subtitle">Common Questions</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>
                <div className="row jc-center">
                    <div className="col-xl-10 faq__area-right">
                        <div className="accordion" id="servicesFaqAccordion">
                            <div className="faq-item">
                                <h5 className="icon" data-bs-toggle="collapse" data-bs-target="#sfCollapseOne">
                                    What types of services does Magadh Group specialize in?
                                </h5>
                                <div id="sfCollapseOne" className="faq-item-body collapse show" data-bs-parent="#servicesFaqAccordion">
                                    <p>Magadh Group specializes in comprehensive construction solutions including flooring installation, building architecture, interior design, foundation repair, house renovations, and construction planning. We manage projects from design to final execution.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#sfCollapseTwo">
                                    How do you estimate the cost of a construction or renovation project?
                                </h5>
                                <div id="sfCollapseTwo" className="faq-item-body collapse" data-bs-parent="#servicesFaqAccordion">
                                    <p>Costs are calculated based on the scope of work, selected raw materials (TMT bars, cement type, etc.), design complexity, and the project timeline. We provide an upfront comprehensive cost estimate during the initial consultation.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#sfCollapseThree">
                                    Do you provide custom architectural and interior designs?
                                </h5>
                                <div id="sfCollapseThree" className="faq-item-body collapse" data-bs-parent="#servicesFaqAccordion">
                                    <p>Yes, all our architecture and interior design projects are fully customized to the client's needs, aesthetic preferences, and budget, ensuring optimized space planning and structures.</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h5 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#sfCollapseFour">
                                    What is the standard process for executing foundation repair?
                                </h5>
                                <div id="sfCollapseFour" className="faq-item-body collapse" data-bs-parent="#servicesFaqAccordion">
                                    <p>We begin with a detailed soil and structure inspection, determine the cause of foundation distress (seepage, settlement, etc.), and then apply reinforcing solutions (such as high-grade cement underpinning or TMT bar support systems) to restore integrity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesFaq;
