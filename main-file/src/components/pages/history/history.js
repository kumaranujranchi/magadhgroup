import React from 'react';
import historyData from '../../data/history-data';

const CompanyHistory = () => {
    return (
        <div className="history__area section-padding" style={{ background: '#fbfaf7' }}>
            <div className="container">
                <div className="row justify-content-center mb-50">
                    <div className="col-lg-8 text-center">
                        <div className="section-title-center">
                            <h2 className="mb-20">Milestones of Excellence</h2>
                            <div className="underline-bar mb-20 mx-auto"></div>
                            <p className="subtitle-text">
                                Three decades of growth, innovation, and trust
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="timeline__container">
                            <div className="timeline__line"></div>
                            
                            {historyData.map((item, id) => {
                                const delay = `${0.2 + id * 0.1}s`;
                                return (
                                    <div className="timeline__item wow fadeInUp" data-wow-delay={delay} key={id}>
                                        <div className="timeline__dot" style={{ backgroundColor: item.color, boxShadow: `0 0 0 3px ${item.color}33` }}></div>
                                        <div className="timeline__card">
                                            <div className="timeline__header">
                                                <div className="timeline__icon-wrapper" style={{ backgroundColor: item.bgColor, color: item.color }}>
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="timeline__year-info">
                                                    <h3 style={{ color: 'var(--text-heading-color)', margin: '0' }}>{item.date}</h3>
                                                    <span style={{ color: item.color, fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.title}</span>
                                                </div>
                                            </div>
                                            <p className="timeline__desc">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyHistory;