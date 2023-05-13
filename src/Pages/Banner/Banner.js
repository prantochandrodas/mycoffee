import React from 'react';
import Slider from 'react-slick';
import banner from '../../assets/banner/CafecitoMay2021-16.jpeg';
import banner2 from '../../assets/banner/FebBreakfastShoot-9.jpeg';
import banner3 from '../../assets/banner/_DSC4969-Edit.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    };
    return (
        <div>
            <div className='lg:pt-32 pb-10 lg:pb-60' style={{ backgroundImage: `url(${data.picture})`, backgroundSize: '100% 550px', backgroundRepeat: "no-repeat"}}>
                <section>
                    <div className="text-center">
                        <div className="">
                            <h2 className="text-4xl pt-10 text-[#ffffff] font-extrabold md:text-5xl lg:mt-0 relative">
                                {data?.about}
                            </h2>
                            <p className='lg:text-xl py-10 text-[#ffffff]' style={{filter:'brightness(400%)'}}>

                                {data?.title}
                            </p>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    );
};

export default Banner;