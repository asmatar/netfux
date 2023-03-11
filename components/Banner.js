/* eslint-disable jsx-a11y/alt-text */
import {useEffect, useState} from 'react';
import Image from "next/image"
import {useDispatch, useSelector} from "react-redux"
import baseUrl from '../constant/movie'
import {modalOpen} from "../redux/modalReducer"
import Loader from './UI/Loader';
import {useRouter} from "next/router";
import { getType } from '../utils/getType';

function Banner() {
  
  const [movie, setMovie] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()
  const netflixOriginals =  useSelector((state) => state.films.netflixOriginals)
  const topRated =  useSelector((state) => state.serie.topRated)

  const displayFilms = (router.pathname !== "/series") ? netflixOriginals : topRated ;
  const type = getType(router.pathname);

  useEffect(() => {
    setMovie(displayFilms[Math.floor(Math.random() * displayFilms.length)])
  }, [displayFilms])
  
  const handleModal = (id, type) => { 
    dispatch(modalOpen({id, type}))
  }

  return (
    movie 
      ?
        <>
        <div className="hidden md:flex flex-col justify-end space-y-2 mt-8 md:space-y-4 h-[45vw] pb-[4vw] lg:pb-[8vw] pl-4 big-phone:pl-6 lg:pl-12">
          <div className="flex items-center gap-x-2 self-start">
            <div className="absolute top-0 left-0 -z-10  w-screen h-[56.25vw] !bg-gradient">
              <Image
                fill
                src={`${baseUrl}/${movie?.backdrop_path || movie?.poster_path}`}
                className='object-cover'
                alt="banner image movie"
                />
            </div>
            </div>
              <h1 className="text-lg big-phone:2xl font-bold sm:text-2xl md:text-4xl lg:text-6xl">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-base lg:max-w-2xl lg:text-lg xl:text-xl">
                {movie?.overview.substring(0, 140) + "..."}
              </p>
            <div className="flex space-x-3 z-30" >
              <button className="bannerButton bg-white text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"/></svg>
                Play
              </button>
              <button className="bannerButton bg-[gray]/70 z-50" onClick={()=>handleModal(movie.id, type)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard"><path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"/></svg>
                More Info
              </button>
            </div>
          </div>
        </>
      :
      <Loader/>
  )    
}

export default Banner;