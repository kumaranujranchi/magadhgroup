import React from 'react';
import teamData from '../../../data/team-data';
import { Link } from 'react-router-dom';

const TeamMain = () => {
    return (
        <>
            <div className="team__three section-padding-three">
                <div className="container">
                    <div className="row">
                        {teamData?.slice(0, 6).map((data, id) => (
                            <div className="col-lg-4 col-md-6 mt-25" key={id}>
                                <div className="team__area-item">
                                    <img className="img_full" src={data.image} alt="image" />
                                    <div className="team__area-item-content">
                                        <span>{data.position}</span>
                                        <h4>{data.name}</h4>
                                        <div className="team__area-item-content-icon">
                                            <span className="fa-sharp fa-regular fa-share-nodes"></span>
                                            <div className="team__area-item-content-social">
                                                <ul>
                                                    {data.social_link.map((social, id) => (
                                                        <li key={id}><Link to={social.link} target={social.target}>{social.icon}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamMain;