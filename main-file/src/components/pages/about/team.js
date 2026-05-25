import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
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
    const slideControl = {
        spaceBetween: 25,
        slidesPerView: 4,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".team_next",
            prevEl: ".team_prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        },
    };

    return (
        <div className="team__area section-padding">
            <div className="container">
                <div className="row mb-35 al-end">
                    <div className="col-lg-8 col-md-7">
                        <div className="team__area-title lg-mb-20">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Contract Services</span>
                            <h2 className="title_split_anim">Professionals on Contract Basis</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="slider-arrow jc-end lg-jc-center mb-10">
                            <div className="slider-arrow-prev team_prev">
                                <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
                            </div>
                            <div className="slider-arrow-next team_next">
                                <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper modules={[Autoplay, Navigation]} {...slideControl}>
                            {contractorTeam.map((data, id) => (
                                <SwiperSlide key={id} className="h-100">
                                    <div className="team__area-item h-100">
                                        <img className="img_full" src={data.image} alt="image" />
                                        <div className="team__area-item-content t-center pt-20">
                                            <h5>{data.name}</h5>
                                            <span>{data.position}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;