import React from 'react'
import Films from './Films';
import { Swiper, SwiperSlide } from "swiper/react";
import {useRouter} from 'next/router';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Similar = ({similar}) => {
  const router = useRouter()
  const carouselCardStyle = router.pathname.includes("details") ? "!h-full" : ""
  const FilmCardDetailPageStyle = router.pathname.includes("details") ? "!h-[100%]" : ""

  const displayFilm = similar.map(film => (
    <SwiperSlide className={`${carouselCardStyle} !h-[200px] ${FilmCardDetailPageStyle} w-full  flex flex-col gap-y-2`} key={film.id}>
      <Films films={film}/>
    </SwiperSlide>
  ))

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full mb-16"
        style={{
          "--swiper-navigation-color": "#B9261C",
          "--swiper-navigation-size": "25px",
        }}
        breakpoints={{
          500: {
            slidesPerGroup: 2,
            slidesPerView: 2,
          },
          768: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          1280: {
            slidesPerGroup: 4,
            slidesPerView: 4,
          },
        }}
        >
        { displayFilm}
      </Swiper>
    </>
  )
}

export default Similar