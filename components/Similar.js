import Image from 'next/image'
import React from 'react'
import Films from './Films';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";



const Similar = ({similar}) => {
    const displayFilm = similar.map(film => (
      <>
 {/*      <div className="flex flex-col gap-y-2 hover:scale-105 transition-all duration-200 ease" >
        <div className="flex-col flex relative h-[8vw] w-[13vw] overflow-hidden rounded">
          <Image
              alt="similar movie image"

              layout="fill"
              className=""
              src={`https://image.tmdb.org/t/p/w500${film?.backdrop_path || film?.poster_path }`}
          />
        </div>
        <p className="text-center text-sm">{film.title}</p>
      </div> */}
        <SwiperSlide className='w-full !h-[200px] flex flex-col gap-y-2' key={film.id}>
{/*           <div className="flex flex-col gap-y-2 hover:scale-105 transition-all duration-200 ease" >
            <div className="relative h-[10vw] w-[16vw] overflow-hidden rounded">
              <Image
                alt="similar movie image"
                layout="fill"
                className=""
                src={`https://image.tmdb.org/t/p/w500${film?.backdrop_path || film?.poster_path }`}
              />
            </div>
          </div>
          <p className="text-center text-sm">{film.title}</p> */}
          
            <Films films={film}/>
          
        </SwiperSlide>
       
      </>
    ))
  return (
    <>
{/*      <div className="w-48">
      <div className="flex gap-x-4"> */}
    
      
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
     {displayFilm}
{/*         <SwiperSlide className='w-full h-[200px]'>Slide 1</SwiperSlide>

        <SwiperSlide className='w-full h-[200px]'>
          <div className="flex flex-col gap-y-2 hover:scale-105 transition-all duration-200 ease" >
            <div className="flex-col flex relative h-[8vw] w-[13vw] overflow-hidden rounded">
              <Image
                alt="similar movie image"
                layout="fill"
                className=""
                src="/public/test.png"         
                src={`https://image.tmdb.org/t/p/w500${film?.backdrop_path || film?.poster_path }`}
              /> 
              <img src="/test.png" alt="" />
            </div>
            <p className="text-center text-sm">arthur {film.title} </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide> */}
      </Swiper>
{/*         {displayFilm}
      </div>
    </div> */}
    </>
  )
}

export default Similar