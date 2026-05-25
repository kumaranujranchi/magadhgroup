import { Link } from 'react-router-dom';
import React from 'react';

const MainMenu = () => {
    return (
            <ul>
                <li><Link to='/'>Home</Link></li>
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
                <li className='menu-item-has-children'><Link to='/blog'>Blog</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/blog'>Blog Grid</Link></li>
                        <li><Link to='/blog-standard'>Blog Standard</Link></li>
                        <li><Link to='/blog/key-steps-to-ensure-a-smooth-building-process'>Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link to='/contact-us'>Contact Us</Link></li>      
            </ul>  
    );
};

export default MainMenu;