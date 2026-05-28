import React from 'react';
import icon1 from '../../../../assets/img/icon/star.svg';
import icon2 from '../../../../assets/img/icon/star-dark.svg';
import { Link } from 'react-router-dom';

const brandsList = [
    { name: "TATA TMT", link: "/products/tmt-bars" },
    { name: "UltraTech Cement", link: "/products/cement" },
    { name: "Asian Paints", link: "/products/paints" },
    { name: "Polycab Wires", link: "/products/electrical-items" },
    { name: "Ambuja Cement", link: "/products/cement" },
    { name: "Berger Paints", link: "/products/paints" },
    { name: "Havells Wires", link: "/products/electrical-items" },
    { name: "Fenesta Windows", link: "/products/doors-windows" },
    { name: "Kamdhenu Steel", link: "/products/tmt-bars" },
    { name: "ACC Cement", link: "/products/cement" },
    { name: "KONE Lifts", link: "/products/lifts" },
    { name: "CenturyPly", link: "/products/doors-windows" }
];

const TextSlide = () => {
    return (
        <>
        <div className="scroll__slider pt-30 pb-30">
            <div className="text-slide">
                <div className="sliders text_scroll">
                    <ul>
                        {brandsList.map((brand, id) => (
                            <li key={id}>
                                <img className="dark-n" src={icon1} alt="icon"/>
                                <img className="light-n" src={icon2} alt="icon"/>
                                <Link to={brand.link}>{brand.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sliders text_scroll">
                    <ul>
                        {brandsList.map((brand, id) => (
                            <li key={id}>
                                <img className="dark-n" src={icon1} alt="icon"/>
                                <img className="light-n" src={icon2} alt="icon"/>
                                <Link to={brand.link}>{brand.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>            
        </>
    );
};

export default TextSlide;