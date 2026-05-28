import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../../data/portfolio-data';
import aboutUsVideo from '../../../assets/video/aboutus-video.mp4';
import icon2 from '../../../assets/img/icon/star-dark.svg';

const Video = () => {
    return (
        <>
            <div className="video__two">
                <video 
                    src={aboutUsVideo} 
                    loop
                    muted
                    autoPlay
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -2
                    }}
                />
                <div className="scroll__slider">
                    <div className="text-slide">
                        <div className="sliders text_scroll">
                            <ul>
                                {portfolioData?.map((data, id) => (
                                    <li key={id}><img src={icon2} alt="icon"/><Link to={`/portfolio/${data.id}`}>{data.title.split(' ').slice(0, 1).join(' ')}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className="sliders text_scroll">
                            <ul>
                                {portfolioData?.map((data, id) => (
                                    <li key={id}><img src={icon2} alt="icon"/><Link to={`/portfolio/${data.id}`}>{data.title.split(' ').slice(0, 1).join(' ')}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Video;