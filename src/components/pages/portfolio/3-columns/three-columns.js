import React, { useState } from 'react';
import portfolioData from '../../../data/portfolio-data';
import { Link } from 'react-router-dom';

const showPortfolioItem = 6;

const ThreeColumns = () => {
    const portfolioItem = portfolioData;
    const [items, setItems] = useState(portfolioItem);
    const [next, setNext] = useState(showPortfolioItem);
    const handleLoadData = () => {
        setNext(value => value + 2)
    }
    return (
        <div className="three__columns section-padding-three">
            <div className="container">
                <div className="row">
                    {portfolioItem?.slice(0, next)?.map((data, id) => (
                        <div className="col-lg-4 col-md-6 mt-25" key={id}>
                            <div className="portfolio__three-item">
                                <img src={data.image} alt="image" />
                                <div className="portfolio__three-item-content">
                                    <Link to={`/portfolio/${data.id}`}><i className="flaticon flaticon-right-up"></i></Link>
                                    <span>{data.subtitle}</span>
                                    <h4><Link to={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {next < items.length && (
                    <div className="row mt-70">
                        <div className="col-xl-12 t-center">
                            <button onClick={handleLoadData} className="build_button">Load More<i className="flaticon flaticon-right-up"></i></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ThreeColumns;