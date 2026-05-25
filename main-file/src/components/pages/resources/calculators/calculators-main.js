import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const CalculatorsMain = () => {
    const [activeCalc, setActiveCalc] = useState(null);
    const formRef = useRef(null);

    // Flooring Calculator States
    const [roomLength, setRoomLength] = useState('');
    const [roomWidth, setRoomWidth] = useState('');
    const [flooringType, setFlooringType] = useState('ceramic');
    const [tileLength, setTileLength] = useState('12');
    const [tileWidth, setTileWidth] = useState('12');
    const [wastage, setWastage] = useState('10');
    const [materialPrice, setMaterialPrice] = useState('');
    const [flooringResults, setFlooringResults] = useState(null);

    const calculatorsList = [
        {
            id: 'flooring',
            title: 'Flooring Calculator',
            description: 'Calculate tiles, marble, or flooring material requirements',
            icon: 'fa-sharp fa-light fa-grid-horizontal',
        },
        {
            id: 'paint',
            title: 'Paint Calculator',
            description: 'Calculate paint quantity for walls and surfaces',
            icon: 'fa-sharp fa-light fa-paint-roller',
        },
        {
            id: 'electrical',
            title: 'Electrical Load Calculator',
            description: 'Calculate electrical load and wire requirements',
            icon: 'fa-sharp fa-light fa-bolt',
        },
        {
            id: 'rmc',
            title: 'RMC Calculator',
            description: 'Calculate Ready Mix Concrete requirements',
            icon: 'fa-sharp fa-light fa-truck-droplet',
        },
        {
            id: 'steel',
            title: 'Steel Calculator',
            description: 'Calculate TMT bar requirements for construction',
            icon: 'fa-sharp fa-light fa-cubes-stacked',
        },
        {
            id: 'ac',
            title: 'AC Load Calculator',
            description: 'Calculate AC tonnage based on room size',
            icon: 'fa-sharp fa-light fa-snowflake',
        }
    ];

    const selectCalculator = (id) => {
        setActiveCalc(id);
        // Reset states
        setFlooringResults(null);
        setRoomLength('');
        setRoomWidth('');
        setFlooringType('ceramic');
        setTileLength('12');
        setTileWidth('12');
        setWastage('10');
        setMaterialPrice('');
        
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    const calculateFlooring = (e) => {
        e.preventDefault();
        
        const length = parseFloat(roomLength);
        const width = parseFloat(roomWidth);
        const wastePercent = parseFloat(wastage) || 0;
        const price = parseFloat(materialPrice) || 0;
        
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            alert("Please enter valid positive dimensions for length and width.");
            return;
        }
        
        const totalArea = length * width;
        const wasteArea = totalArea * (wastePercent / 100);
        const areaWithWaste = totalArea + wasteArea;
        
        let result = {
            totalArea: totalArea.toFixed(2),
            wastePercent: wastePercent,
            wasteArea: wasteArea.toFixed(2),
            areaWithWaste: areaWithWaste.toFixed(2),
            flooringType: flooringType,
            price: price
        };
        
        if (flooringType === 'ceramic' || flooringType === 'vitrified') {
            const tLength = parseFloat(tileLength);
            const tWidth = parseFloat(tileWidth);
            
            if (isNaN(tLength) || isNaN(tWidth) || tLength <= 0 || tWidth <= 0) {
                alert("Please enter valid tile dimensions.");
                return;
            }
            
            const tileAreaSqIn = tLength * tWidth;
            const tileAreaSqFt = tileAreaSqIn / 144;
            const totalTiles = Math.ceil(areaWithWaste / tileAreaSqFt);
            
            // Assume standard packaging coverage
            let tilesPerBox = 10;
            if (tLength === 24 && tWidth === 24) {
                tilesPerBox = 4;
            } else if (tLength === 12 && tWidth === 12) {
                tilesPerBox = 10;
            } else {
                const targetCoverage = 15; // standard Vitrified/Ceramic tiles coverage per box (sq ft)
                tilesPerBox = Math.max(1, Math.round(targetCoverage / tileAreaSqFt));
            }
            
            const boxCoverage = tilesPerBox * tileAreaSqFt;
            const totalBoxes = Math.ceil(areaWithWaste / boxCoverage);
            
            result = {
                ...result,
                isTile: true,
                tileLength: tLength,
                tileWidth: tWidth,
                totalTiles: totalTiles,
                tilesPerBox: tilesPerBox,
                boxCoverage: boxCoverage.toFixed(2),
                totalBoxes: totalBoxes,
                totalCost: price > 0 ? (totalBoxes * price).toFixed(2) : null
            };
        } else {
            result = {
                ...result,
                isTile: false,
                totalCost: price > 0 ? (areaWithWaste * price).toFixed(2) : null
            };
        }
        
        setFlooringResults(result);
    };

    return (
        <div className="calculators__page section-padding" style={{ background: '#fbfaf7' }}>
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

                <div className="row justify-content-center">
                    {calculatorsList.map((calc) => (
                        <div className="col-lg-4 col-md-6 mb-30" key={calc.id}>
                            <div 
                                className={`choose__three-list-item h-100 ${activeCalc === calc.id ? 'active' : ''}`}
                                onClick={() => selectCalculator(calc.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <i className={calc.icon}></i>
                                <h4>{calc.title}</h4>
                                <p>{calc.description}</p>
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
                                        onClick={() => {
                                            setActiveCalc(null);
                                            setFlooringResults(null);
                                        }}
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
                                {activeCalc === 'flooring' ? (
                                    <form onSubmit={calculateFlooring}>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Room Length (feet)*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder="e.g., 10" 
                                                    value={roomLength}
                                                    onChange={(e) => setRoomLength(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Room Width (feet)*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder="e.g., 12" 
                                                    value={roomWidth}
                                                    onChange={(e) => setRoomWidth(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-20">
                                            <div className="col-12">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Flooring Type*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={flooringType}
                                                    onChange={(e) => setFlooringType(e.target.value)}
                                                >
                                                    <option value="ceramic">Ceramic/Porcelain Tile</option>
                                                    <option value="vitrified">Vitrified Tiles</option>
                                                    <option value="marble">Marble</option>
                                                    <option value="granite">Granite</option>
                                                    <option value="wooden">Wooden Flooring</option>
                                                </select>
                                            </div>
                                        </div>

                                        {(flooringType === 'ceramic' || flooringType === 'vitrified') && (
                                            <div className="row">
                                                <div className="col-md-6 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Tile Length (inches)</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        placeholder="12" 
                                                        value={tileLength}
                                                        onChange={(e) => setTileLength(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Tile Width (inches)</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        placeholder="12" 
                                                        value={tileWidth}
                                                        onChange={(e) => setTileWidth(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div className="row mb-30">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Wastage (%)</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    placeholder="10" 
                                                    value={wastage}
                                                    onChange={(e) => setWastage(e.target.value)}
                                                />
                                                <span style={{ fontSize: '13px', color: '#888', marginTop: '5px', display: 'block' }}>
                                                    Add extra for cuts, waste, and future repairs (usually 5-15%)
                                                </span>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>
                                                    {flooringType === 'ceramic' || flooringType === 'vitrified' ? 'Material Price (₹/box)' : 'Material Price (₹/sq ft)'}
                                                </label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    placeholder="e.g., 1200" 
                                                    value={materialPrice}
                                                    onChange={(e) => setMaterialPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button 
                                                    type="submit" 
                                                    className="build_button w-100 justify-content-center" 
                                                    style={{ padding: '17px 40px', borderRadius: '6px' }}
                                                >
                                                    Calculate Flooring Requirements <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="text-center py-5">
                                        <div className="calc__placeholder-icon mb-20">
                                            <i className="fa-solid fa-gears fa-spin fa-3x text-warning"></i>
                                        </div>
                                        <h4>Calculator Form Structure Active!</h4>
                                        <p className="text-muted mt-10">
                                            We are currently building the specialized input fields and calculation engine for <strong>{calculatorsList.find(c => c.id === activeCalc)?.title}</strong>.
                                        </p>
                                    </div>
                                )}

                                {activeCalc === 'flooring' && flooringResults && (
                                    <div className="mt-40 p-30" style={{ background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #ddd' }}>
                                        <h4 className="mb-25" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-solid fa-square-poll-vertical text-warning"></i> Estimation Results
                                        </h4>
                                        <div className="row">
                                            <div className="col-md-4 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Area</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{flooringResults.totalArea} sq ft</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Wastage ({flooringResults.wastePercent}%)</span>
                                                    <strong style={{ fontSize: '22px', color: '#dc3545' }}>+{flooringResults.wasteArea} sq ft</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Area Required</span>
                                                    <strong style={{ fontSize: '22px', color: '#198754' }}>{flooringResults.areaWithWaste} sq ft</strong>
                                                </div>
                                            </div>
                                        </div>

                                        {flooringResults.isTile ? (
                                            <div className="row mt-10">
                                                <div className="col-md-6 mb-20">
                                                    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                        <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Tiles Required</span>
                                                        <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{flooringResults.totalTiles} pcs</strong>
                                                        <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                            Based on {flooringResults.tileLength}" x {flooringResults.tileWidth}" tile size
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-20">
                                                    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                        <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Boxes Required</span>
                                                        <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{flooringResults.totalBoxes} Boxes</strong>
                                                        <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                            Assuming standard packaging (~{flooringResults.boxCoverage} sq ft per box)
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="row mt-10">
                                                <div className="col-md-12 mb-20">
                                                    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                        <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Material Amount</span>
                                                        <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{flooringResults.areaWithWaste} sq ft</strong>
                                                        <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                            {flooringResults.flooringType.charAt(0).toUpperCase() + flooringResults.flooringType.slice(1)} is calculated directly by square foot area.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {flooringResults.totalCost && (
                                            <div className="row mt-10">
                                                <div className="col-12">
                                                    <div style={{ background: 'var(--color-1)', color: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <div>
                                                            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '5px' }}>Estimated Material Cost</span>
                                                            <strong style={{ fontSize: '28px', color: 'var(--primary-color-1)' }}>₹{parseFloat(flooringResults.totalCost).toLocaleString('en-IN')}</strong>
                                                        </div>
                                                        <div style={{ fontSize: '32px', color: 'rgba(255,255,255,0.1)' }}>
                                                            <i className="fa-solid fa-indian-rupee-sign"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Lead Generation CTA */}
                                        <div className="row mt-30">
                                            <div className="col-12">
                                                <div className="p-30 text-center" style={{ background: '#fff', borderRadius: '8px', border: '1px solid var(--border-color-1)', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                                                    <h5 className="mb-15" style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-heading-color)' }}>
                                                        Are you looking for an expert contractor to handle your construction requirement?
                                                    </h5>
                                                    <p className="mb-20" style={{ fontSize: '15px', color: '#666', maxWidth: '550px', margin: '0 auto 20px auto' }}>
                                                        Get in touch with Magadh Group's team of certified experts for professional planning, execution, and high-quality materials.
                                                    </p>
                                                    <Link to="/request-quote" className="build_button" style={{ display: 'inline-flex', padding: '10px 25px', borderRadius: '50px' }}>
                                                        Get a Free Quote <i className="flaticon-right-up"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculatorsMain;
