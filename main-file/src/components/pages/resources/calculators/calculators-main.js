import React, { useState, useRef } from 'react';

const CalculatorsMain = () => {
    const [activeCalc, setActiveCalc] = useState(null);
    const formRef = useRef(null);

    const calculatorsList = [
        {
            id: 'flooring',
            title: 'Flooring Calculator',
            description: 'Calculate tiles, marble, or flooring material requirements',
            icon: 'fa-solid fa-house-chimney-window',
            iconBg: 'rgba(24, 144, 255, 0.1)',
            iconColor: '#1890ff',
        },
        {
            id: 'paint',
            title: 'Paint Calculator',
            description: 'Calculate paint quantity for walls and surfaces',
            icon: 'fa-solid fa-palette',
            iconBg: 'rgba(114, 46, 209, 0.1)',
            iconColor: '#722ed1',
        },
        {
            id: 'electrical',
            title: 'Electrical Load Calculator',
            description: 'Calculate electrical load and wire requirements',
            icon: 'fa-solid fa-bolt',
            iconBg: 'rgba(250, 219, 20, 0.1)',
            iconColor: '#faad14',
        },
        {
            id: 'rmc',
            title: 'RMC Calculator',
            description: 'Calculate Ready Mix Concrete requirements',
            icon: 'fa-solid fa-truck-droplet',
            iconBg: 'rgba(19, 194, 194, 0.1)',
            iconColor: '#13c2c2',
        },
        {
            id: 'steel',
            title: 'Steel Calculator',
            description: 'Calculate TMT bar requirements for construction',
            icon: 'fa-solid fa-cubes-stacked',
            iconBg: 'rgba(235, 47, 150, 0.1)',
            iconColor: '#eb2f96',
        },
        {
            id: 'ac',
            title: 'AC Load Calculator',
            description: 'Calculate AC tonnage based on room size',
            icon: 'fa-solid fa-snowflake',
            iconBg: 'rgba(47, 84, 235, 0.1)',
            iconColor: '#2f54eb',
        }
    ];

    const selectCalculator = (id) => {
        setActiveCalc(id);
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <div className="calculators__page section-padding">
            <div className="container">
                <div className="row justify-content-center mb-50">
                    <div className="col-lg-8 text-center">
                        <div className="section-title-center">
                            <h2 className="mb-20">Construction Calculators</h2>
                            <div className="underline-bar mb-20 mx-auto"></div>
                            <p className="subtitle-text">
                                Calculate material requirements and costs for your construction project with our professional calculators
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {calculatorsList.map((calc) => (
                        <div className="col-lg-4 col-md-6 mb-30" key={calc.id}>
                            <div 
                                className={`calc__card ${activeCalc === calc.id ? 'active' : ''}`}
                                onClick={() => selectCalculator(calc.id)}
                            >
                                <div className="calc__card-body">
                                    <div 
                                        className="calc__card-icon"
                                        style={{ backgroundColor: calc.iconBg, color: calc.iconColor }}
                                    >
                                        <i className={calc.icon}></i>
                                    </div>
                                    <div className="calc__card-info">
                                        <h4>{calc.title}</h4>
                                        <p>{calc.description}</p>
                                    </div>
                                </div>
                                <div className="calc__card-footer">
                                    <span className="calc__btn">
                                        <i className="fa-solid fa-calculator"></i> Calculate Now
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Form Wrapper Section */}
                <div 
                    ref={formRef} 
                    className="row justify-content-center mt-50"
                    style={{ display: activeCalc ? 'flex' : 'none' }}
                >
                    <div className="col-lg-8">
                        <div className="calc__form-wrapper">
                            <div className="calc__form-header">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3>
                                        {calculatorsList.find(c => c.id === activeCalc)?.title}
                                    </h3>
                                    <button 
                                        className="btn-close-calc"
                                        onClick={() => setActiveCalc(null)}
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                                <div className="underline-bar mt-10 mb-15"></div>
                                <p className="text-muted">
                                    Enter project specifications below to get accurate estimations.
                                </p>
                            </div>
                            
                            <div className="calc__form-body mt-30">
                                {/* Placeholders for each calculator to be added later */}
                                <div className="text-center py-5">
                                    <div className="calc__placeholder-icon mb-20">
                                        <i className="fa-solid fa-gears fa-spin fa-3x text-warning"></i>
                                    </div>
                                    <h4>Calculator Form Structure Active!</h4>
                                    <p className="text-muted mt-10">
                                        We are currently building the specialized input fields and calculation engine for <strong>{calculatorsList.find(c => c.id === activeCalc)?.title}</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculatorsMain;
