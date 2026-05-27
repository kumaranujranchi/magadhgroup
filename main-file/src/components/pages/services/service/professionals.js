import React from 'react';
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
    return (
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
                            <div className="team__area-item professional-card" style={{ 
                                borderRadius: '12px', 
                                overflow: 'hidden', 
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                                background: '#fff',
                                height: '100%'
                            }}>
                                <div style={{ overflow: 'hidden', height: '280px' }}>
                                    <img 
                                        className="img_full" 
                                        src={data.image} 
                                        alt={data.name} 
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover', 
                                            transition: 'transform 0.5s ease' 
                                        }} 
                                    />
                                </div>
                                <div className="team__area-item-content t-center pt-25 pb-25 px-4" style={{ position: 'relative', marginTop: '0', background: '#fff' }}>
                                    <h4 className="mb-2 font-weight-bold" style={{ fontSize: '20px', color: '#111' }}>{data.name}</h4>
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
    );
};

export default ProfessionalsSection;
