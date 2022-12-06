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
        <SwiperSlide className='w-full h-auto flex flex-col gap-y-2' key={film.id}>
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
      <div className="flex items-center gap-x-4">
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.068 7.0595L7.12001 9.13701L5.0425 10.085L7.12001 11.033L8.068 13.1105L9.01599 11.033L11.0935 10.085L9.01599 9.13701M16.136 0L18.153 4.034H15.1275L13.1105 0H11.0935L13.1105 4.034H10.085L8.068 0H6.051L8.068 4.034H5.0425L3.0255 0H2.017C0.917735 0 0 0.90765 0 2.017V14.119C0 15.2284 0.917735 16.136 2.017 16.136H18.153C18.6879 16.136 19.201 15.9235 19.5792 15.5452C19.9575 15.167 20.17 14.6539 20.17 14.119V0H16.136ZM18.153 14.119H2.017V2.491L3.80204 6.051H14.119L13.4836 7.43265L12.102 8.068L13.4836 8.70336L14.119 10.085L14.7544 8.70336L16.136 8.068L14.7544 7.43265L14.119 6.051H18.153V14.119Z" fill="#B91C1C"/>
        </svg>
          <h2 className="">Similar Movie</h2>
      </div>
      <div className="flex gap-x-4"> */}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full mb-20"
        style={{
          "--swiper-navigation-color": "#B9261C",
          "--swiper-navigation-size": "25px",
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