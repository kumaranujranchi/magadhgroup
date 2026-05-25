import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import image from "../../assets/img/about/about-4.jpg";
import bgImage from "../../assets/img/portfolio/portfolio-8.jpg";

const missionCards = [
    {
        icon: "flaticon-networking",
        title: "CNF & Distributorship",
        description: "Comprehensive distribution network with reliable supply chain management."
    },
    {
        icon: "fa-sharp fa-light fa-truck",
        title: "Logistics & Delivery",
        description: "Efficient logistics solutions ensuring timely delivery to your doorstep."
    },
    {
        icon: "flaticon-consultation",
        title: "Material Consultancy",
        description: "Expert guidance on material selection and project requirements."
    },
    {
        icon: "flaticon-handshake",
        title: "Contractor Connect",
        description: "Connecting you with verified contractors and construction professionals."
    }
];

const AboutMain = () => {
    const slideControl = {
        spaceBetween: 25,
        slidesPerView: 2,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".mission_next",
            prevEl: ".mission_prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1.5,
            },
            992: {
                slidesPerView: 2,
            }
        },
    };

    return (
        <>
            <div className="mission__area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 lg-mb-25">
                            <div className="mission__area-left mr-40 xl-mr-0">
                                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Mission</span>
                                <h2 className="title_split_anim">Dedicated to Delivering Value and Excellence</h2>
                                <div className="slider-arrow jc-start lg-jc-start mt-40 wow fadeInLeft" data-wow-delay=".6s">
                                    <div className="slider-arrow-prev mission_prev">
                                        <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
                                    </div>
                                    <div className="slider-arrow-next mission_next">
                                        <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="mission__area-right wow fadeInUp" data-wow-delay=".5s">
                                <Swiper modules={[Autoplay, Navigation]} {...slideControl}>
                                    {missionCards.map((card, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="experience__area-list-item">
                                                <i className={card.icon}></i>
                                                <div className="experience__area-list-item-content">
                                                    <h4>{card.title}</h4>
                                                    <p>{card.description}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__five section-padding pt-0">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-lg-5 lg-mb-25">
                            <div className="about__five-image wow img_left_animation">
                                <img src={image} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about__five-right ml-70 xl-ml-0">
                                <div className="about__five-right-title">
                                    <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">About Our Company</span>
                                    <h2 className="title_split_anim">Trusted Partner in Construction and Design</h2>
                                </div>
                                <div className="features wow fadeInUp" data-wow-delay=".3s" style={{backgroundImage: `url(${bgImage})`}}>
                                    <h3>Building Trust<br/>Since 1989</h3>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Our journey began with a commitment to excellence, and that commitment remains at the core of our operations today. We’ve grown from a small local business into a trusted partner for both residential and commercial.</p>
                                <div className="item_bounce">
                                    <Link className="build_button mt-20" to="/portfolio">See Projects<i className="flaticon-right-up"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMain;