import React from 'react';
import team1 from "../../assets/img/team/team-1.jpg";
import team2 from "../../assets/img/team/team-2.jpg";
import team3 from "../../assets/img/team/team-3.jpg";
import team4 from "../../assets/img/team/team-4.jpg";
import team5 from "../../assets/img/team/member-1.jpg";

const contractorTeam = [
    {
        name: "Site Engineer",
        position: "On Contract Basis",
        image: team1
    },
    {
        name: "Architect",
        position: "On Contract Basis",
        image: team2
    },
    {
        name: "Plumber",
        position: "On Contract Basis",
        image: team3
    },
    {
        name: "Painter",
        position: "On Contract Basis",
        image: team4
    },
    {
        name: "Electrician",
        position: "On Contract Basis",
        image: team5
    }
];

const Team = () => {
    return (
        <div className="team__area section-padding">
            <div className="container">
                <div className="row mb-35">
                    <div className="col-xl-12">
                        <div className="team__area-title t-center">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Contract Services</span>
                            <h2 className="title_split_anim">Professionals on Contract Basis</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {contractorTeam.map((data, id) => (
                        <div className="col-lg-4 col-md-6 mt-25" key={id}>
                            <div className="team__area-item">
                                <img className="img_full" src={data.image} alt="image" />
                                <div className="team__area-item-content t-center pt-20">
                                    <h5>{data.name}</h5>
                                    <span>{data.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;