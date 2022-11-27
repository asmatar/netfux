/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react';
import Image from "next/image"
import {useSelector} from "react-redux"
import baseUrl from '../constant/movie'
import Button from './UI/Button';
function Banner() {
  const netflixOriginals = useSelector((state) => state.films.netflixOriginals)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])
  const handleClickModal = () => { }
  return <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-4 pl-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
          alt="banner image movie"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <Button className="bannerButton bg-white text-black">
          Play
        </Button>
        <Button className="bannerButton bg-[gray]/70" handleClick={handleClickModal}>
          More Info
        </Button>
      </div>
    </div>
}

export default Banner;