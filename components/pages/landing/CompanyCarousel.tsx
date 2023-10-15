"use client";

import "swiper/css";
import "swiper/css/autoplay";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { companiesThatTrustUs } from "@/lib/constants/companiesThatTrustUs";
import { altFromImgUrl } from "@/lib/utils";

const CompanyCarousel = () => {
  return (
    <Swiper
      slidesPerView='auto'
      centeredSlides
      spaceBetween={30}
      modules={[Autoplay]}
      autoplay={{
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        delay: 3000,
      }}
      loop
      autoHeight
    >
      {companiesThatTrustUs.map(({ height, src, width }, i) => (
        <SwiperSlide key={i} className='self-center' style={{ width }}>
          <Image alt={altFromImgUrl(src)} {...{ src, width: width, height }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CompanyCarousel;
