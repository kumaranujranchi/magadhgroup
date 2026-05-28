import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const CalculatorsMain = () => {
    const [activeCalc, setActiveCalc] = useState(null);
    const formRef = useRef(null);

    // 1. Cement Calculator States
    const [cementType, setCementType] = useState('concrete');
    const [cementLength, setCementLength] = useState('');
    const [cementWidth, setCementWidth] = useState('');
    const [cementThick, setCementThick] = useState('6');
    const [cementMixRatio, setCementMixRatio] = useState('M20');
    const [cementPrice, setCementPrice] = useState('');
    const [cementResults, setCementResults] = useState(null);

    // 2. Steel Calculator States
    const [steelDia, setSteelDia] = useState('12');
    const [steelUnit, setSteelUnit] = useState('rods');
    const [steelQty, setSteelQty] = useState('');
    const [steelPrice, setSteelPrice] = useState('');
    const [steelResults, setSteelResults] = useState(null);

    // 3. RMC Calculator States
    const [rmcShape, setRmcShape] = useState('slab');
    const [rmcSlabLength, setRmcSlabLength] = useState('');
    const [rmcSlabWidth, setRmcSlabWidth] = useState('');
    const [rmcSlabThick, setRmcSlabThick] = useState('6');
    const [rmcColDia, setRmcColDia] = useState('');
    const [rmcColHeight, setRmcColHeight] = useState('');
    const [rmcColCount, setRmcColCount] = useState('1');
    const [rmcSqColLength, setRmcSqColLength] = useState('');
    const [rmcSqColWidth, setRmcSqColWidth] = useState('');
    const [rmcSqColHeight, setRmcSqColHeight] = useState('');
    const [rmcSqColCount, setRmcSqColCount] = useState('1');
    const [rmcWastage, setRmcWastage] = useState('10');
    const [rmcPrice, setRmcPrice] = useState('');
    const [rmcResults, setRmcResults] = useState(null);

    // 4. Brick Calculator States
    const [brickWallLength, setBrickWallLength] = useState('');
    const [brickWallHeight, setBrickWallHeight] = useState('');
    const [brickWallThick, setBrickWallThick] = useState('5');
    const [brickSize, setBrickSize] = useState('standard');
    const [brickMix, setBrickMix] = useState('1:6');
    const [brickWastage, setBrickWastage] = useState('10');
    const [brickPrice, setBrickPrice] = useState('');
    const [brickCementPrice, setBrickCementPrice] = useState('');
    const [brickResults, setBrickResults] = useState(null);

    // 5. Electrical Load Calculator States
    const [elecLights, setElecLights] = useState('');
    const [elecFans, setElecFans] = useState('');
    const [elecAcs, setElecAcs] = useState('');
    const [elecFridges, setElecFridges] = useState('');
    const [elecTvs, setElecTvs] = useState('');
    const [elecGeysers, setElecGeysers] = useState('');
    const [elecHeavy, setElecHeavy] = useState('');
    const [elecVoltage, setElecVoltage] = useState('220');
    const [elecResults, setElecResults] = useState(null);

    // 6. Paint Calculator States
    const [paintWallLength, setPaintWallLength] = useState('');
    const [paintWallHeight, setPaintWallHeight] = useState('');
    const [paintWallCount, setPaintWallCount] = useState('4');
    const [paintDoors, setPaintDoors] = useState('1');
    const [paintWindows, setPaintWindows] = useState('1');
    const [paintCoats, setPaintCoats] = useState('2');
    const [paintCoverage, setPaintCoverage] = useState('100');
    const [paintPrice, setPaintPrice] = useState('');
    const [paintResults, setPaintResults] = useState(null);

    const calculatorsList = [
        {
            id: 'cement',
            title: 'Cement Calculator',
            description: 'Estimate cement bags, sand, and aggregate requirements for concrete and plastering',
            icon: 'fa-solid fa-trowel-bricks',
        },
        {
            id: 'steel',
            title: 'Steel Calculator',
            description: 'Calculate TMT bar weight and cost based on length and diameter',
            icon: 'fa-solid fa-cubes-stacked',
        },
        {
            id: 'rmc',
            title: 'RMC Calculator',
            description: 'Calculate Ready Mix Concrete volume and cement requirements',
            icon: 'fa-solid fa-truck-moving',
        },
        {
            id: 'brick',
            title: 'Brick Calculator',
            description: 'Estimate bricks, cement, and sand quantity for wall masonry',
            icon: 'fa-solid fa-cubes',
        },
        {
            id: 'electrical',
            title: 'Electrical Load Calculator',
            description: 'Calculate total load, amperes, MCB rating, and recommended wire size',
            icon: 'fa-solid fa-bolt',
        },
        {
            id: 'paint',
            title: 'Paint Calculator',
            description: 'Calculate paint quantity and costing for walls and ceiling surfaces',
            icon: 'fa-solid fa-paint-roller',
        }
    ];

    const selectCalculator = (id) => {
        setActiveCalc(id);
        
        // Reset all inputs and results
        setCementResults(null);
        setCementLength('');
        setCementWidth('');
        setCementThick('6');
        setCementMixRatio('M20');
        setCementPrice('');

        setSteelResults(null);
        setSteelDia('12');
        setSteelUnit('rods');
        setSteelQty('');
        setSteelPrice('');

        setRmcResults(null);
        setRmcShape('slab');
        setRmcSlabLength('');
        setRmcSlabWidth('');
        setRmcSlabThick('6');
        setRmcColDia('');
        setRmcColHeight('');
        setRmcColCount('1');
        setRmcSqColLength('');
        setRmcSqColWidth('');
        setRmcSqColHeight('');
        setRmcSqColCount('1');
        setRmcWastage('10');
        setRmcPrice('');

        setBrickResults(null);
        setBrickWallLength('');
        setBrickWallHeight('');
        setBrickWallThick('5');
        setBrickSize('standard');
        setBrickMix('1:6');
        setBrickWastage('10');
        setBrickPrice('');
        setBrickCementPrice('');

        setElecResults(null);
        setElecLights('');
        setElecFans('');
        setElecAcs('');
        setElecFridges('');
        setElecTvs('');
        setElecGeysers('');
        setElecHeavy('');
        setElecVoltage('220');

        setPaintResults(null);
        setPaintWallLength('');
        setPaintWallHeight('');
        setPaintWallCount('4');
        setPaintDoors('1');
        setPaintWindows('1');
        setPaintCoats('2');
        setPaintCoverage('100');
        setPaintPrice('');
        
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    // 1. Cement Calculation
    const calculateCement = (e) => {
        e.preventDefault();
        const length = parseFloat(cementLength);
        const width = parseFloat(cementWidth);
        const thick = parseFloat(cementThick);
        const price = parseFloat(cementPrice) || 0;

        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            alert("Please enter valid positive dimensions.");
            return;
        }

        const volumeCFT = length * width * (thick / 12);
        const volumeCUM = volumeCFT * 0.0283168;

        let dryVolume = 0;
        let cementBags = 0;
        let sandCFT = 0;
        let aggregateCFT = 0;

        if (cementType === 'concrete') {
            dryVolume = volumeCFT * 1.54; // Compaction & wastage factor
            let cementPart = 1, sandPart = 1.5, aggregatePart = 3;
            if (cementMixRatio === 'M15') {
                cementPart = 1; sandPart = 2; aggregatePart = 4;
            } else if (cementMixRatio === 'M20') {
                cementPart = 1; sandPart = 1.5; aggregatePart = 3;
            } else if (cementMixRatio === 'M25') {
                cementPart = 1; sandPart = 1; aggregatePart = 2;
            }
            const totalParts = cementPart + sandPart + aggregatePart;
            const cementCFT = dryVolume * (cementPart / totalParts);
            cementBags = Math.ceil(cementCFT / 1.226);
            sandCFT = dryVolume * (sandPart / totalParts);
            aggregateCFT = dryVolume * (aggregatePart / totalParts);
        } else { // plaster or screed
            dryVolume = volumeCFT * 1.33; // Dry shrinkage & waste factor
            let cementPart = 1, sandPart = 6;
            if (cementMixRatio === '1:3') {
                cementPart = 1; sandPart = 3;
            } else if (cementMixRatio === '1:4') {
                cementPart = 1; sandPart = 4;
            } else if (cementMixRatio === '1:6') {
                cementPart = 1; sandPart = 6;
            }
            const totalParts = cementPart + sandPart;
            const cementCFT = dryVolume * (cementPart / totalParts);
            cementBags = Math.ceil(cementCFT / 1.226);
            sandCFT = dryVolume * (sandPart / totalParts);
        }

        setCementResults({
            netCFT: volumeCFT.toFixed(2),
            netCUM: volumeCUM.toFixed(2),
            dryVolume: dryVolume.toFixed(2),
            cementBags: cementBags,
            sandCFT: sandCFT.toFixed(2),
            aggregateCFT: aggregateCFT > 0 ? aggregateCFT.toFixed(2) : null,
            totalCost: price > 0 ? (cementBags * price).toFixed(2) : null,
            cementPrice: price,
            cementType: cementType,
            cementMixRatio: cementMixRatio
        });
    };

    // 2. Steel Calculation
    const calculateSteel = (e) => {
        e.preventDefault();
        const dia = parseFloat(steelDia);
        const qty = parseFloat(steelQty);
        const price = parseFloat(steelPrice) || 0;

        if (isNaN(qty) || qty <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }

        const unitWeight = (dia * dia) / 162;
        let totalLengthMeters = 0;

        if (steelUnit === 'meters') {
            totalLengthMeters = qty;
        } else if (steelUnit === 'feet') {
            totalLengthMeters = qty * 0.3048;
        } else {
            totalLengthMeters = qty * 12; // rods (approx 12 meters per rod)
        }

        const totalWeightKg = totalLengthMeters * unitWeight;
        const totalWeightTons = totalWeightKg / 1000;

        setSteelResults({
            unitWeight: unitWeight.toFixed(3),
            totalLength: totalLengthMeters.toFixed(2),
            totalWeightKg: totalWeightKg.toFixed(2),
            totalWeightTons: totalWeightTons.toFixed(3),
            price: price,
            totalCost: price > 0 ? (totalWeightKg * price).toFixed(2) : null
        });
    };

    // 3. RMC Calculation
    const calculateRMC = (e) => {
        e.preventDefault();
        const wastagePercent = parseFloat(rmcWastage) || 10;
        const price = parseFloat(rmcPrice) || 0;
        let cftVolume = 0;

        if (rmcShape === 'slab') {
            const length = parseFloat(rmcSlabLength);
            const width = parseFloat(rmcSlabWidth);
            const thick = parseFloat(rmcSlabThick);

            if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
                alert("Please enter valid slab dimensions.");
                return;
            }
            cftVolume = length * width * (thick / 12);
        } else if (rmcShape === 'circular') {
            const dia = parseFloat(rmcColDia);
            const height = parseFloat(rmcColHeight);
            const count = parseFloat(rmcColCount) || 1;

            if (isNaN(dia) || isNaN(height) || dia <= 0 || height <= 0) {
                alert("Please enter valid column dimensions.");
                return;
            }
            cftVolume = Math.PI * Math.pow(dia / 2, 2) * height * count;
        } else {
            const length = parseFloat(rmcSqColLength);
            const width = parseFloat(rmcSqColWidth);
            const height = parseFloat(rmcSqColHeight);
            const count = parseFloat(rmcSqColCount) || 1;

            if (isNaN(length) || isNaN(width) || isNaN(height) || length <= 0 || width <= 0 || height <= 0) {
                alert("Please enter valid column dimensions.");
                return;
            }
            cftVolume = length * width * height * count;
        }

        const cumVolume = cftVolume * 0.0283168;
        const wasteVolumeCFT = cftVolume * (wastagePercent / 100);
        const totalCFT = cftVolume + wasteVolumeCFT;
        const totalCUM = cumVolume * (1 + wastagePercent / 100);
        const cementBags = Math.ceil(totalCUM * 8.2);

        setRmcResults({
            netCFT: cftVolume.toFixed(2),
            netCUM: cumVolume.toFixed(2),
            totalCFT: totalCFT.toFixed(2),
            totalCUM: totalCUM.toFixed(2),
            cementBags: cementBags,
            price: price,
            wastagePercent: wastagePercent,
            totalCost: price > 0 ? (totalCUM * price).toFixed(2) : null
        });
    };

    // 4. Brick Calculation
    const calculateBrick = (e) => {
        e.preventDefault();
        const length = parseFloat(brickWallLength);
        const height = parseFloat(brickWallHeight);
        const thick = parseFloat(brickWallThick);
        const wastagePercent = parseFloat(brickWastage) || 10;
        const bPrice = parseFloat(brickPrice) || 0;
        const cPrice = parseFloat(brickCementPrice) || 0;

        if (isNaN(length) || isNaN(height) || length <= 0 || height <= 0) {
            alert("Please enter valid wall dimensions.");
            return;
        }

        const wallVolumeCFT = length * height * (thick / 12);

        let brickLengthInches = 9;
        let brickWidthInches = 4.5;
        let brickHeightInches = 3;

        if (brickSize === 'modular') {
            brickLengthInches = 7.5;
            brickWidthInches = 3.5;
            brickHeightInches = 3.5;
        }

        // Brick volume without mortar (CFT)
        const singleBrickVol = (brickLengthInches * brickWidthInches * brickHeightInches) / 1728;
        // Brick volume with 0.5" mortar (CFT)
        const singleBrickWithMortarVol = ((brickLengthInches + 0.5) * (brickWidthInches + 0.5) * (brickHeightInches + 0.5)) / 1728;

        const baseBricks = wallVolumeCFT / singleBrickWithMortarVol;
        const totalBricks = Math.ceil(baseBricks * (1 + wastagePercent / 100));

        // Mortar volume calculation
        const actualBricksVol = baseBricks * singleBrickVol;
        const wetMortarVol = Math.max(0, wallVolumeCFT - actualBricksVol);
        const dryMortarVol = wetMortarVol * 1.33;

        let cementPart = 1, sandPart = 6;
        if (brickMix === '1:4') {
            cementPart = 1; sandPart = 4;
        } else if (brickMix === '1:6') {
            cementPart = 1; sandPart = 6;
        }

        const totalParts = cementPart + sandPart;
        const cementCFT = dryMortarVol * (cementPart / totalParts);
        const cementBags = Math.ceil(cementCFT / 1.226);
        const sandCFT = dryMortarVol * (sandPart / totalParts);

        const brickCost = totalBricks * bPrice;
        const cementCost = cementBags * cPrice;
        const totalCost = (brickCost > 0 || cementCost > 0) ? (brickCost + cementCost).toFixed(2) : null;

        setBrickResults({
            wallVolume: wallVolumeCFT.toFixed(2),
            totalBricks: totalBricks,
            cementBags: cementBags,
            sandCFT: sandCFT.toFixed(2),
            brickCost: brickCost > 0 ? brickCost.toFixed(2) : null,
            cementCost: cementCost > 0 ? cementCost.toFixed(2) : null,
            totalCost: totalCost,
            brickPrice: bPrice,
            cementPrice: cPrice
        });
    };

    // 5. Electrical Load Calculation
    const calculateElectrical = (e) => {
        e.preventDefault();
        const lights = parseFloat(elecLights) || 0;
        const fans = parseFloat(elecFans) || 0;
        const acs = parseFloat(elecAcs) || 0;
        const fridge = parseFloat(elecFridges) || 0;
        const tv = parseFloat(elecTvs) || 0;
        const geyser = parseFloat(elecGeysers) || 0;
        const heavy = parseFloat(elecHeavy) || 0;
        const volt = parseFloat(elecVoltage) || 220;

        const totalWatts = (lights * 15) + (fans * 75) + (acs * 1500) + (fridge * 400) + (tv * 150) + (geyser * 2000) + (heavy * 1000);
        const totalKW = totalWatts / 1000;
        const totalKVA = totalKW / 0.8;
        const amps = totalWatts / volt;
        const mcb = Math.ceil(amps * 1.25);

        let wireSize = '2.5';
        if (totalKW <= 2) {
            wireSize = '2.5';
        } else if (totalKW <= 5) {
            wireSize = '4.0';
        } else if (totalKW <= 10) {
            wireSize = '6.0';
        } else {
            wireSize = '10.0';
        }

        setElecResults({
            totalWatts: totalWatts,
            totalKW: totalKW.toFixed(2),
            totalKVA: totalKVA.toFixed(2),
            amps: amps.toFixed(1),
            mcb: mcb,
            wireSize: wireSize
        });
    };

    // 6. Paint Calculation
    const calculatePaint = (e) => {
        e.preventDefault();
        const length = parseFloat(paintWallLength);
        const height = parseFloat(paintWallHeight);
        const count = parseFloat(paintWallCount) || 4;
        const doors = parseFloat(paintDoors) || 0;
        const windows = parseFloat(paintWindows) || 0;
        const coats = parseFloat(paintCoats) || 2;
        const coverage = parseFloat(paintCoverage) || 100;
        const price = parseFloat(paintPrice) || 0;

        if (isNaN(length) || isNaN(height) || length <= 0 || height <= 0) {
            alert("Please enter valid wall dimensions.");
            return;
        }

        const totalArea = length * height * count;
        const deductionArea = (doors * 20) + (windows * 15);
        const netArea = Math.max(0, totalArea - deductionArea);
        const totalCoatsArea = netArea * coats;
        const paintRequired = Math.ceil(totalCoatsArea / coverage);

        setPaintResults({
            totalArea: totalArea.toFixed(2),
            deductionArea: deductionArea.toFixed(2),
            netArea: netArea.toFixed(2),
            coats: coats,
            paintRequired: paintRequired,
            totalCost: price > 0 ? (paintRequired * price).toFixed(2) : null
        });
    };

    // Reusable Lead Generation Block
    const LeadGenCTA = () => (
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
    );

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
                    {calculatorsList.map((calc) => {
                        const isActive = activeCalc === calc.id;
                        return (
                            <div className="col-lg-4 col-md-6 mb-30" key={calc.id}>
                                <div 
                                    className={`product__card ${isActive ? 'active' : ''}`}
                                    onClick={() => selectCalculator(calc.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="product__card-icon">
                                        <i className={calc.icon}></i>
                                    </div>
                                    
                                    <h4 className="product__card-title" style={{ marginTop: '0px' }}>
                                        {calc.title}
                                    </h4>
                                    
                                    <div className="product__card-subtitle">
                                        Estimate Requirements
                                    </div>
                                    
                                    <p className="product__card-description">
                                        {calc.description}
                                    </p>
                                    
                                    <div className="product__card-footer">
                                        <span className="product__card-link">
                                            {isActive ? 'Active Calculator' : 'Calculate Now'} <i className="fa-regular fa-arrow-right-long"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
                                            setCementResults(null);
                                            setSteelResults(null);
                                            setRmcResults(null);
                                            setBrickResults(null);
                                            setElecResults(null);
                                            setPaintResults(null);
                                        }}
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                                <div className="underline-bar mt-10 mb-15"></div>
                                <p className="text-muted">
                                    Enter specifications below to get accurate estimations.
                                </p>
                            </div>
                            
                            <div className="calc__form-body mt-30">
                                {/* 1. Cement Calculator Form */}
                                {activeCalc === 'cement' && (
                                    <form onSubmit={calculateCement}>
                                        <div className="row mb-20">
                                            <div className="col-12">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Type of Work*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={cementType}
                                                    onChange={(e) => {
                                                        setCementType(e.target.value);
                                                        setCementMixRatio(e.target.value === 'concrete' ? 'M20' : '1:6');
                                                    }}
                                                >
                                                    <option value="concrete">Concrete Casting (Slabs, Beams, Columns)</option>
                                                    <option value="plaster">Plastering & Brick Masonry Mortar</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Length / Area Length (feet)*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder="e.g., 20" 
                                                    value={cementLength}
                                                    onChange={(e) => setCementLength(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Width / Area Width (feet)*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder="e.g., 15" 
                                                    value={cementWidth}
                                                    onChange={(e) => setCementWidth(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Thickness (inches)*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder={cementType === 'concrete' ? 'e.g., 6' : 'e.g., 0.5'} 
                                                    value={cementThick}
                                                    onChange={(e) => setCementThick(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Mix Ratio*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={cementMixRatio}
                                                    onChange={(e) => setCementMixRatio(e.target.value)}
                                                >
                                                    {cementType === 'concrete' ? (
                                                        <>
                                                            <option value="M15">M15 (1 : 2 : 4) - General Works</option>
                                                            <option value="M20">M20 (1 : 1.5 : 3) - Slabs & Beams</option>
                                                            <option value="M25">M25 (1 : 1 : 2) - Columns & Foundations</option>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <option value="1:3">1:3 - Rich Mortar (Ceiling plaster)</option>
                                                            <option value="1:4">1:4 - Standard Plaster (Inner Walls)</option>
                                                            <option value="1:6">1:6 - Standard Brickwork Mortar</option>
                                                        </>
                                                    )}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-30">
                                            <div className="col-md-12 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Cement Price (₹ / Bag)</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    placeholder="e.g., 420" 
                                                    value={cementPrice}
                                                    onChange={(e) => setCementPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="build_button w-100 justify-content-center" style={{ padding: '17px 40px', borderRadius: '6px' }}>
                                                    Calculate Cement Requirements <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* 2. Steel Calculator Form */}
                                {activeCalc === 'steel' && (
                                    <form onSubmit={calculateSteel}>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Bar Diameter (mm)*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={steelDia}
                                                    onChange={(e) => setSteelDia(e.target.value)}
                                                >
                                                    <option value="8">8 mm</option>
                                                    <option value="10">10 mm</option>
                                                    <option value="12">12 mm</option>
                                                    <option value="16">16 mm</option>
                                                    <option value="20">20 mm</option>
                                                    <option value="25">25 mm</option>
                                                    <option value="32">32 mm</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Quantity Type*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={steelUnit}
                                                    onChange={(e) => setSteelUnit(e.target.value)}
                                                >
                                                    <option value="rods">Rods (approx. 12m each)</option>
                                                    <option value="meters">Meters</option>
                                                    <option value="feet">Feet</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-30">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Total Quantity*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder="e.g., 50" 
                                                    value={steelQty}
                                                    onChange={(e) => setSteelQty(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Steel Price (₹ / kg)</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    placeholder="e.g., 65" 
                                                    value={steelPrice}
                                                    onChange={(e) => setSteelPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="build_button w-100 justify-content-center" style={{ padding: '17px 40px', borderRadius: '6px' }}>
                                                    Calculate Steel Weight <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* 3. RMC Calculator Form */}
                                {activeCalc === 'rmc' && (
                                    <form onSubmit={calculateRMC}>
                                        <div className="row mb-20">
                                            <div className="col-12">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Structure Shape*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={rmcShape}
                                                    onChange={(e) => setRmcShape(e.target.value)}
                                                >
                                                    <option value="slab">Slab (Rectangular Casting)</option>
                                                    <option value="circular">Circular Columns</option>
                                                    <option value="square">Square/Rectangular Columns or Beams</option>
                                                </select>
                                            </div>
                                        </div>

                                        {rmcShape === 'slab' && (
                                            <div className="row">
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Slab Length (feet)*</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        required
                                                        placeholder="e.g., 50" 
                                                        value={rmcSlabLength}
                                                        onChange={(e) => setRmcSlabLength(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Slab Width (feet)*</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        required
                                                        placeholder="e.g., 30" 
                                                        value={rmcSlabWidth}
                                                        onChange={(e) => setRmcSlabWidth(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Slab Thickness (inches)</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        placeholder="6" 
                                                        value={rmcSlabThick}
                                                        onChange={(e) => setRmcSlabThick(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {rmcShape === 'circular' && (
                                            <div className="row">
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Column Diameter (feet)*</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        required
                                                        placeholder="e.g., 1.5" 
                                                        value={rmcColDia}
                                                        onChange={(e) => setRmcColDia(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Column Height (feet)*</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        required
                                                        placeholder="e.g., 10" 
                                                        value={rmcColHeight}
                                                        onChange={(e) => setRmcColHeight(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Number of Columns</label>
                                                    <input 
                                                        type="number" 
                                                        placeholder="1" 
                                                        value={rmcColCount}
                                                        onChange={(e) => setRmcColCount(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {rmcShape === 'square' && (
                                            <div className="row">
                                                <div className="col-md-3 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Length (feet)*</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        required
                                                        placeholder="e.g., 1.5" 
                                                        value={rmcSqColLength}
                                                        onChange={(e) => setRmcSqColLength(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Width (feet)*</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        required
                                                        placeholder="e.g., 1" 
                                                        value={rmcSqColWidth}
                                                        onChange={(e) => setRmcSqColWidth(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Height / Span (feet)*</label>
                                                    <input 
                                                        type="number" 
                                                        step="any"
                                                        required
                                                        placeholder="e.g., 12" 
                                                        value={rmcSqColHeight}
                                                        onChange={(e) => setRmcSqColHeight(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Quantity</label>
                                                    <input 
                                                        type="number" 
                                                        placeholder="1" 
                                                        value={rmcSqColCount}
                                                        onChange={(e) => setRmcSqColCount(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div className="row mb-30">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Wastage (%)</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="10" 
                                                    value={rmcWastage}
                                                    onChange={(e) => setRmcWastage(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Concrete Price (₹ / Cubic Meter)</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    placeholder="e.g., 4500" 
                                                    value={rmcPrice}
                                                    onChange={(e) => setRmcPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="build_button w-100 justify-content-center" style={{ padding: '17px 40px', borderRadius: '6px' }}>
                                                    Calculate Concrete volume & bags <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* 4. Brick Calculator Form */}
                                {activeCalc === 'brick' && (
                                    <form onSubmit={calculateBrick}>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Wall Length (feet)*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder="e.g., 50" 
                                                    value={brickWallLength}
                                                    onChange={(e) => setBrickWallLength(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Wall Height (feet)*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder="e.g., 10" 
                                                    value={brickWallHeight}
                                                    onChange={(e) => setBrickWallHeight(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Wall Thickness (inches)*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={brickWallThick}
                                                    onChange={(e) => setBrickWallThick(e.target.value)}
                                                >
                                                    <option value="5">5 Inch Wall (Single brick thickness)</option>
                                                    <option value="10">10 Inch Wall (Double brick thickness)</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Brick Type / Size*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={brickSize}
                                                    onChange={(e) => setBrickSize(e.target.value)}
                                                >
                                                    <option value="standard">Standard Red Clay Brick (9" x 4.5" x 3")</option>
                                                    <option value="modular">Modular / Fly-Ash Brick (7.5" x 3.5" x 3.5")</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Mortar Mix Ratio*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={brickMix}
                                                    onChange={(e) => setBrickMix(e.target.value)}
                                                >
                                                    <option value="1:4">1:4 Mix (Strong walls)</option>
                                                    <option value="1:6">1:6 Mix (Standard walls)</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Wastage (%)</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="10" 
                                                    value={brickWastage}
                                                    onChange={(e) => setBrickWastage(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-30">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Brick Price (₹ / Piece)</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    placeholder="e.g., 9" 
                                                    value={brickPrice}
                                                    onChange={(e) => setBrickPrice(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Cement Price (₹ / Bag)</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    placeholder="e.g., 420" 
                                                    value={brickCementPrice}
                                                    onChange={(e) => setBrickCementPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="build_button w-100 justify-content-center" style={{ padding: '17px 40px', borderRadius: '6px' }}>
                                                    Calculate Brick Requirements <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* 5. Electrical Load Calculator Form */}
                                {activeCalc === 'electrical' && (
                                    <form onSubmit={calculateElectrical}>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Lights / LED Bulbs count (15W)</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="e.g., 10" 
                                                    value={elecLights}
                                                    onChange={(e) => setElecLights(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Fans count (75W)</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="e.g., 4" 
                                                    value={elecFans}
                                                    onChange={(e) => setElecFans(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Air Conditioners count (1.5 Ton / 1500W)</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="e.g., 2" 
                                                    value={elecAcs}
                                                    onChange={(e) => setElecAcs(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Refrigerators count (400W)</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="e.g., 1" 
                                                    value={elecFridges}
                                                    onChange={(e) => setElecFridges(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Televisions count (150W)</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="e.g., 2" 
                                                    value={elecTvs}
                                                    onChange={(e) => setElecTvs(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Geysers / Water Heaters count (2000W)</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="e.g., 1" 
                                                    value={elecGeysers}
                                                    onChange={(e) => setElecGeysers(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-30">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Other Heavy Load count (Washing machine, pump - 1000W)</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="e.g., 1" 
                                                    value={elecHeavy}
                                                    onChange={(e) => setElecHeavy(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Voltage (Volts)</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={elecVoltage}
                                                    onChange={(e) => setElecVoltage(e.target.value)}
                                                >
                                                    <option value="220">220V (Single Phase - Standard Residential)</option>
                                                    <option value="415">415V (Three Phase - Commercial/Industrial)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="build_button w-100 justify-content-center" style={{ padding: '17px 40px', borderRadius: '6px' }}>
                                                    Calculate Electrical Load <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* 6. Paint Calculator Form */}
                                {activeCalc === 'paint' && (
                                    <form onSubmit={calculatePaint}>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Wall Length (feet)*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder="e.g., 15" 
                                                    value={paintWallLength}
                                                    onChange={(e) => setPaintWallLength(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Wall Height (feet)*</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    required
                                                    placeholder="e.g., 10" 
                                                    value={paintWallHeight}
                                                    onChange={(e) => setPaintWallHeight(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Number of Walls</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="4" 
                                                    value={paintWallCount}
                                                    onChange={(e) => setPaintWallCount(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Doors Count</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="1" 
                                                    value={paintDoors}
                                                    onChange={(e) => setPaintDoors(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Windows Count</label>
                                                <input 
                                                    type="number" 
                                                    placeholder="1" 
                                                    value={paintWindows}
                                                    onChange={(e) => setPaintWindows(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-30">
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Number of Coats</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={paintCoats}
                                                    onChange={(e) => setPaintCoats(e.target.value)}
                                                >
                                                    <option value="1">1 Coat</option>
                                                    <option value="2">2 Coats (Recommended)</option>
                                                    <option value="3">3 Coats</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Coverage (sq.ft / L)*</label>
                                                <input 
                                                    type="number" 
                                                    required
                                                    placeholder="100" 
                                                    value={paintCoverage}
                                                    onChange={(e) => setPaintCoverage(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Price (₹ / Liter)</label>
                                                <input 
                                                    type="number" 
                                                    step="any"
                                                    placeholder="e.g., 350" 
                                                    value={paintPrice}
                                                    onChange={(e) => setPaintPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="build_button w-100 justify-content-center" style={{ padding: '17px 40px', borderRadius: '6px' }}>
                                                    Calculate Paint Requirements <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>

                            {/* Cement Calculator Results Output */}
                            {activeCalc === 'cement' && cementResults && (
                                <div className="mt-40 p-30" style={{ background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #ddd' }}>
                                    <h4 className="mb-25" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fa-solid fa-square-poll-vertical text-warning"></i> Estimation Results
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Wet Volume</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{cementResults.netCFT} CFT</strong>
                                                <span style={{ fontSize: '12px', color: '#999', display: 'block', marginTop: '2px' }}>({cementResults.netCUM} m³)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Dry Volume</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{cementResults.dryVolume} CFT</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Cement Required</span>
                                                <strong style={{ fontSize: '22px', color: '#198754' }}>{cementResults.cementBags} Bags</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-10">
                                        <div className="col-md-6 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Sand Required</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{cementResults.sandCFT} CFT</strong>
                                            </div>
                                        </div>
                                        {cementResults.aggregateCFT && (
                                            <div className="col-md-6 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Coarse Aggregate</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{cementResults.aggregateCFT} CFT</strong>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {cementResults.totalCost && (
                                        <div className="row mt-10">
                                            <div className="col-12">
                                                <div style={{ background: 'var(--color-1)', color: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div>
                                                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '5px' }}>Estimated Cement Cost</span>
                                                        <strong style={{ fontSize: '28px', color: 'var(--primary-color-1)' }}>₹{parseFloat(cementResults.totalCost).toLocaleString('en-IN')}</strong>
                                                    </div>
                                                    <div style={{ fontSize: '32px', color: 'rgba(255,255,255,0.1)' }}>
                                                        <i className="fa-solid fa-indian-rupee-sign"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <LeadGenCTA />
                                </div>
                            )}

                            {/* Steel Calculator Results Output */}
                            {activeCalc === 'steel' && steelResults && (
                                <div className="mt-40 p-30" style={{ background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #ddd' }}>
                                    <h4 className="mb-25" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fa-solid fa-square-poll-vertical text-warning"></i> Estimation Results
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Unit Weight</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{steelResults.unitWeight} kg/m</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Weight (kg)</span>
                                                <strong style={{ fontSize: '22px', color: '#198754' }}>{steelResults.totalWeightKg} kg</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Weight (Tons)</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{steelResults.totalWeightTons} Tons</strong>
                                            </div>
                                        </div>
                                    </div>

                                    {steelResults.totalCost && (
                                        <div className="row mt-10">
                                            <div className="col-12">
                                                <div style={{ background: 'var(--color-1)', color: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div>
                                                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '5px' }}>Estimated Steel Cost</span>
                                                        <strong style={{ fontSize: '28px', color: 'var(--primary-color-1)' }}>₹{parseFloat(steelResults.totalCost).toLocaleString('en-IN')}</strong>
                                                    </div>
                                                    <div style={{ fontSize: '32px', color: 'rgba(255,255,255,0.1)' }}>
                                                        <i className="fa-solid fa-indian-rupee-sign"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <LeadGenCTA />
                                </div>
                            )}

                            {/* RMC Calculator Results Output */}
                            {activeCalc === 'rmc' && rmcResults && (
                                <div className="mt-40 p-30" style={{ background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #ddd' }}>
                                    <h4 className="mb-25" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fa-solid fa-square-poll-vertical text-warning"></i> Estimation Results
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Net Concrete Volume</span>
                                                <strong style={{ fontSize: '20px', color: 'var(--text-heading-color)' }}>{rmcResults.netCUM} CUM</strong>
                                                <span style={{ fontSize: '12px', color: '#888', display: 'block', marginTop: '5px' }}>{rmcResults.netCFT} CFT</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>With Wastage ({rmcResults.wastagePercent}%)</span>
                                                <strong style={{ fontSize: '20px', color: 'var(--text-heading-color)' }}>{rmcResults.totalCUM} CUM</strong>
                                                <span style={{ fontSize: '12px', color: '#888', display: 'block', marginTop: '5px' }}>{rmcResults.totalCFT} CFT</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Cement Bags (In Concrete)</span>
                                                <strong style={{ fontSize: '20px', color: 'var(--text-heading-color)' }}>~{rmcResults.cementBags} Bags</strong>
                                                <span style={{ fontSize: '12px', color: '#888', display: 'block', marginTop: '5px' }}>Based on M20 standard</span>
                                            </div>
                                        </div>
                                    </div>

                                    {rmcResults.totalCost && (
                                        <div className="row mt-10">
                                            <div className="col-12">
                                                <div style={{ background: 'var(--color-1)', color: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div>
                                                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '5px' }}>Estimated Concrete Cost</span>
                                                        <strong style={{ fontSize: '28px', color: 'var(--primary-color-1)' }}>₹{parseFloat(rmcResults.totalCost).toLocaleString('en-IN')}</strong>
                                                    </div>
                                                    <div style={{ fontSize: '32px', color: 'rgba(255,255,255,0.1)' }}>
                                                        <i className="fa-solid fa-indian-rupee-sign"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <LeadGenCTA />
                                </div>
                            )}

                            {/* Brick Calculator Results Output */}
                            {activeCalc === 'brick' && brickResults && (
                                <div className="mt-40 p-30" style={{ background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #ddd' }}>
                                    <h4 className="mb-25" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fa-solid fa-square-poll-vertical text-warning"></i> Estimation Results
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Wall Volume</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{brickResults.wallVolume} CFT</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Bricks Required</span>
                                                <strong style={{ fontSize: '22px', color: '#198754' }}>{brickResults.totalBricks} Pcs</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Mortar Cement</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>~{brickResults.cementBags} Bags</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-10">
                                        <div className="col-md-12 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Mortar Sand Required</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{brickResults.sandCFT} CFT</strong>
                                            </div>
                                        </div>
                                    </div>

                                    {brickResults.totalCost && (
                                        <div className="row mt-10">
                                            <div className="col-12">
                                                <div style={{ background: 'var(--color-1)', color: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div>
                                                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '5px' }}>Estimated Material Cost (Bricks + Cement)</span>
                                                        <strong style={{ fontSize: '28px', color: 'var(--primary-color-1)' }}>₹{parseFloat(brickResults.totalCost).toLocaleString('en-IN')}</strong>
                                                    </div>
                                                    <div style={{ fontSize: '32px', color: 'rgba(255,255,255,0.1)' }}>
                                                        <i className="fa-solid fa-indian-rupee-sign"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <LeadGenCTA />
                                </div>
                            )}

                            {/* Electrical Calculator Results Output */}
                            {activeCalc === 'electrical' && elecResults && (
                                <div className="mt-40 p-30" style={{ background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #ddd' }}>
                                    <h4 className="mb-25" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fa-solid fa-square-poll-vertical text-warning"></i> Estimation Results
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Load (Watts)</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{elecResults.totalWatts} W</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Load (kW)</span>
                                                <strong style={{ fontSize: '22px', color: '#198754' }}>{elecResults.totalKW} kW</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Apparent Load (kVA)</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{elecResults.totalKVA} kVA</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-10">
                                        <div className="col-md-6 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Calculated Current</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{elecResults.amps} Amps</strong>
                                                <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                    Recommended MCB Rating: <strong>{elecResults.mcb}A</strong>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Recommended Main Cable Size</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{elecResults.wireSize} sq mm</strong>
                                                <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                    Copper multi-strand FR cable recommended.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <LeadGenCTA />
                                </div>
                            )}

                            {/* Paint Calculator Results Output */}
                            {activeCalc === 'paint' && paintResults && (
                                <div className="mt-40 p-30" style={{ background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #ddd' }}>
                                    <h4 className="mb-25" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <i className="fa-solid fa-square-poll-vertical text-warning"></i> Estimation Results
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Wall Area</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{paintResults.totalArea} sq ft</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Deductions (Openings)</span>
                                                <strong style={{ fontSize: '22px', color: '#dc3545' }}>-{paintResults.deductionArea} sq ft</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Net Area ({paintResults.coats} Coats)</span>
                                                <strong style={{ fontSize: '22px', color: '#198754' }}>{paintResults.netArea} sq ft</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-10">
                                        <div className="col-12 mb-20">
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Paint Required</span>
                                                <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{paintResults.paintRequired} Liters</strong>
                                                <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                    Calculated based on standard {paintResults.coats} coats.
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {paintResults.totalCost && (
                                        <div className="row mt-10">
                                            <div className="col-12">
                                                <div style={{ background: 'var(--color-1)', color: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div>
                                                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '5px' }}>Estimated Paint Cost</span>
                                                        <strong style={{ fontSize: '28px', color: 'var(--primary-color-1)' }}>₹{parseFloat(paintResults.totalCost).toLocaleString('en-IN')}</strong>
                                                    </div>
                                                    <div style={{ fontSize: '32px', color: 'rgba(255,255,255,0.1)' }}>
                                                        <i className="fa-solid fa-indian-rupee-sign"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <LeadGenCTA />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculatorsMain;
