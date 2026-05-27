import React from 'react';
import brandLogo1 from '../../assets/img/brand-logo/1.png.webp';
import brandLogo2 from '../../assets/img/brand-logo/2.png.webp';
import brandLogo3 from '../../assets/img/brand-logo/3.png.webp';
import brandLogo4 from '../../assets/img/brand-logo/4.png.webp';
import brandLogo5 from '../../assets/img/brand-logo/5.png.webp';
import brandLogo6 from '../../assets/img/brand-logo/6.png.webp';
import brandLogo7 from '../../assets/img/brand-logo/7.png.webp';
import brandLogo8 from '../../assets/img/brand-logo/8.png.webp';
import brandLogo9 from '../../assets/img/brand-logo/9.png.webp';
import brandLogo10 from '../../assets/img/brand-logo/10.png.webp';
import brandLogo11 from '../../assets/img/brand-logo/11.png.webp';
import brandLogo12 from '../../assets/img/brand-logo/12.png.webp';
import brandLogo13 from '../../assets/img/brand-logo/13.png.webp';

export const brandLogosMap = {
    'TATA TMT': brandLogo1,
    'TATA Structura': brandLogo1,
    'Ultratech': brandLogo2,
    'UltraTech RMC': brandLogo2,
    'ACC Cement': brandLogo3,
    'ACC Concrete': brandLogo3,
    'Ambuja Cement': brandLogo4,
    'Birla Gold': brandLogo5,
    'Dalmia Cement': brandLogo6,
    'Asian Paints': brandLogo7,
    'Berger Paints': brandLogo8,
    'Dulux Paint': brandLogo9,
    'Nerolac Paints': brandLogo10,
    'Havells': brandLogo11,
    'Polycab Wires': brandLogo12,
    'Finolex Cables': brandLogo13,
};

const productsData = [
    {
        id: 'tmt-bars',
        title: 'TMT Bars',
        subtitle: 'Thermo Mechanically Treated Steel',
        icon: <i className="fa-solid fa-cubes-stacked"></i>,
        variantCount: '8 Sizes',
        variantLabel: 'Sizes',
        brands: ['TATA TMT', 'Concast', 'Kamdhenu', 'Shyam Steel', 'SRMB'],
        description: 'High-strength, durable thermo-mechanically treated steel bars crucial for robust concrete reinforcement in modern structures.',
        heroDescription: 'Our range of TMT (Thermo Mechanically Treated) bars are manufactured using state-of-the-art technology to provide high tensile strength, excellent bendability, and superior earthquake resistance. Perfect for multi-story residential, commercial, and industrial construction projects.',
        variants: [
            { 
                name: '8mm', 
                details: 'Ideal for stirrups, binders, and light structural reinforcement in low-load construction.',
                images: [
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: '10mm', 
                details: 'Commonly used for slabs, beams, and residential masonry reinforcement.',
                images: [
                    'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: '12mm', 
                details: 'Used heavily in structural concrete reinforcements for load-bearing beams and pillars.',
                images: [
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: '16mm', 
                details: 'Designed for heavy load-bearing beams, deep foundations, and structural framing.',
                images: [
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: '20mm', 
                details: 'Critical for heavy foundations, industrial structures, and multi-story commercial projects.',
                images: [
                    'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: '25mm', 
                details: 'Used in super heavy-duty structures, bridge pillars, and high-rise structures.',
                images: [
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: '32mm', 
                details: 'Engineered for major civil engineering projects, flyovers, concrete dams, and high-rises.',
                images: [
                    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Fe 500D / Fe 550D / Fe 600', 
                details: 'Available in diverse ductility and yield strength ratings to match specific architectural designs.',
                images: [
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    },
    {
        id: 'cement',
        title: 'Cement',
        subtitle: 'Premium Grade OPC & PPC Cement',
        icon: <i className="fa-solid fa-trowel-bricks"></i>,
        variantCount: '4 Types',
        variantLabel: 'Grades / Types',
        brands: ['Ultratech', 'ACC Cement', 'Ambuja Cement', 'Birla Gold', 'Dalmia Cement'],
        description: 'Superior binding agents offering unmatched compressive strength, faster setting times, and long-term durability.',
        heroDescription: 'We supply premium grades of OPC and PPC cement sourced directly from the industry\'s most reputable brands. Formulated to offer maximum durability, resistance to aggressive chemical environments, and high cohesive strength, ensuring your structure stands strong for generations.',
        variants: [
            { 
                name: 'OPC 43 Grade', 
                details: 'Perfect for standard concrete structures, brick masonry, wall plastering, and general renovation projects.',
                images: [
                    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'OPC 53 Grade', 
                details: 'Designed for high-strength structural concrete, multi-story buildings, flyovers, bridges, and pre-cast concrete elements.',
                images: [
                    'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'PPC (Portland Pozzolana)', 
                details: 'Eco-friendly cement providing high resistance to chemical attacks, lower heat of hydration, and excellent long-term strength. Ideal for marine and mass concrete works.',
                images: [
                    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'White Cement', 
                details: 'Specially engineered for wall styling finishes, decorative architectural features, marble tile grouting, and artistic mortar work.',
                images: [
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    },
    {
        id: 'sand-chips-brick',
        title: 'Sand, Chips & Brick',
        subtitle: 'Premium Aggregates, Sand & Bricks',
        icon: <i className="fa-solid fa-cubes"></i>,
        variantCount: '8 Types',
        variantLabel: 'Materials',
        brands: ['Local Premium', 'Koel River Sand', 'Sone River Sand', 'Ganga River Sand', 'Pakur Stone Chips', 'Koderma Aggregates', 'Fly Ash Bricks', 'AAC Blocks'],
        description: 'Premium quality Sone/Koel/Ganga river sand, Pakur/Koderma stone chips, fly-ash bricks, and AAC blocks.',
        heroDescription: 'We supply high-grade construction aggregates, including premium river sand (Sone/Koel/Ganga), durable Pakur and Koderma stone chips, high-compressive strength bricks (Red clay & Fly ash), and modern lightweight AAC blocks. These materials are thoroughly tested for moisture content, purity, and durability to ensure the solid foundation of your structures.',
        variants: [
            { 
                name: 'Sone River Sand', 
                details: 'High-purity, coarse sand ideal for structural concrete and plastering work.',
                images: [
                    'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Pakur Stone Chips (20mm)', 
                details: 'High-strength black stone aggregates, perfect for heavy load-bearing concrete casting.',
                images: [
                    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Pakur Stone Chips (10mm)', 
                details: 'Premium quality aggregates for fine concrete work, flooring, and lintels.',
                images: [
                    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Fly Ash Bricks', 
                details: 'Eco-friendly bricks with uniform shape, high strength, and low water absorption.',
                images: [
                    'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Red Clay Bricks (Class I)', 
                details: 'Traditionally baked high-density clay bricks offering excellent thermal insulation and structural strength.',
                images: [
                    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Koderma Aggregates', 
                details: 'Premium blue-metal stone aggregates sourced from Koderma, renowned for high load-bearing capacity and strength in concrete structures.',
                images: [
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Ganga River Sand', 
                details: 'Fine-grained river sand from the Ganga river basin, highly preferred for smooth wall plastering and finishing work.',
                images: [
                    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'AAC Blocks', 
                details: 'Autoclaved Aerated Concrete blocks providing lightweight masonry, superior thermal insulation, soundproofing, and fire resistance.',
                images: [
                    'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    },
    {
        id: 'rmc',
        title: 'RMC',
        subtitle: 'Precision-Mixed Ready Mix Concrete',
        icon: <i className="fa-solid fa-truck-moving"></i>,
        variantCount: '4 Grades',
        variantLabel: 'Grades',
        brands: ['UltraTech RMC', 'ACC Concrete', 'Prism RMC', 'Magadh Concrete'],
        description: 'Custom-engineered, high-performance concrete mixtures delivered fresh to your construction site for superior structural stability.',
        heroDescription: 'Ready Mix Concrete (RMC) represents a customized concrete mix manufactured in highly controlled batching plants and delivered in transit mixers directly to the site. This ensures perfect concrete consistency, fast construction times, reduced waste, and superior quality control for demanding applications.',
        variants: [
            { 
                name: 'M20 Grade', 
                details: 'Perfect for residential driveways, pathways, low-load concrete slabs, and standard domestic brickwork support.',
                images: [
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'M25 Grade', 
                details: 'Standard structural concrete grade widely utilized for columns, beams, foundations, and residential slabs.',
                images: [
                    'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'M30 Grade', 
                details: 'High-strength structural concrete engineered for commercial complexes, high-load floors, and industrial yards.',
                images: [
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'M40 & Higher Grades', 
                details: 'Super-strength concrete formulations designed for heavy civil projects, bridge decks, concrete highways, and high-rise structures.',
                images: [
                    'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    },
    {
        id: 'doors-windows',
        title: 'Doors & Windows',
        subtitle: 'UPVC & Aluminium Fenestration Systems',
        icon: <i className="fa-solid fa-door-open"></i>,
        variantCount: '4 Materials',
        variantLabel: 'Materials',
        brands: ['TATA Structura', 'Fenesta Windows', 'AluK Systems', 'CenturyPly Doors'],
        description: 'Aesthetic, soundproof, and weather-resistant UPVC and premium aluminium fenestration systems.',
        heroDescription: 'Modernize your spaces with premium doors and windows designed for high durability, superior thermal insulation, soundproofing, and advanced security. Available in sleek UPVC and architectural-grade aluminium finishes to blend with contemporary aesthetics.',
        variants: [
            { 
                name: 'UPVC Sliding Windows', 
                details: 'Multi-chambered welded profiles with high-grade double glazing, providing exceptional sound insulation, dust protection, and thermal efficiency.',
                images: [
                    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Aluminium Casement Doors', 
                details: 'Premium architectural-grade, powder-coated structural aluminium frames fitted with multi-point high-security locking systems.',
                images: [
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Solid Flush Wooden Doors', 
                details: 'High-density seasoned solid wood cores with boiling waterproof protection, perfect for designer main entries and heavy bedroom doors.',
                images: [
                    'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Bug Mesh & Security Grills', 
                details: 'Integrated robust fly-mesh sliders and heavy-duty steel safety grills for high ventilation without compromising security.',
                images: [
                    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    },
    {
        id: 'electrical-items',
        title: 'Electrical',
        subtitle: 'Wires, Switches & Distribution Boards',
        icon: <i className="fa-solid fa-bolt"></i>,
        variantCount: '4 Categories',
        variantLabel: 'Categories',
        brands: ['Havells', 'Polycab Wires', 'Finolex Cables', 'Legrand Switches', 'Anchor'],
        description: 'Safe, durable FR cables, elegant modular switches, and reliable distribution systems for all construction needs.',
        heroDescription: 'Ensure safety and performance in your electrical networks. We supply certified Flame Retardant (FR) copper wires, state-of-the-art modular switches, sleek glass frames, heavy-duty MCBs, and comprehensive distribution boards engineered to withstand high voltage swings and maximize electricity conservation.',
        variants: [
            { 
                name: 'FR & FRLSH Copper Wires', 
                details: 'Flame Retardant and Low Smoke Halogen-free copper wires offering high electrical conductivity and maximum fire safety in conduits.',
                images: [
                    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Modular Switches & Sockets', 
                details: 'Designer modular switches, touch panels, and child-safe shutter sockets designed for smooth operations and premium interior aesthetics.',
                images: [
                    'https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Distribution Boards & MCBs', 
                details: 'Heavy-duty Miniature Circuit Breakers (MCBs), Residual Current Circuit Breakers (RCCBs), and modular distribution boards for overload protection.',
                images: [
                    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Conduits & Concealed Boxes', 
                details: 'High-impact heavy-duty PVC conduit pipes, bend joiners, and metal concealed boxes for safe, neat, long-lasting concealed wiring.',
                images: [
                    'https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    },
    {
        id: 'paints',
        title: 'Paint',
        subtitle: 'Interior & Exterior Wall Finishes',
        icon: <i className="fa-solid fa-paint-roller"></i>,
        variantCount: '4 Categories',
        variantLabel: 'Categories',
        brands: ['Asian Paints', 'Berger Paints', 'Dulux Paint', 'Nerolac Paints'],
        description: 'Stunning aesthetics, weather protection, and anti-fungal properties for interior and exterior walls.',
        heroDescription: 'Elevate the beauty of your residential or commercial projects with premium interior and exterior paints. Offering a rich palette of colors, superior washable finishes, dust-resistant tech, and environment-friendly low VOC formulations that keep your walls looking pristine for years.',
        variants: [
            { 
                name: 'Interior Emulsions', 
                details: 'Premium matte, satin, and luxury gloss finishes providing superior washability, stain-resistance, and long-lasting color richness.',
                images: [
                    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Exterior Emulsions', 
                details: 'All-weather proof protection shields walls from rain, extreme heat, and UV rays, with anti-algal and high elasticity characteristics.',
                images: [
                    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Wall Primers & Putty', 
                details: 'High-adhesion acrylic wall primers and waterproof acrylic putty to create perfectly smooth, uniform, moisture-resistant surfaces.',
                images: [
                    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Wood & Metal Coatings', 
                details: 'Premium high-gloss and matte enamel paints and protective polyurethanes designed for wooden trims, doors, and metal railings.',
                images: [
                    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    },
    {
        id: 'lifts',
        title: 'Lift & Elevator',
        subtitle: 'Passenger & Goods Elevator Solutions',
        icon: <i className="fa-solid fa-elevator"></i>,
        variantCount: '4 Types',
        variantLabel: 'Types',
        brands: ['Otis Elevators', 'KONE Lifts', 'Schindler Lifts', 'Mitsubishi Electric'],
        description: 'Advanced, smooth-riding elevators utilizing smart gearless technology for commercial and high-rise structures.',
        heroDescription: 'We deliver state-of-the-art vertical transportation systems engineered for safety, speed, energy-efficiency, and smooth riding comfort. Incorporating smart gearless PM motors, regenerative drives, and modern cabin interiors for residential complexes, malls, and factories.',
        variants: [
            { 
                name: 'Passenger Elevators', 
                details: 'Modern gearless traction lifts offering ultra-smooth acceleration, silent operation, and sleek digital cabin designs for residential and office high-rises.',
                images: [
                    'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Home & Villa Lifts', 
                details: 'Compact, low-overhead, pitless single-phase domestic elevators customized specifically for personal bungalows and low-rise villas.',
                images: [
                    'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Goods & Service Elevators', 
                details: 'Heavy-duty vertical transportation cabins engineered to safely move freight, heavy raw materials, and logistics personnel within industrial setups.',
                images: [
                    'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Hospital Bed Elevators', 
                details: 'Extra-deep elevators with micro-leveling precision, wider sliding doors, and ultra-gentle movement acceleration profiles specifically for hospital stretchers.',
                images: [
                    'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    },
    {
        id: 'structure-iron',
        title: 'Structure (Iron)',
        subtitle: 'Structural Steel, I-Beams & Channels',
        icon: <i className="fa-solid fa-industry"></i>,
        variantCount: '8 Categories',
        variantLabel: 'Types & Sections',
        brands: ['TATA Structura', 'SAIL', 'JSW Steel', 'Jindal Steel', 'Vizag Steel', 'Magadh Fabrication'],
        description: 'High-quality structural steel sections including I-Beams, H-Beams, Channels, Angles, gates, grills, and sitting structures.',
        heroDescription: 'We provide premium quality structural iron and steel products sourced from top manufacturers like SAIL, TATA Structura, and JSW. Our structural steel members—including angles, channels, joists, and beams—are manufactured to withstand heavy structural loads, alongside custom gates, grills, and outdoor sitting structures fabricated to perfection.',
        variants: [
            { 
                name: 'MS Angles (L-Section)', 
                details: 'Equal and unequal angles ideal for structural framing, transmission towers, and industrial shelving.',
                images: [
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'MS Channels (C-Section)', 
                details: 'Heavy-duty steel channels used as purlins, joists, and support members in building frames.',
                images: [
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'I-Beams & H-Beams', 
                details: 'High bending-resistance structural steel beams designed to support heavy overhead loads in high-rises and bridges.',
                images: [
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Hollow Structural Sections (SHS/RHS)', 
                details: 'Square and rectangular hollow steel tubes designed for premium framing, columns, and architectural steel works.',
                images: [
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'MS Plates & Sheets', 
                details: 'High-tensile steel plates used for structural connections, base plates, and heavy machinery fabrication.',
                images: [
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Iron Main Gate', 
                details: 'Custom-designed premium iron main gates offering robust security, long-lasting durability, and elegant architectural designs.',
                images: [
                    'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'MS Grills', 
                details: 'High-quality Mild Steel (MS) window and balcony safety grills, custom fabricated for maximum protection and ventilation.',
                images: [
                    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Iron Sitting Structure', 
                details: 'Heavy-duty outdoor and garden iron sitting structures, benches, and gazebos fabricated for weather resistance and durability.',
                images: [
                    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    },
    {
        id: 'home-appliances',
        title: 'Home Appliance',
        subtitle: 'TV, AC, Modular Kitchen & Smart Home Devices',
        icon: <i className="fa-solid fa-tv"></i>,
        variantCount: '6 Categories',
        variantLabel: 'Categories',
        brands: ['Samsung Electronics', 'LG Appliances', 'Whirlpool', 'Voltas AC', 'Bosch Home'],
        description: 'Smart home electronics, air conditioning systems, and modular kitchen appliances for modern lifestyles.',
        heroDescription: 'Equip your new home or commercial building with premium smart appliances. From five-star energy-efficient air conditioners and giant home-theater displays, to fully integrated kitchen chimneys, dishwashers, and washing machines that offer convenience and eco-friendly operations.',
        variants: [
            { 
                name: 'Inverter Split & Cassette ACs', 
                details: '5-star energy efficient smart inverter cooling units with active PM2.5 filters, designed for quiet operations and fast cooling in extreme tropical weather.',
                images: [
                    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'QLED / OLED Smart Displays', 
                details: 'Stunning high-resolution ultra-narrow bezel smart screens, perfect for commercial boardrooms, luxury living halls, and home-theatre spaces.',
                images: [
                    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Modular Kitchen Chimneys & Hobs', 
                details: 'High-suction brushless auto-clean chimneys paired with toughened glass built-in multi-burner gas hobs for sleek kitchens.',
                images: [
                    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Double-Door & French-Door Refrigerators', 
                details: 'Smart inverter frost-free multi-door refrigerators featuring smart cooling sensors, digital touch interfaces, and energy-conserving operations.',
                images: [
                    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Front-Load Washing Machines', 
                details: 'Fully automatic high-capacity front-loading washers with steam hygiene cycles and silent direct-drive motors.',
                images: [
                    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80'
                ]
            },
            { 
                name: 'Smart Dishwashers & Water Purifiers', 
                details: 'Eco-friendly multi-cycle dish cleaning systems paired with multi-stage RO+UV copper water purifiers for advanced hygiene.',
                images: [
                    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80'
                ]
            }
        ]
    }
];

export default productsData;
