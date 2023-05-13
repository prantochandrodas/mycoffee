import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Slider from 'react-slick';

const Banners = () => {
    const [datas,setDatas]=useState([]);
    useEffect(()=>{
        fetch('banner.json')
        .then(res=>res.json())
        .then(result=>setDatas(result))
    },[]);
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }
    // function SampleHeight(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{ ...style, height:'600px' }}
    //             onClick={onClick}
    //         />
    //     );
    // }
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        fadeSpeed: 4000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        nextArrow: <SamplePrevArrow></SamplePrevArrow>
    };
    return (
        <div>
             <Slider {...settings}>
            {
                datas.map(data=><Banner
                    data={data}
                ></Banner>)
            }
            </Slider>
        </div>
    );
};

export default Banners;