import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import brand1 from "../../../assets/img/brand/brand-1.png.webp";
import brand2 from "../../../assets/img/brand/brand-2.png.webp";
import brand3 from "../../../assets/img/brand/brand-3.png.webp";
import brand4 from "../../../assets/img/brand/brand-4.png.webp";
import brand5 from "../../../assets/img/brand/brand-5.png.webp";
import brand6 from "../../../assets/img/brand/brand-6.png.webp";
import brand7 from "../../../assets/img/brand/brand-7.png.webp";
import brand8 from "../../../assets/img/brand/brand-8.png.webp";
import image1 from "../../../assets/img/banner/banner-1.jpg.webp";
import image2 from "../../../assets/img/banner/banner-2.jpg.webp";
import image3 from "../../../assets/img/banner/banner-3.jpg.webp"; 
import banner from "../../../assets/img/service/service-1.jpg.webp"; 

const BannerThree = () => {
    const slideControl = {
        spaceBetween: 25,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.banner_next',
            prevEl: '.banner_prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.3,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 1.6,
            },
            1600: {
                slidesPerView: 1.7,
            },
        },    
    };
  	return (
		<>
            <div className="banner__three">
                <div className="container">
                    <div className="row al-end">
                        <div className="col-lg-9 lg-mb-10">
                            <div className="banner__three-content title_split_anim">
                                <h1>Modern <img className="wow img_left_animation" src={banner} alt="image" /></h1>
                                <h1>Building Concepts</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeInDown" data-wow-delay=".4s">
                            <div className="slider-arrow jc-end lg-jc-left mb-10">
                                <div className="slider-arrow-prev banner_prev">
                                    <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
                                </div>
                                <div className="slider-arrow-next banner_next">
                                    <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay=".5s">
                        <div className="col-xl-12">
                            <div className="banner__three-slider">
                                <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl} >
                                    <SwiperSlide><img src={image1} alt="image" /></SwiperSlide>
                                    <SwiperSlide><img src={image2} alt="image" /></SwiperSlide>
                                    <SwiperSlide><img src={image3} alt="image" /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="scroll__slider">
                                <div className="text-slide">
                                    <div className="sliders text_scroll">
                                        <ul>
                                            <li><img src={brand1} alt="image" /></li>
                                            <li><img src={brand2} alt="image" /></li>
                                            <li><img src={brand3} alt="image" /></li>
                                            <li><img src={brand4} alt="image" /></li>
                                            <li><img src={brand5} alt="image" /></li>
                                            <li><img src={brand6} alt="image" /></li>
                                            <li><img src={brand7} alt="image" /></li>
                                            <li><img src={brand8} alt="image" /></li>
                                        </ul>
                                    </div>
                                    <div className="sliders text_scroll">
                                        <ul>
                                            <li><img src={brand1} alt="image" /></li>
                                            <li><img src={brand2} alt="image" /></li>
                                            <li><img src={brand3} alt="image" /></li>
                                            <li><img src={brand4} alt="image" /></li>
                                            <li><img src={brand5} alt="image" /></li>
                                            <li><img src={brand6} alt="image" /></li>
                                            <li><img src={brand7} alt="image" /></li>
                                            <li><img src={brand8} alt="image" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
		</>
	);
};

export default BannerThree;
