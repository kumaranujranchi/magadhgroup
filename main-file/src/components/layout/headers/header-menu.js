import { Link } from 'react-router-dom';
import React from 'react';

const MainMenu = () => {
    return (
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about-us'>About Us</Link></li>
                <li className='menu-item-has-children'><Link to='/products'>Products</Link>
                    <ul className='sub-menu'>
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
                </li>
                <li className='menu-item-has-children'><Link to='#'>Resources</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/resources/calculators'>Calculators</Link></li>
                        <li><Link to='/resources/news'>News</Link></li>
                        <li><Link to='/resources/price-trend'>Price Trend</Link></li>
                        <li><Link to='/resources/cost-estimator'>Cost Estimator</Link></li>
                    </ul>
                </li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact-us'>Contact Us</Link></li>      
            </ul>  
    );
};

export default MainMenu;