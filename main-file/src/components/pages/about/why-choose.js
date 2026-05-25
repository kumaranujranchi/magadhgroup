import React from 'react';
import Count from '../common/count';

const chooseData = [
    {
        icon: "fa-sharp fa-light fa-calendar-lines",
        title: "30+ Years of Industry Experience",
        description: "Three decades of proven expertise in construction materials"
    },
    {
        icon: "fa-sharp fa-light fa-award",
        title: "Authorized Distributor of Top Brands",
        description: "Official partnerships with leading construction material brands"
    },
    {
        icon: "fa-sharp fa-light fa-truck",
        title: "Timely Delivery with Logistics Expertise",
        description: "Strong logistics network ensuring on-time delivery"
    },
    {
        icon: "fa-sharp fa-light fa-money-bill-trend-up",
        title: "Competitive Rates & Transparent Pricing",
        description: "Best market rates with no hidden costs"
    },
    {
        icon: "fa-sharp fa-light fa-layer-group",
        title: "Full Range of Construction Materials",
        description: "Complete solution for all your construction needs"
    },
    {
        icon: "fa-sharp fa-light fa-percent",
        title: "Lowest Price",
        description: "We ensure the most competitive rates in the market without compromising on quality."
    }
];

const WhyChooseUs = () => {
    return (
        <div className="why__choose section-padding" style={{ background: '#fbfaf7' }}>
            <div className="container">
                <div className="row mb-40">
                    <div className="col-xl-12">
                        <div className="team__area-title t-center">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Value Proposition</span>
                            <h2 className="title_split_anim">Why Choose Magadh Group?</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {chooseData.map((card, index) => (
                        <div className="col-lg-4 col-md-6 mt-25 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`} key={index}>
                            <div className="choose__three-list-item h-100" style={{ background: '#ffffff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '30px' }}>
                                <div className="d-flex align-items-center gap-3 mb-20">
                                    <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '50px', height: '50px', minWidth: '50px', background: '#f4f6fc' }}>
                                        <i className={card.icon} style={{ fontSize: '20px', color: '#1a365d', marginBottom: '0' }}></i>
                                    </div>
                                    <h4 className="mb-0" style={{ fontSize: '18px', fontWeight: '600', lineHeight: '26px' }}>{card.title}</h4>
                                </div>
                                <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '22px' }}>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
