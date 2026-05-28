"use client"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) =>
    value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) =>
    value == activeMenus ? { display: "block" } : { display: "none" };
  return (
    <>    
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about-us'>About Us</Link></li>
        <li className='menu-item-has-children'><Link to='/products'>Products</Link>
            <ul className='sub-menu' style={activeSubMenu("products")}>
                <li><Link to='/products'>All Products</Link></li>
                <li><Link to='/products/tmt-bars'>TMT Bars</Link></li>
                <li><Link to='/products/cement'>Cement</Link></li>
                <li><Link to='/products/sand-chips-brick'>Sand, Chips & Brick</Link></li>
                <li><Link to='/products/rmc'>RMC</Link></li>
                <li><Link to='/products/doors-windows'>Doors & Windows</Link></li>
                <li><Link to='/products/electrical-items'>Electrical</Link></li>
                <li><Link to='/products/paints'>Paint</Link></li>
                <li><Link to='/products/lifts'>Lift & Elevator</Link></li>
                <li><Link to='/products/structure-iron'>Structure (Iron)</Link></li>
                <li><Link to='/products/home-appliances'>Home Appliance</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("products")}`} onClick={() => active("products")}></a>
        </li>
        <li className='menu-item-has-children'><Link to='#'>Resources</Link>
            <ul className='sub-menu' style={activeSubMenu("resources")}>
                <li><Link to='/resources/calculators'>Cost Estimator</Link></li>
                <li><Link to='/resources/current-price'>Current Price</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("resources")}`} onClick={() => active("resources")}></a>
        </li>
		<li className='menu-item-has-children'><Link to='/services'>Services</Link>
            <ul className='sub-menu' style={activeSubMenu("services")}>
				<li><Link to='/services'>Services 01</Link></li>
				<li><Link to='/services-two'>Services 02</Link></li>
				<li><Link to='/services/business-model'>Services Details</Link></li>
			</ul>
            <a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a>
		</li>
        <li className='menu-item-has-children'><Link to='/contact'>Contact</Link>
            <ul className='sub-menu' style={activeSubMenu("contact")}>
                <li><Link to='/contact'>Contact Style 01</Link></li>
                <li><Link to='/contact-two'>Contact Style 02</Link></li>
                <li><Link to='/contact-three'>Contact Style 03</Link></li>
                <li><Link to='/contact-four'>Contact Style 04</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("contact")}`} onClick={() => active("contact")}></a>
        </li>      
    </ul>  
    </>
  );
};

export default ResponsiveMenu;