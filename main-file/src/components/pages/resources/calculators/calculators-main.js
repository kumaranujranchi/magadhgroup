import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const CalculatorsMain = () => {
    const [activeCalc, setActiveCalc] = useState(null);
    const formRef = useRef(null);

    // 1. Flooring Calculator States
    const [roomLength, setRoomLength] = useState('');
    const [roomWidth, setRoomWidth] = useState('');
    const [flooringType, setFlooringType] = useState('ceramic');
    const [tileLength, setTileLength] = useState('12');
    const [tileWidth, setTileWidth] = useState('12');
    const [wastage, setWastage] = useState('10');
    const [materialPrice, setMaterialPrice] = useState('');
    const [flooringResults, setFlooringResults] = useState(null);

    // 2. Paint Calculator States
    const [paintWallLength, setPaintWallLength] = useState('');
    const [paintWallHeight, setPaintWallHeight] = useState('');
    const [paintWallCount, setPaintWallCount] = useState('4');
    const [paintDoors, setPaintDoors] = useState('1');
    const [paintWindows, setPaintWindows] = useState('1');
    const [paintCoats, setPaintCoats] = useState('2');
    const [paintCoverage, setPaintCoverage] = useState('100');
    const [paintPrice, setPaintPrice] = useState('');
    const [paintResults, setPaintResults] = useState(null);

    // 3. Electrical Load Calculator States
    const [elecLights, setElecLights] = useState('');
    const [elecFans, setElecFans] = useState('');
    const [elecAcs, setElecAcs] = useState('');
    const [elecFridges, setElecFridges] = useState('');
    const [elecTvs, setElecTvs] = useState('');
    const [elecGeysers, setElecGeysers] = useState('');
    const [elecHeavy, setElecHeavy] = useState('');
    const [elecVoltage, setElecVoltage] = useState('220');
    const [elecResults, setElecResults] = useState(null);

    // 4. RMC Calculator States
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

    // 5. Steel Calculator States
    const [steelDia, setSteelDia] = useState('12');
    const [steelUnit, setSteelUnit] = useState('rods');
    const [steelQty, setSteelQty] = useState('');
    const [steelPrice, setSteelPrice] = useState('');
    const [steelResults, setSteelResults] = useState(null);

    // 6. AC Load Calculator States
    const [acLength, setAcLength] = useState('');
    const [acWidth, setAcWidth] = useState('');
    const [acHeight, setAcHeight] = useState('10');
    const [acSun, setAcSun] = useState('medium');
    const [acPeople, setAcPeople] = useState('2');
    const [acAppliances, setAcAppliances] = useState('1');
    const [acResults, setAcResults] = useState(null);

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
        
        // Reset all inputs and results
        setFlooringResults(null);
        setRoomLength('');
        setRoomWidth('');
        setFlooringType('ceramic');
        setTileLength('12');
        setTileWidth('12');
        setWastage('10');
        setMaterialPrice('');

        setPaintResults(null);
        setPaintWallLength('');
        setPaintWallHeight('');
        setPaintWallCount('4');
        setPaintDoors('1');
        setPaintWindows('1');
        setPaintCoats('2');
        setPaintCoverage('100');
        setPaintPrice('');

        setElecResults(null);
        setElecLights('');
        setElecFans('');
        setElecAcs('');
        setElecFridges('');
        setElecTvs('');
        setElecGeysers('');
        setElecHeavy('');
        setElecVoltage('220');

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

        setSteelResults(null);
        setSteelDia('12');
        setSteelUnit('rods');
        setSteelQty('');
        setSteelPrice('');

        setAcResults(null);
        setAcLength('');
        setAcWidth('');
        setAcHeight('10');
        setAcSun('medium');
        setAcPeople('2');
        setAcAppliances('1');
        
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    // 1. Flooring Calculation
    const calculateFlooring = (e) => {
        e.preventDefault();
        const length = parseFloat(roomLength);
        const width = parseFloat(roomWidth);
        const wastePercent = parseFloat(wastage) || 0;
        const price = parseFloat(materialPrice) || 0;
        
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            alert("Please enter valid positive dimensions.");
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
            
            let tilesPerBox = 10;
            if (tLength === 24 && tWidth === 24) {
                tilesPerBox = 4;
            } else if (tLength === 12 && tWidth === 12) {
                tilesPerBox = 10;
            } else {
                const targetCoverage = 15;
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

    // 2. Paint Calculation
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

    // 3. Electrical Load Calculation
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

    // 4. RMC Calculation
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

    // 5. Steel Calculation
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
            totalLengthMeters = qty * 12;
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

    // 6. AC Load Calculation
    const calculateAC = (e) => {
        e.preventDefault();
        const length = parseFloat(acLength);
        const width = parseFloat(acWidth);
        const height = parseFloat(acHeight) || 10;
        const sun = acSun;
        const people = parseFloat(acPeople) || 2;
        const appliances = parseFloat(acAppliances) || 1;

        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            alert("Please enter valid room dimensions.");
            return;
        }

        const area = length * width;
        const volume = area * height;
        let btu = area * 35;

        if (sun === 'shade') {
            btu = btu * 0.9;
        } else if (sun === 'high') {
            btu = btu * 1.2;
        }

        if (people > 2) {
            btu += (people - 2) * 600;
        }
        btu += appliances * 1000;

        const tonnage = btu / 12000;
        let recommendedTonnage = '1.0';

        if (tonnage <= 0.8) {
            recommendedTonnage = '0.8';
        } else if (tonnage <= 1.0) {
            recommendedTonnage = '1.0';
        } else if (tonnage <= 1.2) {
            recommendedTonnage = '1.2';
        } else if (tonnage <= 1.5) {
            recommendedTonnage = '1.5';
        } else if (tonnage <= 2.0) {
            recommendedTonnage = '2.0';
        } else {
            recommendedTonnage = (Math.ceil(tonnage * 2) / 2).toFixed(1) + ' (Multiple units recommended)';
        }

        setAcResults({
            area: area.toFixed(2),
            volume: volume.toFixed(2),
            btu: Math.round(btu),
            tonnage: tonnage.toFixed(2),
            recommendedTonnage: recommendedTonnage
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
                                            setPaintResults(null);
                                            setElecResults(null);
                                            setRmcResults(null);
                                            setSteelResults(null);
                                            setAcResults(null);
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
                                {/* 1. Flooring Calculator Form */}
                                {activeCalc === 'flooring' && (
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
                                                <button type="submit" className="build_button w-100 justify-content-center" style={{ padding: '17px 40px', borderRadius: '6px' }}>
                                                    Calculate Flooring Requirements <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* 2. Paint Calculator Form */}
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

                                {/* 3. Electrical Load Calculator Form */}
                                {activeCalc === 'electrical' && (
                                    <form onSubmit={calculateElectrical}>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Lights / LED Bulbs count (15W)</label>
                                                <input type="number" placeholder="0" value={elecLights} onChange={(e) => setElecLights(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Ceiling Fans count (75W)</label>
                                                <input type="number" placeholder="0" value={elecFans} onChange={(e) => setElecFans(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Air Conditioners count (1.5 Ton, ~1500W)</label>
                                                <input type="number" placeholder="0" value={elecAcs} onChange={(e) => setElecAcs(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Refrigerators count (~400W)</label>
                                                <input type="number" placeholder="0" value={elecFridges} onChange={(e) => setElecFridges(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>TV / Computers count (~150W)</label>
                                                <input type="number" placeholder="0" value={elecTvs} onChange={(e) => setElecTvs(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Water Geysers / Microwave count (~2000W)</label>
                                                <input type="number" placeholder="0" value={elecGeysers} onChange={(e) => setElecGeysers(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-30">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Other heavy loads (Water Pumps, etc. ~1000W)</label>
                                                <input type="number" placeholder="0" value={elecHeavy} onChange={(e) => setElecHeavy(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Voltage Supply (V)</label>
                                                <input type="number" placeholder="220" value={elecVoltage} onChange={(e) => setElecVoltage(e.target.value)} />
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

                                {/* 4. RMC Calculator Form */}
                                {activeCalc === 'rmc' && (
                                    <form onSubmit={calculateRMC}>
                                        <div className="row mb-20">
                                            <div className="col-12">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Structure Type*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={rmcShape}
                                                    onChange={(e) => setRmcShape(e.target.value)}
                                                >
                                                    <option value="slab">Slab / Plinth / Foundation (Rectangular)</option>
                                                    <option value="circular">Circular Columns</option>
                                                    <option value="square">Square / Rectangular Columns</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Slab inputs */}
                                        {rmcShape === 'slab' && (
                                            <div className="row">
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Slab Length (feet)*</label>
                                                    <input type="number" step="any" required placeholder="e.g., 50" value={rmcSlabLength} onChange={(e) => setRmcSlabLength(e.target.value)} />
                                                </div>
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Slab Width (feet)*</label>
                                                    <input type="number" step="any" required placeholder="e.g., 30" value={rmcSlabWidth} onChange={(e) => setRmcSlabWidth(e.target.value)} />
                                                </div>
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Thickness (inches)*</label>
                                                    <input type="number" step="any" required placeholder="e.g., 6" value={rmcSlabThick} onChange={(e) => setRmcSlabThick(e.target.value)} />
                                                </div>
                                            </div>
                                        )}

                                        {/* Circular column inputs */}
                                        {rmcShape === 'circular' && (
                                            <div className="row">
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Diameter (feet)*</label>
                                                    <input type="number" step="any" required placeholder="e.g., 1.5" value={rmcColDia} onChange={(e) => setRmcColDia(e.target.value)} />
                                                </div>
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Height (feet)*</label>
                                                    <input type="number" step="any" required placeholder="e.g., 10" value={rmcColHeight} onChange={(e) => setRmcColHeight(e.target.value)} />
                                                </div>
                                                <div className="col-md-4 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Number of Columns</label>
                                                    <input type="number" placeholder="1" value={rmcColCount} onChange={(e) => setRmcColCount(e.target.value)} />
                                                </div>
                                            </div>
                                        )}

                                        {/* Square column inputs */}
                                        {rmcShape === 'square' && (
                                            <div className="row">
                                                <div className="col-md-3 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Length (feet)*</label>
                                                    <input type="number" step="any" required placeholder="e.g., 1" value={rmcSqColLength} onChange={(e) => setRmcSqColLength(e.target.value)} />
                                                </div>
                                                <div className="col-md-3 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Width (feet)*</label>
                                                    <input type="number" step="any" required placeholder="e.g., 1" value={rmcSqColWidth} onChange={(e) => setRmcSqColWidth(e.target.value)} />
                                                </div>
                                                <div className="col-md-3 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Height (feet)*</label>
                                                    <input type="number" step="any" required placeholder="e.g., 10" value={rmcSqColHeight} onChange={(e) => setRmcSqColHeight(e.target.value)} />
                                                </div>
                                                <div className="col-md-3 mb-20">
                                                    <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Columns Count</label>
                                                    <input type="number" placeholder="1" value={rmcSqColCount} onChange={(e) => setRmcSqColCount(e.target.value)} />
                                                </div>
                                            </div>
                                        )}

                                        <div className="row mb-30">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Wastage (%)</label>
                                                <input type="number" placeholder="10" value={rmcWastage} onChange={(e) => setRmcWastage(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>RMC Rate (₹ / Cubic Meter)</label>
                                                <input type="number" step="any" placeholder="e.g., 4500" value={rmcPrice} onChange={(e) => setRmcPrice(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="build_button w-100 justify-content-center" style={{ padding: '17px 40px', borderRadius: '6px' }}>
                                                    Calculate RMC Requirements <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* 5. Steel Calculator Form */}
                                {activeCalc === 'steel' && (
                                    <form onSubmit={calculateSteel}>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>TMT Bar Diameter*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={steelDia}
                                                    onChange={(e) => setSteelDia(e.target.value)}
                                                >
                                                    <option value="8">8 mm</option>
                                                    <option value="10">10 mm</option>
                                                    <option value="12">12 mm (Standard Column)</option>
                                                    <option value="16">16 mm</option>
                                                    <option value="20">20 mm</option>
                                                    <option value="25">25 mm</option>
                                                    <option value="32">32 mm</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Steel Unit*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={steelUnit}
                                                    onChange={(e) => setSteelUnit(e.target.value)}
                                                >
                                                    <option value="rods">Number of Rods (12m / ~40ft each)</option>
                                                    <option value="meters">Length in Meters</option>
                                                    <option value="feet">Length in Feet</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-30">
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Quantity Required*</label>
                                                <input type="number" required placeholder="e.g., 50" value={steelQty} onChange={(e) => setSteelQty(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Steel Price (₹ / kg)</label>
                                                <input type="number" step="any" placeholder="e.g., 65" value={steelPrice} onChange={(e) => setSteelPrice(e.target.value)} />
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

                                {/* 6. AC Load Calculator Form */}
                                {activeCalc === 'ac' && (
                                    <form onSubmit={calculateAC}>
                                        <div className="row">
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Room Length (feet)*</label>
                                                <input type="number" required placeholder="e.g., 15" value={acLength} onChange={(e) => setAcLength(e.target.value)} />
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Room Width (feet)*</label>
                                                <input type="number" required placeholder="e.g., 12" value={acWidth} onChange={(e) => setAcWidth(e.target.value)} />
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Room Height (feet)</label>
                                                <input type="number" placeholder="10" value={acHeight} onChange={(e) => setAcHeight(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="row mb-30">
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Sun Exposure*</label>
                                                <select 
                                                    className="form-select w-100" 
                                                    style={{ height: '60px', padding: '0 15px', borderRadius: '6px', border: '1px solid var(--border-color-1)', background: 'var(--bg-white)', color: 'var(--body-color)', outline: 'none' }}
                                                    value={acSun}
                                                    onChange={(e) => setAcSun(e.target.value)}
                                                >
                                                    <option value="shade">Shaded / Low Sun</option>
                                                    <option value="medium">Normal / Medium Sun</option>
                                                    <option value="high">Top Floor / Directly Under Sun</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Occupants Count</label>
                                                <input type="number" placeholder="2" value={acPeople} onChange={(e) => setAcPeople(e.target.value)} />
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <label className="form-label" style={{ fontWeight: '600', color: 'var(--text-heading-color)', display: 'block', marginBottom: '8px' }}>Appliances / PCs</label>
                                                <input type="number" placeholder="1" value={acAppliances} onChange={(e) => setAcAppliances(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="build_button w-100 justify-content-center" style={{ padding: '17px 40px', borderRadius: '6px' }}>
                                                    Calculate AC Load & Tonnage <i className="flaticon-right-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* Flooring Calculator Results Output */}
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
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Deductions (Doors/Win)</span>
                                                    <strong style={{ fontSize: '22px', color: '#dc3545' }}>-{paintResults.deductionArea} sq ft</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Net Painting Area</span>
                                                    <strong style={{ fontSize: '22px', color: '#198754' }}>{paintResults.netArea} sq ft</strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-10">
                                            <div className="col-12 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Required Paint Volume ({paintResults.coats} Coats)</span>
                                                    <strong style={{ fontSize: '24px', color: 'var(--text-heading-color)' }}>{paintResults.paintRequired} Liters</strong>
                                                    <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                        Assuming paint coverage of {paintCoverage} sq.ft per Liter per coat.
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
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Connected Load (kVA)</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--primary-color-1)' }}>{elecResults.totalKVA} kVA</strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-10">
                                            <div className="col-md-6 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Recommended MCB Rating</span>
                                                    <strong style={{ fontSize: '22px', color: '#dc3545' }}>{elecResults.mcb} Amps</strong>
                                                    <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                        Calculated at {elecResults.amps} Amps current with safety buffer.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Main Cable Copper Size</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{elecResults.wireSize} sq.mm</strong>
                                                    <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                        Recommended thickness for main service line.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
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
                                            <div className="col-md-6 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Net Concrete Volume</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{rmcResults.netCUM} Cu.M <span style={{ fontSize: '15px', fontWeight: 'normal' }}>({rmcResults.netCFT} CFT)</span></strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Volume with Wastage ({rmcResults.wastagePercent}%)</span>
                                                    <strong style={{ fontSize: '22px', color: '#198754' }}>{rmcResults.totalCUM} Cu.M <span style={{ fontSize: '15px', fontWeight: 'normal' }}>({rmcResults.totalCFT} CFT)</span></strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-10">
                                            <div className="col-12 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Manual Mix Equivalent (M20 Grade 1:1.5:3)</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>~{rmcResults.cementBags} Bags of Cement</strong>
                                                    <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                        Useful if you decide to mix on-site instead of using RMC trucks.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {rmcResults.totalCost && (
                                            <div className="row mt-10">
                                                <div className="col-12">
                                                    <div style={{ background: 'var(--color-1)', color: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <div>
                                                            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '5px' }}>Estimated RMC Cost</span>
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

                                {/* Steel Calculator Results Output */}
                                {activeCalc === 'steel' && steelResults && (
                                    <div className="mt-40 p-30" style={{ background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #ddd' }}>
                                        <h4 className="mb-25" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-solid fa-square-poll-vertical text-warning"></i> Estimation Results
                                        </h4>
                                        <div className="row">
                                            <div className="col-md-4 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Length</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{steelResults.totalLength} meters</strong>
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
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Weight (Metric Tons)</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--primary-color-1)' }}>{steelResults.totalWeightTons} Tons</strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-10">
                                            <div className="col-12 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Unit Weight of {steelDia}mm TMT Bar</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{steelResults.unitWeight} kg / meter</strong>
                                                    <span style={{ fontSize: '13px', color: '#888', display: 'block', marginTop: '5px' }}>
                                                        Calculated using Indian Standard formula: D² / 162.
                                                    </span>
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

                                {/* AC Load Calculator Results Output */}
                                {activeCalc === 'ac' && acResults && (
                                    <div className="mt-40 p-30" style={{ background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #ddd' }}>
                                        <h4 className="mb-25" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-solid fa-square-poll-vertical text-warning"></i> Estimation Results
                                        </h4>
                                        <div className="row">
                                            <div className="col-md-4 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Room Area</span>
                                                    <strong style={{ fontSize: '22px', color: 'var(--text-heading-color)' }}>{acResults.area} sq ft</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Total Heat Load</span>
                                                    <strong style={{ fontSize: '22px', color: '#dc3545' }}>{acResults.btu} BTU / hr</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-20">
                                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                                    <span style={{ fontSize: '14px', color: '#777', display: 'block', marginBottom: '5px' }}>Required Tonnage</span>
                                                    <strong style={{ fontSize: '22px', color: '#198754' }}>{acResults.tonnage} Tons</strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-10">
                                            <div className="col-12 mb-20">
                                                <div style={{ background: 'var(--color-1)', color: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div>
                                                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '5px' }}>Recommended AC Capacity</span>
                                                        <strong style={{ fontSize: '28px', color: 'var(--primary-color-1)' }}>{acResults.recommendedTonnage} Ton AC</strong>
                                                    </div>
                                                    <div style={{ fontSize: '32px', color: 'rgba(255,255,255,0.1)' }}>
                                                        <i className="fa-solid fa-snowflake"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <LeadGenCTA />
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
