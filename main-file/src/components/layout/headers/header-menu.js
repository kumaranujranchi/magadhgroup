import { Link } from 'react-router-dom';
import React from 'react';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li className='menu-item-has-children'><Link to='/portfolio/3-columns'>Portfolio</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/gallery'>Filterable Gallery</Link></li>
                        <li className='menu-item-has-children'><Link to='#'>Project Grid</Link>
                            <ul className='sub-menu'>
                                <li><Link to='/portfolio/2-columns'>2 Columns</Link></li>
                                <li><Link to='/portfolio/3-columns'>3 Columns</Link></li>
                                <li><Link to='/portfolio/4-columns'>4 Columns</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/portfolio/healthcare-facility'>Project Details</Link></li>
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
        </>
    );
};

export default MainMenu;