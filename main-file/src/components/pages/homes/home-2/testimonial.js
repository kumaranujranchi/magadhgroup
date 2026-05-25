import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import testimonialData from "../../../data/testimonial-data";
import brand1 from "../../../../assets/img/brand-logo/1.png";
import brand2 from "../../../../assets/img/brand-logo/2.png";
import brand3 from "../../../../assets/img/brand-logo/3.png";
import brand4 from "../../../../assets/img/brand-logo/4.png";
import brand5 from "../../../../assets/img/brand-logo/5.png";
import brand6 from "../../../../assets/img/brand-logo/6.png";
import brand7 from "../../../../assets/img/brand-logo/7.png";
import brand8 from "../../../../assets/img/brand-logo/8.png";
import brand9 from "../../../../assets/img/brand-logo/9.png";
import brand10 from "../../../../assets/img/brand-logo/10.png";
import brand11 from "../../../../assets/img/brand-logo/11.png";
import brand12 from "../../../../assets/img/brand-logo/12.png";
import brand13 from "../../../../assets/img/brand-logo/13.png";

const brandLogos = [
    brand1, brand2, brand3, brand4, brand5, brand6, brand7,
    brand8, brand9, brand10, brand11, brand12, brand13
];

const TestimonialTwo = () => {

    const slideControl = {
        spaceBetween: 25,
        centeredSlides: true,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.testimonial_next',
            prevEl: '.testimonial_prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            1025: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 4,
            },
        },
    };

    return (
        <>
            <div className="brand__area section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 scroll__slider">
                            <div className="text-slide">
                                <div className="sliders text_scroll">
                                    <ul>
                                        {brandLogos.map((logo, index) => (
                                            <li key={index}><img src={logo} alt="brand logo" /></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sliders text_scroll">
                                    <ul>
                                        {brandLogos.map((logo, index) => (
                                            <li key={index}><img src={logo} alt="brand logo" /></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            <div className="testimonial__two section-padding">
                <div className="testimonial_two_slide wow fadeInUp data_cursor" data-wow-delay=".5s" data-cursor-text="Drag">
                    <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl} >
                        {testimonialData?.map((data, id) => (
                            <SwiperSlide key={id}>
                                <div className="testimonial__one-item">
                                    <div className="testimonial__one-item-client">
                                        <div className="testimonial__one-item-client-image">
                                            <img src={data.avatar} alt="image" />
                                        </div>
                                        <div className="testimonial__one-item-client-title">
                                            <h4>{data.name}</h4>
                                            <span>{data.position}</span>
                                        </div>
                                    </div>
                                    <p>{data.des}</p>
                                    <div className="testimonial__one-item-reviews">
                                        <i className="flaticon-star"></i>
                                        <i className="flaticon-star"></i>
                                        <i className="flaticon-star"></i>
                                        <i className="flaticon-star"></i>
                                        <i className="flaticon-star"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>     
        </>
    );
};

export default TestimonialTwo;