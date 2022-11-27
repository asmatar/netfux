import React from 'react'
import Image from 'next/image'

const Filmcard = ({film}) => {
    console.log(film)
  return (
    <div
    className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    /* onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true)
    }} */
    >
    <Image
      src={`https://image.tmdb.org/t/p/w500${
        film?.backdrop_path || film?.poster_path
      }`}
      className="rounded-sm object-cover md:rounded"
      layout="fill"
      alt="film card image"
    />
  </div>
  )
}

export default Filmcard