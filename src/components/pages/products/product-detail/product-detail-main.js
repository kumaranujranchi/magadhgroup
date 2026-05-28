import React, { useState } from 'react';
import { brandLogosMap } from '../../../data/products-data';

// Import TMT Brand Logos
import tmtLogo1 from '../../../../assets/img/tmt-brand-logo/1.png';
import tmtLogo2 from '../../../../assets/img/tmt-brand-logo/2.png';
import tmtLogo3 from '../../../../assets/img/tmt-brand-logo/3.png';
import tmtLogo5 from '../../../../assets/img/tmt-brand-logo/5.png';
import tmtLogo6 from '../../../../assets/img/tmt-brand-logo/6.png';
import tmtLogo7 from '../../../../assets/img/tmt-brand-logo/7.png';

// Import Cement Brand Logos
import cementLogoNuvoco from '../../../../assets/img/brand-logo/cement-brand-logo/Nuvuco Cement.png';
import cementLogoUltraTech from '../../../../assets/img/brand-logo/cement-brand-logo/UltraTech.png';
import cementLogoPrism from '../../../../assets/img/brand-logo/cement-brand-logo/Prism Cement.png';
import cementLogoBirlaShakti from '../../../../assets/img/brand-logo/cement-brand-logo/Birla Shakti.png';
import cementLogoACC from '../../../../assets/img/brand-logo/cement-brand-logo/AAC Cement.png';
import cementLogoAmbuja from '../../../../assets/img/brand-logo/cement-brand-logo/Ambuja Cement.png';

// Import Paints Brand Logos
import paintLogoAsian from '../../../../assets/img/brand-logo/paints-brand-logo/Asian.png';
import paintLogoBerger from '../../../../assets/img/brand-logo/paints-brand-logo/Berger.png';
import paintLogoBirlaOpus from '../../../../assets/img/brand-logo/paints-brand-logo/Birla Opus.png';
import paintLogoDulux from '../../../../assets/img/brand-logo/paints-brand-logo/Dulux.png';
import paintLogoNerolac from '../../../../assets/img/brand-logo/paints-brand-logo/Nerolac.png';

const brandDetailsData = {
    tata: {
        name: 'TATA Tiscon',
        logo: tmtLogo7,
        tagline: 'India\'s First Branded TMT Rebar',
        description: 'Tata Tiscon is one of India’s most popular TMT (Thermo-Mechanically Treated) steel rebar brands, owned by Tata Steel. It is widely used in home construction, bridges, commercial buildings, and infrastructure projects across India.',
        knownFor: [
            'High-strength TMT bars used for RCC (reinforced cement concrete) structures.',
            'Designed to provide better earthquake resistance, high ductility (flexibility), corrosion resistance, and strong bonding with concrete.',
            'Available in grades like 550SD, which are popular for residential and heavy-duty construction.'
        ],
        history: 'Tata Tiscon was launched in 2000 and became one of India’s first branded TMT rebars backed by advanced technology support from Morgan, USA.',
        whyTrust: [
            'Manufactured by Tata Steel, one of the world\'s most trusted and sustainable steel producers.',
            'Comes with precise weight-per-meter standards, ensuring cost-efficiency and no hidden charges.',
            'Rigorous quality control checking every batch for chemistry and strength.'
        ]
    },
    jindal: {
        name: 'Jindal Panther',
        logo: tmtLogo6,
        tagline: 'Leading the Strength in Infrastructure',
        description: 'Jindal Panther TMT rebars are manufactured by Jindal Steel and Power (JSPL) using state-of-the-art technology. They are engineered to provide maximum strength and durability for modern structural requirements.',
        knownFor: [
            'High bendability and easy workability on-site.',
            'Excellent weldability with low carbon levels, requiring no pre-heating.',
            'Superior bond strength with cement, resulting from precise rib design.'
        ],
        history: 'JSPL launched Jindal Panther in 2013 to deliver premium-grade construction rebars, utilizing their advanced HYQST (High Yield Quenched and Self Tempered) technology.',
        whyTrust: [
            'Produced from virgin iron ore in highly advanced steel-making plants.',
            'Guarantees consistency in quality, thickness, and structural reliability.',
            'Meets national and international standards for high-seismic zones.'
        ]
    },
    jsw: {
        name: 'JSW Neosteel',
        logo: tmtLogo5,
        tagline: 'Pure Steel, Pure Strength',
        description: 'JSW Neosteel is a premium quality TMT bar manufactured by JSW Steel, utilizing clean and pure steel from state-of-the-art mills. It is recognized for its consistency and high performance in concrete reinforcing.',
        knownFor: [
            'High strength combined with high elongation for superior earthquake safety.',
            'Excellent corrosion-resistant properties, suitable for coastal and marine environments.',
            'Unmatched thermal resistance, keeping structures safe even at high temperatures.'
        ],
        history: 'JSW Steel introduced Neosteel as a premium branded rebar to cater to India\'s rising infrastructure demand, establishing it as one of the top choices for mega-infrastructure projects.',
        whyTrust: [
            'Made from 100% virgin steel, free from impurities and tramp elements.',
            'Manufactured using advanced thermo-mechanical treatment processes for uniform property distribution.',
            'Preferred brand for major national highways, metro rail, and high-rise developments.'
        ]
    },
    magadh: {
        name: 'Magadh TMT',
        logo: tmtLogo3,
        tagline: 'The Pride of Eastern India',
        description: 'Magadh TMT bars are known for their exceptional strength and local dependability in Eastern India. Backed by Magadh Group, these rebars are crafted specifically to withstand the regional climate and seismic factors.',
        knownFor: [
            'Highly cost-effective with superior load-bearing capacity.',
            'Excellent flexibility, allowing easy bending and rebending without stress cracking.',
            'Optimized rib pattern for seamless bonding with concrete mixes.'
        ],
        history: 'Magadh TMT has served the construction sector in Bihar, Jharkhand, and neighboring states for decades, continuously upgrading production facilities with cutting-edge cooling systems.',
        whyTrust: [
            'Deep local heritage and understanding of regional soil and construction conditions.',
            'Excellent value for money, ideal for residential homes, schools, and commercial complexes.',
            'Strong customer-centric service with rapid local delivery and support.'
        ]
    },
    rungta: {
        name: 'Rungta Steel',
        logo: tmtLogo2,
        tagline: 'Ekdum Solid, Hamesha Ke Liye',
        description: 'Rungta Steel TMT bars are produced by Rungta Mines Limited, one of the oldest and most respected mining and steel companies in India. They offer high tensile strength and longevity for all kinds of construction.',
        knownFor: [
            'Uniform rib pattern ensuring excellent grip with concrete.',
            'High structural ductility, making it highly suitable for earthquake-prone zones.',
            'Superior corrosion resistance and fatigue resistance.'
        ],
        history: 'Part of the rich legacy of Rungta Mines, Rungta Steel has grown to become a national brand representing uncompromising quality, supported by advanced technical collaborations.',
        whyTrust: [
            'Vertically integrated production from iron ore mining to finished steel rebars.',
            'Strictest compliance with BIS standards (IS 1786).',
            'Relied upon by individual home builders and large scale government contractors alike.'
        ]
    },
    sail: {
        name: 'SAIL TMT',
        logo: tmtLogo1,
        tagline: 'The Nation\'s Strength',
        description: 'SAIL TMT rebars are manufactured by Steel Authority of India Limited (SAIL), a premier public sector enterprise. Known as the backbone of India\'s infrastructure, SAIL TMT offers trust, quality, and legacy.',
        knownFor: [
            'Excellent structural integrity under extreme pressure.',
            'Outstanding weldability and fatigue resistance.',
            'High energy absorption capacity, vital for seismic protection.'
        ],
        history: 'SAIL has been building India since independence. Its TMT bars have been used in almost every major bridge, dam, airport, and monument in India.',
        whyTrust: [
            'Government of India enterprise assuring unmatched reliability and standard compliance.',
            'Produced using state-of-the-art blast furnace and rolling mill technologies.',
            'Strict quality assurance that meets all regulatory parameters of the Bureau of Indian Standards.'
        ]
    },
    'ultratech-rmc': {
        name: 'UltraTech RMC',
        logo: cementLogoUltraTech,
        tagline: 'Precision Engineered Concrete',
        description: 'UltraTech Ready Mix Concrete (RMC) is manufactured in state-of-the-art fully automated batching plants. It ensures consistent quality, strength, and ease of placement, making it the preferred concrete choice for major builders.',
        knownFor: [
            'Fully automated computer-controlled batching ensuring absolute mix accuracy.',
            'High workability and structural strength performance.',
            'Special variants like UltraTech Litecon, Duracon, and Hypercon for custom engineering needs.'
        ],
        history: 'Launched to bring globally standard ready-mix solutions to India, UltraTech RMC operates massive fleets of transit mixers and concrete pumps across all metropolitan centers.',
        whyTrust: [
            'Strict adherence to Indian Standards (IS 4926) for ready-mix concrete.',
            'Direct site delivery with real-time quality testing and temperature control.',
            'Saves space, reduces site pollution, and speed up building time.'
        ]
    },
    'acc-rmc': {
        name: 'ACC Concrete',
        logo: cementLogoACC,
        tagline: 'Leading the Concrete Revolution',
        description: 'ACC Concrete is the ready-mix concrete brand of ACC Limited, pioneering highly durable, sustainable, and custom-designed concrete solutions for all kinds of foundations and columns.',
        knownFor: [
            'Excellent cohesive strength preventing segregation and bleeding.',
            'High-performance green concrete lines (ECOPact) reducing carbon footprints.',
            'Self-compacting concrete capability requiring no mechanical vibrators.'
        ],
        history: 'ACC introduced commercial ready-mix concrete in India in 1993, establishing the standard for batching precision and site delivery mechanics.',
        whyTrust: [
            'Unrivaled batch consistency backed by ACC\'s high-grade cements.',
            'Customizable set-times to suit remote construction site logistics.',
            'Uncompromising load testing conducted on concrete cubes at 7 and 28 days.'
        ]
    },
    'nuvoco-rmc': {
        name: 'Nuvoco RMC',
        logo: cementLogoNuvoco,
        tagline: 'Smart Concrete Solutions',
        description: 'Nuvoco Ready Mix Concrete (formerly Lafarge Artiste & Concretes) is known for its highly innovative, decorative, and high-strength concrete mixes.',
        knownFor: [
            'InstaMix: Dry mix bagged concrete solutions for quick repairs.',
            'Artiste: Decorative and colored concrete for driveways, plazas, and landscapes.',
            'Fluidcon: High-fluidity concrete that fills narrow formworks easily.'
        ],
        history: 'Nuvoco Vistas Corp. has expanded rapidly through acquisitions to become one of the top concrete suppliers in India, noted for its design-mix research.',
        whyTrust: [
            'Premium focus on custom design mixes developed in dedicated NABL-certified labs.',
            'Pioneering water-permeable concrete and lightweight concrete solutions.',
            'Consistent strength development and durability characteristics.'
        ]
    },
    'ambuja-rmc': {
        name: 'Ambuja Concrete',
        logo: cementLogoAmbuja,
        tagline: 'Giant Strength, Delivered Fresh',
        description: 'Ambuja Ready Mix Concrete is engineered to deliver the legendary strength of Ambuja Cement in a ready-to-pour form, ensuring robust and leakage-free structures.',
        knownFor: [
            'High compaction concrete ensuring minimum porosity and leakage prevention.',
            'Optimized setting characteristics tailored for hot and cold weather environments.',
            'Highly durable and resistant to water seepage.'
        ],
        history: 'Ambuja entered the ready-mix segment to provide end-to-end quality assurance from cement bag supply to site-poured concrete execution.',
        whyTrust: [
            'Uncompromising raw material screening including gravel size, sand quality, and water purity.',
            'Experienced site testing engineers validating slump and consistency before casting.',
            'Highly reliable for structural columns, thick basement rafts, and suspended slabs.'
        ]
    },
    ultratech: {
        name: 'UltraTech Cement',
        logo: cementLogoUltraTech,
        tagline: 'The Engineer\'s Choice',
        description: 'UltraTech Cement is the ultimate choice of concrete specialists and builders, being the largest manufacturer of grey cement, Ready Mix Concrete (RMC), and white cement in India.',
        knownFor: [
            'Exceptional compressive strength and fast setting parameters.',
            'Manufactured with advanced raw materials checking and chemical composition control.',
            'Popular grades include UltraTech Premium, Super, and Weather Plus.'
        ],
        history: 'Part of the Aditya Birla Group, UltraTech has grown to become India\'s leading cement brand, trusted for landmark structures and massive national infrastructure.',
        whyTrust: [
            'Uncompromised durability and resistance to harsh environmental conditions.',
            'State-of-the-art research and development ensuring consistent standard compliance.',
            'Excellent coverage and cohesive properties that yield a smooth finishing surface.'
        ]
    },
    acc: {
        name: 'ACC Cement',
        logo: cementLogoACC,
        tagline: 'Cementing Trust Since 1936',
        description: 'ACC Limited is one of India\'s oldest and most renowned cement manufacturers, recognized for its premium quality binding and long-lasting structural integrity.',
        knownFor: [
            'Superior bonding capability with sand and aggregates.',
            'Low heat of hydration, drastically reducing micro-crack formations in massive slabs.',
            'Eco-friendly blends with high fly-ash content for sustainable building.'
        ],
        history: 'Founded in 1936 by the merger of ten cement companies, ACC has been at the forefront of major developments across India for nearly a century.',
        whyTrust: [
            'Legacy of excellence spanning over 80 years of structural performance.',
            'Rigorous quality checks at every level of manufacturing.',
            'High resistance to sulfate and chloride attacks, perfect for marine and coastal constructions.'
        ]
    },
    ambuja: {
        name: 'Ambuja Cement',
        logo: cementLogoAmbuja,
        tagline: 'Giant Compressive Strength',
        description: 'Ambuja Cements Limited is a leading cement company in India, celebrated for its unique product development, strength, and strong water-resistant capabilities.',
        knownFor: [
            'Unique water-repellent properties (Ambuja Kawach) preventing dampness.',
            'Exceptional high early strength, enabling faster shuttering removal.',
            'Highly cohesive paste formation resulting in dense, void-free concrete.'
        ],
        history: 'Established in 1983, Ambuja has revolutionized Indian cement production by introducing high-performance, environment-friendly blended cements.',
        whyTrust: [
            'Proprietary active water-resistance technologies.',
            'Saves cost by reducing chemical waterproofing requirements.',
            'Tested and proven to resist micro-fissures and severe temperature swings.'
        ]
    },
    birlashakti: {
        name: 'Birla Shakti Cement',
        logo: cementLogoBirlaShakti,
        tagline: 'Cementing Strength, Shaping Futures',
        description: 'Birla Shakti Cement is a premium brand of cement produced with advanced technology and strict quality standards, offering super compressive strength and enhanced durability for major construction works.',
        knownFor: [
            'Excellent initial strength development allowing early formwork removal.',
            'Perfect for concrete blocks, slabs, foundation works, and general plastering.',
            'Saves structural maintenance cost due to low chemical reactivity.'
        ],
        history: 'Birla Shakti is part of the Vasavadatta Cement division of Kesoram Industries (a constituent of the BK Birla Group), serving building needs for decades with distinction.',
        whyTrust: [
            'Backed by the legacy of BK Birla Group, prioritizing excellence and customer satisfaction.',
            'Consistently delivers the highest level of structural strength and waterproofing capability.',
            'Low heat of hydration reduces micro-crack risks in thick structural slabs.'
        ]
    },
    prism: {
        name: 'Prism Cement',
        logo: cementLogoPrism,
        tagline: 'Door Ki Soch',
        description: 'Prism Cement is one of India\'s leading cement brands, known for its high quality, state-of-the-art production, and focus on delivering long-term durability for residential and commercial construction.',
        knownFor: [
            'High-strength cement perfect for load-bearing slabs and columns.',
            'Excellent setting characteristics and uniform curing.',
            'Popular products like Prism Champion and Prism Duratech.'
        ],
        history: 'Part of Prism Johnson Limited, the brand was established with advanced dry-process technology in Madhya Pradesh and has grown to be a trusted name across Central India.',
        whyTrust: [
            'Rigorous quality control utilizing robotic analysis systems.',
            'Superior corrosion resistance for reinforced steel structures.',
            'Exceptional durability and long-term compressive strength.'
        ]
    },
    nuvoco: {
        name: 'Nuvoco Cement',
        logo: cementLogoNuvoco,
        tagline: 'Building Trust, Delivering Quality',
        description: 'Nuvoco Cement (formerly Lafarge India) is a premier cement brand known for its innovative building materials, offering superior structural strength and weather resistance.',
        knownFor: [
            'Concreto: Premium slag cement offering maximum durability and mirror-finish slabs.',
            'Duraguard: Water-resistant cement preventing dampness and saltpeter attacks.',
            'Excellent cohesive properties for zero cracks and voids.'
        ],
        history: 'Nuvoco Vistas Corp. has evolved into one of the top cement and concrete manufacturers in India, leading the market with eco-friendly and high-performance solutions.',
        whyTrust: [
            'Manufactured in advanced automated plants with premium materials.',
            'NABL-accredited laboratory checking ensuring peak performance standards.',
            'Eco-friendly slag and pozzolana compositions for sustainable structures.'
        ]
    },
    'asian-paints': {
        name: 'Asian Paints',
        logo: paintLogoAsian,
        tagline: 'Har Ghar Kuch Kehta Hai',
        description: 'Asian Paints is India’s leading paint company, recognized globally for its high-quality home decor solutions, innovative washable emulsions, and state-of-the-art color mixing services.',
        knownFor: [
            'Apex Ultima Protek: Premium exterior paint with a 10-year waterproofing warranty.',
            'Royale Luxury Emulsion: High-washability interior paint with a smooth Teflon finish.',
            'Royale Play: Beautiful textured finishes designed by professional artists.'
        ],
        history: 'Founded in 1942, Asian Paints has grown from a small partnership into India\'s largest and most trusted paint manufacturing brand.',
        whyTrust: [
            'Advanced color matching system offering over 2,200 shades.',
            'Eco-friendly, lead-free, and low VOC paints safe for kids and pets.',
            'Longest durability and color retention in all tropical weather conditions.'
        ]
    },
    'berger-paints': {
        name: 'Berger Paints',
        logo: paintLogoBerger,
        tagline: 'Paint Your Imagination',
        description: 'Berger Paints is one of the fastest-growing paint companies in India, pioneering luxury interior finishes, dust-resistant exterior protection, and automated painting services.',
        knownFor: [
            'Silk Glamor: Luxury interior emulsion offering an ultra-smooth silk finish.',
            'WeatherCoat Anti-Dust: Exterior paint that prevents dust particles from sticking to walls.',
            'Easy Clean: Highly washable interior paint that removes stubborn stains easily.'
        ],
        history: 'Tracing its legacy back to 1760 in the UK, Berger Paints India is a household name trusted for industrial and residential coatings.',
        whyTrust: [
            'Dust-guard technology keeps exterior walls looking clean for years.',
            'Highly resilient elasticity protects walls against hairline cracks.',
            'Certified green products with zero health hazards.'
        ]
    },
    'birla-opus': {
        name: 'Birla Opus',
        logo: paintLogoBirlaOpus,
        tagline: 'Make Your Walls Sing',
        description: 'Birla Opus is the premium new-age paint brand launched by the Aditya Birla Group, bringing next-generation technological innovation, unmatched washability, and superior finish options to the Indian market.',
        knownFor: [
            'Opus One Luxury Emulsion: Premium high-sheen interior paint with active stain guard.',
            'Opus All-Weather: High-elasticity exterior shield resisting extreme heat and heavy rains.',
            'Eco-conscious formulations: Zero VOC and organic base options for healthier spaces.'
        ],
        history: 'Launched in 2024 by Aditya Birla Group with one of the largest industrial setups, Birla Opus aims to redefine painting standards in India.',
        whyTrust: [
            'Backed by the trust and heritage of the Aditya Birla Group.',
            'State-of-the-art paint technology ensuring unmatched coverage and wall brightness.',
            'Anti-fungal, anti-algal, and stain-resistant protections built-in.'
        ]
    },
    'dulux-paint': {
        name: 'Dulux Paint',
        logo: paintLogoDulux,
        tagline: 'Let\'s Colour',
        description: 'Dulux is a world-class premium paint brand from AkzoNobel, celebrated for its advanced color science, velvet finishes, and environment-friendly sustainable building products.',
        knownFor: [
            'Dulux Velvet Touch: Premium interior emulsion offering an exquisite velvet-like finish.',
            'Weathershield Max: Ultimate exterior protection with active crack-bridging technology.',
            'Dulux Promise: High coverage and budget-friendly durable finishes.'
        ],
        history: 'Originally established in the UK, Dulux has become a premier global brand under AkzoNobel, known for defining international color trends.',
        whyTrust: [
            'Global standard quality control and advanced color durability.',
            'Superior coverage means less paint is needed per square foot.',
            'Breathable paint film prevents moisture trapping and dampness.'
        ]
    },
    'nerolac-paints': {
        name: 'Nerolac Paints',
        logo: paintLogoNerolac,
        tagline: 'Kuch Khas Hai',
        description: 'Kansai Nerolac Paints is the second-largest coating company in India and a market leader in industrial and automotive coatings, offering premium healthy home paints with Japanese technology support.',
        knownFor: [
            'Nerolac Beauty Gold: High-coverage, smooth matte emulsion for interior walls.',
            'Excel Everlast: Premium exterior paint with self-cleaning properties.',
            'Nerolac Impression: Premium high-gloss interior emulsion with low odor.'
        ],
        history: 'Established in 1920 in Mumbai, Nerolac has partnered with Kansai Paint Japan to bring cutting-edge coating technologies to India.',
        whyTrust: [
            'Lead-free, low VOC, and low-odor formulations prioritizing family health.',
            'Strongest anti-bacterial and anti-viral properties certified by independent labs.',
            'Highly durable formulations adapted from heavy-duty automotive paint technology.'
        ]
    }
};

const ProductDetailMain = ({ product }) => {
    // Lightbox Gallery State
    const [lightbox, setLightbox] = useState({
        isOpen: false,
        images: [],
        currentIndex: 0,
        title: ''
    });

    const openLightbox = (images, title, index = 0) => {
        if (!images || images.length === 0) return;
        setLightbox({
            isOpen: true,
            images: images,
            currentIndex: index,
            title: title
        });
    };

    const closeLightbox = () => {
        setLightbox(prev => ({ ...prev, isOpen: false }));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setLightbox(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length
        }));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setLightbox(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
        }));
    };

    // State for the Get Quote Form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        productName: product.title,
        variant: product.variants[0]?.name || '',
        quantity: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "product-quote-form", ...formData })
        })
        .then(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                productName: product.title,
                variant: product.variants[0]?.name || '',
                quantity: '',
                message: ''
            });
        })
        .catch(error => {
            setIsLoading(false);
            alert("Error sending submission: " + error);
        });
    };

    // REDESIGN: Brand-based TMT Selector States
    const [selectedSizes, setSelectedSizes] = useState({
        'TATA Tiscon': '12mm',
        'Jindal Panther': '12mm',
        'JSW Neosteel': '12mm',
        'Magadh TMT': '12mm',
        'Rungta Steel': '12mm',
        'SAIL TMT': '12mm'
    });

    const [selectedGrades, setSelectedGrades] = useState({
        'UltraTech Cement': 'PPC',
        'ACC Cement': 'PPC',
        'Ambuja Cement': 'PPC',
        'Prism Cement': 'PPC',
        'Birla Shakti Cement': 'PPC',
        'Nuvoco Cement': 'PPC'
    });

    const [selectedRmcGrades, setSelectedRmcGrades] = useState({
        'UltraTech RMC': 'M25',
        'ACC Concrete': 'M25',
        'Nuvoco RMC': 'M25',
        'Ambuja Concrete': 'M25'
    });

    const [selectedPaintCategories, setSelectedPaintCategories] = useState({
        'Asian Paints': 'Interior',
        'Berger Paints': 'Interior',
        'Birla Opus': 'Interior',
        'Dulux Paint': 'Interior',
        'Nerolac Paints': 'Interior'
    });

    const [detailsModal, setDetailsModal] = useState({
        isOpen: false,
        brandId: ''
    });

    const tmtBrands = [
        { id: 'tata', name: 'TATA Tiscon', logo: tmtLogo7, sizes: ['8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '32mm'] },
        { id: 'jindal', name: 'Jindal Panther', logo: tmtLogo6, sizes: ['8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '32mm'] },
        { id: 'jsw', name: 'JSW Neosteel', logo: tmtLogo5, sizes: ['8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '32mm'] },
        { id: 'magadh', name: 'Magadh TMT', logo: tmtLogo3, sizes: ['8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '32mm'] },
        { id: 'rungta', name: 'Rungta Steel', logo: tmtLogo2, sizes: ['8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '32mm'] },
        { id: 'sail', name: 'SAIL TMT', logo: tmtLogo1, sizes: ['8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '32mm'] }
    ];

    const cementBrands = [
        { id: 'ultratech', name: 'UltraTech Cement', logo: cementLogoUltraTech, grades: ['OPC 43', 'OPC 53', 'PPC', 'White Cement'] },
        { id: 'acc', name: 'ACC Cement', logo: cementLogoACC, grades: ['OPC 43', 'OPC 53', 'PPC', 'White Cement'] },
        { id: 'ambuja', name: 'Ambuja Cement', logo: cementLogoAmbuja, grades: ['OPC 43', 'OPC 53', 'PPC'] },
        { id: 'prism', name: 'Prism Cement', logo: cementLogoPrism, grades: ['OPC 43', 'OPC 53', 'PPC'] },
        { id: 'birlashakti', name: 'Birla Shakti Cement', logo: cementLogoBirlaShakti, grades: ['OPC 43', 'OPC 53', 'PPC'] },
        { id: 'nuvoco', name: 'Nuvoco Cement', logo: cementLogoNuvoco, grades: ['OPC 43', 'OPC 53', 'PPC'] }
    ];

    const rmcBrands = [
        { id: 'ultratech-rmc', name: 'UltraTech RMC', logo: cementLogoUltraTech, grades: ['M20', 'M25', 'M30', 'M40 & Higher'] },
        { id: 'acc-rmc', name: 'ACC Concrete', logo: cementLogoACC, grades: ['M20', 'M25', 'M30', 'M40 & Higher'] },
        { id: 'nuvoco-rmc', name: 'Nuvoco RMC', logo: cementLogoNuvoco, grades: ['M20', 'M25', 'M30', 'M40 & Higher'] },
        { id: 'ambuja-rmc', name: 'Ambuja Concrete', logo: cementLogoAmbuja, grades: ['M20', 'M25', 'M30', 'M40 & Higher'] }
    ];

    const paintBrands = [
        { id: 'asian-paints', name: 'Asian Paints', logo: paintLogoAsian, categories: ['Interior', 'Exterior', 'Primer & Putty', 'Wood & Metal'] },
        { id: 'berger-paints', name: 'Berger Paints', logo: paintLogoBerger, categories: ['Interior', 'Exterior', 'Primer & Putty', 'Wood & Metal'] },
        { id: 'birla-opus', name: 'Birla Opus', logo: paintLogoBirlaOpus, categories: ['Interior', 'Exterior', 'Primer & Putty', 'Wood & Metal'] },
        { id: 'dulux-paint', name: 'Dulux Paint', logo: paintLogoDulux, categories: ['Interior', 'Exterior', 'Primer & Putty', 'Wood & Metal'] },
        { id: 'nerolac-paints', name: 'Nerolac Paints', logo: paintLogoNerolac, categories: ['Interior', 'Exterior', 'Primer & Putty', 'Wood & Metal'] }
    ];

    const changeSelectedSize = (brandName, size) => {
        setSelectedSizes(prev => ({
            ...prev,
            [brandName]: size
        }));
    };

    const changeSelectedGrade = (brandName, grade) => {
        setSelectedGrades(prev => ({
            ...prev,
            [brandName]: grade
        }));
    };

    const changeSelectedRmcGrade = (brandName, grade) => {
        setSelectedRmcGrades(prev => ({
            ...prev,
            [brandName]: grade
        }));
    };

    const changeSelectedPaintCategory = (brandName, category) => {
        setSelectedPaintCategories(prev => ({
            ...prev,
            [brandName]: category
        }));
    };

    const openDetailsModal = (brandId) => {
        setDetailsModal({
            isOpen: true,
            brandId: brandId
        });
    };

    const closeDetailsModal = () => {
        setDetailsModal(prev => ({ ...prev, isOpen: false }));
    };

    const handleGetQuoteClick = () => {
        closeDetailsModal();
        setTimeout(() => {
            const element = document.getElementById('get-quote-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="product-detail__page py-5">
            {/* Overview Section */}
            <div className="container mt-50">
                <div className="row align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
                        <div className="product-detail__content">
                            <span className="subtitle text-uppercase font-weight-bold" style={{ color: 'var(--primary-color-1)', letterSpacing: '1.5px', fontSize: '13px' }}>
                                Product Category
                            </span>
                            <h2 className="mt-10 mb-20 font-weight-bold" style={{ fontSize: '38px', color: 'var(--text-heading-color)' }}>
                                {product.title}
                            </h2>
                            <p className="lead font-weight-medium" style={{ fontSize: '18px', color: '#555', lineHeight: '1.7' }}>
                                {product.subtitle}
                            </p>
                            <p className="mt-20 mb-30" style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                                {product.heroDescription}
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay=".5s">
                        <div className="row g-4">
                            <div className="col-sm-6">
                                <div className="product-detail__stat-card">
                                    <h5>{product.variants.length} +</h5>
                                    <p>Available {product.variantLabel}</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="product-detail__stat-card">
                                    <h5>{product.brands.length} +</h5>
                                    <p>Premium Partner Brands</p>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="p-4 rounded border" style={{ background: '#fcfbf7', borderColor: 'var(--border-color-1)' }}>
                                    <h6 className="font-weight-bold mb-2" style={{ color: 'var(--color-1)' }}>
                                        <i className="fa-solid fa-circle-check text-success me-2"></i> Quality Assurance
                                    </h6>
                                    <p className="mb-0" style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                                        Magadh Group guarantees 100% genuine products sourced directly from manufacturers. 
                                        All shipments are certified and tested for structural standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variants Section */}
            <div className="bg-light-gray py-5 my-5 section-padding-two" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    {product.id === 'tmt-bars' || product.id === 'cement' || product.id === 'rmc' || product.id === 'paints' ? (
                        <>
                            <div className="row justify-content-center text-center mb-50">
                                <div className="col-lg-8">
                                    <div className="section-title">
                                        <span className="subtitle">Premium Partners</span>
                                        <h2>Explore {product.title} Brands</h2>
                                        <p className="mt-15">
                                            Explore premium {product.title} brands, view available specifications, and click View Details to learn more about each brand's technical specifications and history.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row g-4 justify-content-center">
                                {(product.id === 'tmt-bars' 
                                    ? tmtBrands 
                                    : (product.id === 'cement' 
                                        ? cementBrands 
                                        : (product.id === 'rmc' ? rmcBrands : paintBrands)
                                      )
                                 ).map((brand, idx) => {
                                    const selectedSpec = product.id === 'tmt-bars' 
                                        ? (selectedSizes[brand.name] || '12mm')
                                        : (product.id === 'cement' 
                                            ? (selectedGrades[brand.name] || 'PPC')
                                            : (product.id === 'rmc' 
                                                ? (selectedRmcGrades[brand.name] || 'M25')
                                                : (selectedPaintCategories[brand.name] || 'Interior')
                                              )
                                          );
                                    const specs = product.id === 'tmt-bars' 
                                        ? brand.sizes 
                                        : (product.id === 'cement' || product.id === 'rmc' ? brand.grades : brand.categories);
                                    const specsLabel = product.id === 'tmt-bars' 
                                        ? 'Available Sizes' 
                                        : (product.id === 'cement' || product.id === 'rmc' ? 'Available Grades' : 'Available Categories');
                                    
                                    return (
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + (idx * 0.05)}s`} key={brand.id}>
                                            <div className="tmt-brand-card">
                                                <div className="tmt-brand-card__logo-container">
                                                    <img src={brand.logo} alt={`${brand.name} Logo`} className="tmt-brand-card__logo" />
                                                </div>
                                                <div className="tmt-brand-card__details">
                                                    <h4 className="tmt-brand-card__name">{brand.name}</h4>
                                                    
                                                    <span className="tmt-brand-card__sizes-label">{specsLabel}</span>
                                                    <div className="tmt-brand-card__sizes-grid">
                                                        {specs.map((spec) => (
                                                            <span 
                                                                key={spec} 
                                                                className={`tmt-brand-card__size-pill ${selectedSpec === spec ? 'active' : ''}`}
                                                                onClick={() => {
                                                                    if (product.id === 'tmt-bars') {
                                                                        changeSelectedSize(brand.name, spec);
                                                                    } else if (product.id === 'cement') {
                                                                        changeSelectedGrade(brand.name, spec);
                                                                    } else if (product.id === 'rmc') {
                                                                        changeSelectedRmcGrade(brand.name, spec);
                                                                    } else {
                                                                        changeSelectedPaintCategory(brand.name, spec);
                                                                    }
                                                                }}
                                                            >
                                                                {spec}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    
                                                    <button 
                                                        className="build_button tmt-brand-card__details-btn"
                                                        onClick={() => openDetailsModal(brand.id)}
                                                    >
                                                        View Details<i className="flaticon-right-up"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="row justify-content-center text-center mb-50">
                                <div className="col-lg-8">
                                    <div className="section-title">
                                        <span className="subtitle">Available Specifications</span>
                                        <h2>Types & Dimensions</h2>
                                        <p className="mt-15">
                                            We supply the following variants and sizing standards for {product.title} to cater to diverse structural requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row g-4">
                                {product.variants.map((v, idx) => {
                                    const hasImages = v.images && v.images.length > 0;
                                    const firstImage = hasImages ? v.images[0] : 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80';
                                    
                                    return (
                                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + (idx % 4) * 0.1}s`} key={idx}>
                                            <div 
                                                className="variant__card"
                                                onClick={() => hasImages && openLightbox(v.images, v.name)}
                                                style={{ cursor: hasImages ? 'pointer' : 'default' }}
                                            >
                                                <div className="variant__card-image-wrapper mb-20 position-relative" style={{ overflow: 'hidden', borderRadius: '6px', height: '180px', background: '#f5f5f5' }}>
                                                    <img 
                                                        src={firstImage} 
                                                        alt={v.name} 
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                                        className="variant-img"
                                                    />
                                                    {hasImages && v.images.length > 1 && (
                                                        <div className="variant__card-image-badge" style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '12px', padding: '3px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                            <i className="fa-solid fa-images"></i> {v.images.length}
                                                        </div>
                                                    )}
                                                    {hasImages && (
                                                        <div className="variant__card-hover-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <i className="fa-solid fa-magnifying-glass-plus text-white" style={{ fontSize: '24px' }}></i>
                                                        </div>
                                                    )}
                                                </div>
                                                <span className="variant__card-num">Option 0{idx + 1}</span>
                                                <h4 className="variant__card-title">{v.name}</h4>
                                                <p>{v.details}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Brands Showcase Section */}
            <div className="container my-5 py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-10 wow fadeInUp" data-wow-delay=".3s">
                        <h3 className="brand-showcase__title">Authorized Brands We Deal In</h3>
                        
                        {product.id === 'tmt-bars' || product.id === 'cement' || product.id === 'rmc' || product.id === 'paints' ? (
                            <div className="tmt-brand-marquee">
                                <div className="tmt-brand-marquee__inner">
                                    <div className="tmt-brand-marquee__group">
                                        {(product.id === 'tmt-bars' 
                                            ? [tmtLogo1, tmtLogo2, tmtLogo3, tmtLogo5, tmtLogo6, tmtLogo7] 
                                            : (product.id === 'cement'
                                                ? [cementLogoNuvoco, cementLogoUltraTech, cementLogoPrism, cementLogoBirlaShakti, cementLogoACC, cementLogoAmbuja]
                                                : (product.id === 'rmc'
                                                    ? [cementLogoNuvoco, cementLogoUltraTech, cementLogoACC, cementLogoAmbuja]
                                                    : [paintLogoAsian, paintLogoBerger, paintLogoBirlaOpus, paintLogoDulux, paintLogoNerolac]
                                                  )
                                              )
                                        ).map((logo, idx) => (
                                            <div className="tmt-brand-marquee__item" key={idx}>
                                                <img src={logo} alt={`Brand ${idx + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="tmt-brand-marquee__group" aria-hidden="true">
                                        {(product.id === 'tmt-bars' 
                                            ? [tmtLogo1, tmtLogo2, tmtLogo3, tmtLogo5, tmtLogo6, tmtLogo7] 
                                            : (product.id === 'cement'
                                                ? [cementLogoNuvoco, cementLogoUltraTech, cementLogoPrism, cementLogoBirlaShakti, cementLogoACC, cementLogoAmbuja]
                                                : (product.id === 'rmc'
                                                    ? [cementLogoNuvoco, cementLogoUltraTech, cementLogoACC, cementLogoAmbuja]
                                                    : [paintLogoAsian, paintLogoBerger, paintLogoBirlaOpus, paintLogoDulux, paintLogoNerolac]
                                                  )
                                              )
                                        ).map((logo, idx) => (
                                            <div className="tmt-brand-marquee__item" key={`dup-${idx}`}>
                                                <img src={logo} alt={`Brand ${idx + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="brand-showcase__grid">
                                {product.brands.map((brand, bIdx) => {
                                    const brandName = typeof brand === 'object' ? brand.name : brand;
                                    const brandLogo = typeof brand === 'object' && brand.logo ? brand.logo : brandLogosMap[brandName];

                                    return (
                                        <div 
                                            className={`brand-showcase__item ${brandLogo ? 'brand-showcase__item--logo' : ''}`} 
                                            key={bIdx}
                                            title={brandName}
                                        >
                                            {brandLogo ? (
                                                <div className="brand-showcase__logo-wrapper">
                                                    <img 
                                                        src={brandLogo} 
                                                        alt={`${brandName} Logo`} 
                                                        className="brand-showcase__logo-img" 
                                                    />
                                                </div>
                                            ) : (
                                                <>
                                                    <i className="fa-solid fa-star text-warning me-2" style={{ fontSize: '12px' }}></i>
                                                    {brandName}
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Quote Form Section */}
            <div id="get-quote-section" className="container mt-80 mb-50 section-padding-two">
                <div className="row justify-content-center">
                    <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
                        <div className="quote-form__wrapper">
                            <div className="text-center mb-40">
                                <h3>Request a Quote for {product.title}</h3>
                                <p>Fill out the form below to receive a customized pricing quote and delivery timeline within 24 hours.</p>
                            </div>

                            {isSubmitted ? (
                                <div className="text-center py-5 wow zoomIn" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                    <i className="fa-solid fa-circle-check text-success mb-3" style={{ fontSize: '64px' }}></i>
                                    <h4 className="text-white font-weight-bold">Thank You!</h4>
                                    <p className="px-4 mt-10 mb-0" style={{ color: '#b0b8c3' }}>
                                        Your quote request for <strong>{product.title}</strong> has been received. 
                                        Our representative will call you on your registered phone number or email shortly!
                                    </p>
                                    <button 
                                        className="btn btn-outline-light mt-30 px-4 py-2" 
                                        onClick={() => setIsSubmitted(false)}
                                        style={{ borderRadius: '30px' }}
                                    >
                                        Send Another Request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="row">
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="name">Full Name *</label>
                                        <input 
                                            type="text" 
                                            id="name"
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            required 
                                            placeholder="Enter your name" 
                                        />
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input 
                                            type="tel" 
                                            id="phone"
                                            name="phone" 
                                            value={formData.phone} 
                                            onChange={handleChange} 
                                            required 
                                            placeholder="Enter your phone number" 
                                        />
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="email">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email"
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            placeholder="Enter your email address" 
                                        />
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="variant">Preferred Option / Variant</label>
                                        <select 
                                            id="variant"
                                            name="variant" 
                                            value={formData.variant} 
                                            onChange={handleChange}
                                        >
                                            {product.variants.map((v, idx) => (
                                                <option key={idx} value={v.name}>{v.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="productName">Product Category</label>
                                        <input 
                                            type="text" 
                                            id="productName"
                                            name="productName" 
                                            value={formData.productName} 
                                            disabled 
                                            style={{ opacity: 0.7, cursor: 'not-allowed' }}
                                        />
                                    </div>
                                    <div className="col-md-6 quote-form__field">
                                        <label htmlFor="quantity">Estimated Quantity Required</label>
                                        <input 
                                            type="text" 
                                            id="quantity"
                                            name="quantity" 
                                            value={formData.quantity} 
                                            onChange={handleChange} 
                                            placeholder="e.g. 50 Tons, 100 Bags, etc." 
                                        />
                                    </div>
                                    <div className="col-12 quote-form__field">
                                        <label htmlFor="message">Requirement Details / Special Instructions</label>
                                        <textarea 
                                            id="message"
                                            name="message" 
                                            rows="4" 
                                            value={formData.message} 
                                            onChange={handleChange} 
                                            placeholder="Mention specific delivery location, customized requirements or timing..."
                                        ></textarea>
                                    </div>
                                    <div className="col-12 mt-20">
                                        <button 
                                            type="submit" 
                                            className="quote-form__btn build_button"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Sending Request...
                                                </>
                                            ) : (
                                                <>
                                                    Get Customized Quote <i className="fa-solid fa-paper-plane ms-2"></i>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Lightbox Modal */}
            {lightbox.isOpen && (
                <div 
                    className="custom-lightbox-modal"
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 99999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'fadeIn 0.25s ease'
                    }}
                >
                    {/* Close Button */}
                    <button 
                        onClick={closeLightbox}
                        style={{
                            position: 'absolute',
                            top: '25px',
                            right: '25px',
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            fontSize: '36px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            zIndex: 100000
                        }}
                        className="lightbox-close"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    {/* Left Arrow */}
                    {lightbox.images.length > 1 && (
                        <button 
                            onClick={prevImage}
                            style={{
                                position: 'absolute',
                                left: '30px',
                                background: 'rgba(255,255,255,0.05)',
                                border: 'none',
                                color: '#fff',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                zIndex: 100000
                            }}
                            className="lightbox-arrow"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    )}

                    {/* Image Frame */}
                    <div 
                        style={{
                            maxWidth: '85%',
                            maxHeight: '75%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={lightbox.images[lightbox.currentIndex]} 
                            alt={lightbox.title} 
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                borderRadius: '4px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                                animation: 'zoomIn 0.3s ease'
                            }}
                        />
                    </div>

                    {/* Right Arrow */}
                    {lightbox.images.length > 1 && (
                        <button 
                            onClick={nextImage}
                            style={{
                                position: 'absolute',
                                right: '30px',
                                background: 'rgba(255,255,255,0.05)',
                                border: 'none',
                                color: '#fff',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                zIndex: 100000
                            }}
                            className="lightbox-arrow"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    )}

                    {/* Caption / Title */}
                    <div 
                        style={{
                            marginTop: '25px',
                            textAlign: 'center',
                            color: '#fff',
                            zIndex: 100000
                        }}
                    >
                        <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '600', marginBottom: '5px' }}>{lightbox.title}</h4>
                        {lightbox.images.length > 1 && (
                            <span style={{ fontSize: '14px', color: '#b0b8c3' }}>
                                Image {lightbox.currentIndex + 1} of {lightbox.images.length}
                            </span>
                        )}
                    </div>
                </div>
            )}
            {/* TMT Brand Details Modal */}
            {detailsModal.isOpen && detailsModal.brandId && brandDetailsData[detailsModal.brandId] && (
                <div className="tmt-details-modal-overlay" onClick={closeDetailsModal}>
                    <div className="tmt-details-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="tmt-details-modal-close" onClick={closeDetailsModal} aria-label="Close details">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        
                        <div className="tmt-details-modal-header">
                            <div className="tmt-details-modal__header-logo-container">
                                <img 
                                    src={brandDetailsData[detailsModal.brandId].logo} 
                                    alt={`${brandDetailsData[detailsModal.brandId].name} Logo`} 
                                    className="tmt-details-modal__header-logo"
                                />
                            </div>
                            <div className="tmt-details-modal__header-info">
                                <h3>{brandDetailsData[detailsModal.brandId].name}</h3>
                                <p className="tmt-details-modal__tagline">{brandDetailsData[detailsModal.brandId].tagline}</p>
                            </div>
                        </div>
                        
                        <div className="tmt-details-modal-body">
                            <p className="tmt-details-modal__description">{brandDetailsData[detailsModal.brandId].description}</p>
                            
                            <div className="tmt-details-modal__section">
                                <h5 className="tmt-details-modal__section-title">
                                    <span className="title-indicator"></span> What {brandDetailsData[detailsModal.brandId].name} is Known For
                                </h5>
                                <ul className="tmt-details-modal__list">
                                    {brandDetailsData[detailsModal.brandId].knownFor.map((item, i) => (
                                        <li key={i}>
                                            <i className="fa-solid fa-circle-check list-icon"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="tmt-details-modal__section">
                                <h5 className="tmt-details-modal__section-title">
                                    <span className="title-indicator"></span> Brand History
                                </h5>
                                <p className="tmt-details-modal__text">{brandDetailsData[detailsModal.brandId].history}</p>
                            </div>
                            
                            <div className="tmt-details-modal__section">
                                <h5 className="tmt-details-modal__section-title">
                                    <span className="title-indicator"></span> Why Builders Trust It
                                </h5>
                                <ul className="tmt-details-modal__list">
                                    {brandDetailsData[detailsModal.brandId].whyTrust.map((item, i) => (
                                        <li key={i}>
                                            <i className="fa-solid fa-circle-check list-icon"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="tmt-details-modal-footer">
                            <button className="tmt-details-modal__btn-secondary" onClick={closeDetailsModal}>
                                Close
                            </button>
                            <button className="tmt-details-modal__btn-primary" onClick={handleGetQuoteClick}>
                                Request Custom Quote <i className="fa-solid fa-paper-plane ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailMain;
