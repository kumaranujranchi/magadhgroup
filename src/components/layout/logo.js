import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ isLight = false }) => {
    return (
        <Link to='/' style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <span style={{ 
                fontSize: '26px', 
                fontWeight: '800', 
                color: isLight ? 'var(--text-white)' : 'var(--text-heading-color)', 
                fontFamily: 'var(--heading-font)', 
                letterSpacing: '-0.5px'
            }}>
                Magadh <span style={{ color: isLight ? 'var(--primary-color-1)' : '#000000' }}>Group</span>
            </span>
        </Link>
    );
};

export default Logo;
