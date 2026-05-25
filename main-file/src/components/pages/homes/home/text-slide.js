import React from 'react';
import portfolioData from '../../../data/portfolio-data';
import icon1 from '../../../assets/img/icon/star.svg';
import icon2 from '../../../assets/img/icon/star-dark.svg';
import { Link } from 'react-router-dom';

const TextSlide = () => {
    return (
        <>
        <div className="scroll__slider section-padding pt-0">
            <div className="text-slide">
                <div className="sliders text_scroll">
                    <ul>
                        {portfolioData?.map((data, id) => (
                            <li key={id}><img className="dark-n" src={icon1} alt="icon"/><img className="light-n" src={icon2} alt="icon"/><Link to={`/portfolio/${data.id}`}>{data.title.split(' ').slice(0, 1).join(' ')}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="sliders text_scroll">
                    <ul>
                        {portfolioData?.map((data, id) => (
                            <li key={id}><img className="dark-n" src={icon1} alt="icon"/><img className="light-n" src={icon2} alt="icon"/><Link to={`/portfolio/${data.id}`}>{data.title.split(' ').slice(0, 1).join(' ')}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>            
        </>
    );
};

export default TextSlide;