import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import image from "../../assets/img/about/about-4.png";
import bgImage from "../../assets/img/portfolio/portfolio-8.png";

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
                                        <SwiperSlide key={index} className="h-100">
                                            <div className="experience__area-list-item h-100">
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
                                    <h2 className="title_split_anim">Trusted Partner in Building Materials</h2>
                                </div>
                                <div className="features wow fadeInUp" data-wow-delay=".3s" style={{backgroundImage: `url(${bgImage})`}}>
                                    <h3>Building Trust<br/>Since 1995</h3>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    <strong>Magadh Group of Company</strong> is a leading building material supplier with over 30 years of proven expertise in the construction industry. As a trusted partner for builders, contractors, government projects, and individual homeowners, we provide high-quality construction materials including TMT Bars, Cement, Ready Mix Concrete, Paints, Electrical Items, Doors, Windows, Lifts, and Home Appliances — all under one roof.
                                </p>
                                <p className="wow fadeInUp mt-15" data-wow-delay=".7s">
                                    Established under our flagship ventures, <strong>Magadh Associates</strong> and <strong>Magadh Enterprises</strong>, the Magadh Group has become a pioneer in building material distribution by focusing on service excellence, product quality, competitive pricing, and timely delivery.
                                </p>
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