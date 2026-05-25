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
        <li className='menu-item-has-children'><Link to='/products'>Products</Link>
            <ul className='sub-menu' style={activeSubMenu("products")}>
                <li><Link to='/products'>All Products</Link></li>
                <li><Link to='/products/tmt-bars'>TMT Bars</Link></li>
                <li><Link to='/products/cement'>Cement</Link></li>
                <li><Link to='/products/rmc'>RMC</Link></li>
                <li><Link to='/products/paints'>Paints</Link></li>
                <li><Link to='/products/electrical-items'>Electrical Items</Link></li>
                <li><Link to='/products/doors-windows'>Doors & Windows</Link></li>
                <li><Link to='/products/lifts'>Lifts & Elevators</Link></li>
                <li><Link to='/products/home-appliances'>Home Appliances</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("products")}`} onClick={() => active("products")}></a>
        </li>
		<li className='menu-item-has-children'><Link to='/services'>Services</Link>
            <ul className='sub-menu' style={activeSubMenu("services")}>
				<li><Link to='/services'>Services 01</Link></li>
				<li><Link to='/services-two'>Services 02</Link></li>
				<li><Link to='/services/business-model'>Services Details</Link></li>
			</ul>
            <a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a>
		</li>
        <li className='menu-item-has-children'><Link to='/blog'>Blog</Link>
            <ul className='sub-menu' style={activeSubMenu("blog")}>
                <li><Link to='/blog'>Blog Grid</Link></li>
                <li><Link to='/blog-standard'>Blog Standard</Link></li>
                <li><Link to='/blog/revamp-your-business-with-expert-consulting'>Blog Details</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("blog")}`} onClick={() => active("blog")}></a>
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