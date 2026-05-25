import React from 'react';

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
            { name: '8mm', details: 'Ideal for stirrups, binders, and light structural reinforcement in low-load construction.' },
            { name: '10mm', details: 'Commonly used for slabs, beams, and residential masonry reinforcement.' },
            { name: '12mm', details: 'Used heavily in structural concrete reinforcements for load-bearing beams and pillars.' },
            { name: '16mm', details: 'Designed for heavy load-bearing beams, deep foundations, and structural framing.' },
            { name: '20mm', details: 'Critical for heavy foundations, industrial structures, and multi-story commercial projects.' },
            { name: '25mm', details: 'Used in super heavy-duty structures, bridge pillars, and high-rise structures.' },
            { name: '32mm', details: 'Engineered for major civil engineering projects, flyovers, concrete dams, and high-rises.' },
            { name: 'Fe 500D / Fe 550D / Fe 600', details: 'Available in diverse ductility and yield strength ratings to match specific architectural designs.' }
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
            { name: 'OPC 43 Grade', details: 'Perfect for standard concrete structures, brick masonry, wall plastering, and general renovation projects.' },
            { name: 'OPC 53 Grade', details: 'Designed for high-strength structural concrete, multi-story buildings, flyovers, bridges, and pre-cast concrete elements.' },
            { name: 'PPC (Portland Pozzolana)', details: 'Eco-friendly cement providing high resistance to chemical attacks, lower heat of hydration, and excellent long-term strength. Ideal for marine and mass concrete works.' },
            { name: 'White Cement', details: 'Specially engineered for wall styling finishes, decorative architectural features, marble tile grouting, and artistic mortar work.' }
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
            { name: 'M20 Grade', details: 'Perfect for residential driveways, pathways, low-load concrete slabs, and standard domestic brickwork support.' },
            { name: 'M25 Grade', details: 'Standard structural concrete grade widely utilized for columns, beams, foundations, and residential slabs.' },
            { name: 'M30 Grade', details: 'High-strength structural concrete engineered for commercial complexes, high-load floors, and industrial yards.' },
            { name: 'M40 & Higher Grades', details: 'Super-strength concrete formulations designed for heavy civil projects, bridge decks, concrete highways, and high-rise structures.' }
        ]
    },
    {
        id: 'paints',
        title: 'Paints',
        subtitle: 'Interior & Exterior Wall Finishes',
        icon: <i className="fa-solid fa-paint-roller"></i>,
        variantCount: '4 Categories',
        variantLabel: 'Categories',
        brands: ['Asian Paints', 'Berger Paints', 'Dulux Paint', 'Nerolac Paints'],
        description: 'Stunning aesthetics, weather protection, and anti-fungal properties for interior and exterior walls.',
        heroDescription: 'Elevate the beauty of your residential or commercial projects with premium interior and exterior paints. Offering a rich palette of colors, superior washable finishes, dust-resistant tech, and environment-friendly low VOC formulations that keep your walls looking pristine for years.',
        variants: [
            { name: 'Interior Emulsions', details: 'Premium matte, satin, and luxury gloss finishes providing superior washability, stain-resistance, and long-lasting color richness.' },
            { name: 'Exterior Emulsions', details: 'All-weather proof protection shields walls from rain, extreme heat, and UV rays, with anti-algal and high elasticity characteristics.' },
            { name: 'Wall Primers & Putty', details: 'High-adhesion acrylic wall primers and waterproof acrylic putty to create perfectly smooth, uniform, moisture-resistant surfaces.' },
            { name: 'Wood & Metal Coatings', details: 'Premium high-gloss and matte enamel paints and protective polyurethanes designed for wooden trims, doors, and metal railings.' }
        ]
    },
    {
        id: 'electrical-items',
        title: 'Electrical Items',
        subtitle: 'Wires, Switches & Distribution Boards',
        icon: <i className="fa-solid fa-bolt"></i>,
        variantCount: '4 Categories',
        variantLabel: 'Categories',
        brands: ['Havells', 'Polycab Wires', 'Finolex Cables', 'Legrand Switches', 'Anchor'],
        description: 'Safe, durable FR cables, elegant modular switches, and reliable distribution systems for all construction needs.',
        heroDescription: 'Ensure safety and performance in your electrical networks. We supply certified Flame Retardant (FR) copper wires, state-of-the-art modular switches, sleek glass frames, heavy-duty MCBs, and comprehensive distribution boards engineered to withstand high voltage swings and maximize electricity conservation.',
        variants: [
            { name: 'FR & FRLSH Copper Wires', details: 'Flame Retardant and Low Smoke Halogen-free copper wires offering high electrical conductivity and maximum fire safety in conduits.' },
            { name: 'Modular Switches & Sockets', details: 'Designer modular switches, touch panels, and child-safe shutter sockets designed for smooth operations and premium interior aesthetics.' },
            { name: 'Distribution Boards & MCBs', details: 'Heavy-duty Miniature Circuit Breakers (MCBs), Residual Current Circuit Breakers (RCCBs), and modular distribution boards for overload protection.' },
            { name: 'Conduits & Concealed Boxes', details: 'High-impact heavy-duty PVC conduit pipes, bend joiners, and metal concealed boxes for safe, neat, long-lasting concealed wiring.' }
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
            { name: 'UPVC Sliding Windows', details: 'Multi-chambered welded profiles with high-grade double glazing, providing exceptional sound insulation, dust protection, and thermal efficiency.' },
            { name: 'Aluminium Casement Doors', details: 'Premium architectural-grade, powder-coated structural aluminium frames fitted with multi-point high-security locking systems.' },
            { name: 'Solid Flush Wooden Doors', details: 'High-density seasoned solid wood cores with boiling waterproof protection, perfect for designer main entries and heavy bedroom doors.' },
            { name: 'Bug Mesh & Security Grills', details: 'Integrated robust fly-mesh sliders and heavy-duty steel safety grills for high ventilation without compromising security.' }
        ]
    },
    {
        id: 'lifts',
        title: 'Lifts & Elevators',
        subtitle: 'Passenger & Goods Elevator Solutions',
        icon: <i className="fa-solid fa-elevator"></i>,
        variantCount: '4 Types',
        variantLabel: 'Types',
        brands: ['Otis Elevators', 'KONE Lifts', 'Schindler Lifts', 'Mitsubishi Electric'],
        description: 'Advanced, smooth-riding elevators utilizing smart gearless technology for commercial and high-rise structures.',
        heroDescription: 'We deliver state-of-the-art vertical transportation systems engineered for safety, speed, energy-efficiency, and smooth riding comfort. Incorporating smart gearless PM motors, regenerative drives, and modern cabin interiors for residential complexes, malls, and factories.',
        variants: [
            { name: 'Passenger Elevators', details: 'Modern gearless traction lifts offering ultra-smooth acceleration, silent operation, and sleek digital cabin designs for residential and office high-rises.' },
            { name: 'Home & Villa Lifts', details: 'Compact, low-overhead, pitless single-phase domestic elevators customized specifically for personal bungalows and low-rise villas.' },
            { name: 'Goods & Service Elevators', details: 'Heavy-duty vertical transportation cabins engineered to safely move freight, heavy raw materials, and logistics personnel within industrial setups.' },
            { name: 'Hospital Bed Elevators', details: 'Extra-deep elevators with micro-leveling precision, wider sliding doors, and ultra-gentle movement acceleration profiles specifically for hospital stretchers.' }
        ]
    },
    {
        id: 'home-appliances',
        title: 'Home Appliances',
        subtitle: 'TV, AC, Modular Kitchen & Smart Home Devices',
        icon: <i className="fa-solid fa-tv"></i>,
        variantCount: '6 Categories',
        variantLabel: 'Categories',
        brands: ['Samsung Electronics', 'LG Appliances', 'Whirlpool', 'Voltas AC', 'Bosch Home'],
        description: 'Smart home electronics, air conditioning systems, and modular kitchen appliances for modern lifestyles.',
        heroDescription: 'Equip your new home or commercial building with premium smart appliances. From five-star energy-efficient air conditioners and giant home-theater displays, to fully integrated kitchen chimneys, dishwashers, and washing machines that offer convenience and eco-friendly operations.',
        variants: [
            { name: 'Inverter Split & Cassette ACs', details: '5-star energy efficient smart inverter cooling units with active PM2.5 filters, designed for quiet operations and fast cooling in extreme tropical weather.' },
            { name: 'QLED / OLED Smart Displays', details: 'Stunning high-resolution ultra-narrow bezel smart screens, perfect for commercial boardrooms, luxury living halls, and home-theatre spaces.' },
            { name: 'Modular Kitchen Chimneys & Hobs', details: 'High-suction brushless auto-clean chimneys paired with toughened glass built-in multi-burner gas hobs for sleek kitchens.' },
            { name: 'Double-Door & French-Door Refrigerators', details: 'Smart inverter frost-free multi-door refrigerators featuring smart cooling sensors, digital touch interfaces, and energy-conserving operations.' },
            { name: 'Front-Load Washing Machines', details: 'Fully automatic high-capacity front-loading washers with steam hygiene cycles and silent direct-drive motors.' },
            { name: 'Smart Dishwashers & Water Purifiers', details: 'Eco-friendly multi-cycle dish cleaning systems paired with multi-stage RO+UV copper water purifiers for advanced hygiene.' }
        ]
    }
];

export default productsData;
