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
                        <li><Link to='/products/sand-chips-brick'>Sand, Chips & Brick</Link></li>
                        <li><Link to='/products/rmc'>RMC</Link></li>
                        <li><Link to='/products/doors-windows'>Doors & Windows</Link></li>
                        <li><Link to='/products/electrical-items'>Electrical</Link></li>
                        <li><Link to='/products/paints'>Paint</Link></li>
                        <li><Link to='/products/lifts'>Lift & Elevator</Link></li>
                        <li><Link to='/products/structure-iron'>Structure (Iron)</Link></li>
                        <li><Link to='/products/home-appliances'>Home Appliance</Link></li>
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link to='#'>Resources</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/resources/calculators'>Cost Estimator</Link></li>
                        <li><Link to='/resources/current-price'>Current Price</Link></li>
                    </ul>
                </li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/contact-us'>Contact Us</Link></li>      
            </ul>  
    );
};

export default MainMenu;