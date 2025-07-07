import React from 'react';
import "./home-slider.css";
import {Swiper, SwiperSlide}  from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



function HomeSlider() {
  return (
    <Swiper
      id="swiper-container"
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{clickable:true}}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide><h1>Example 1</h1></SwiperSlide>
      <SwiperSlide><h1>Example 2</h1></SwiperSlide>
      <SwiperSlide><h1>Example 3</h1></SwiperSlide>
      
    </Swiper>
  )
}

export default HomeSlider