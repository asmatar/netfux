import React, {useState} from 'react'
import Image from 'next/image'
//import Modal from './Modal'
//import dynamic from 'next/dynamic'


const FilmCard = ({film, handleModal}) => {
  console.log("film card",film.id)
  return (
    <>
    <div className={`relative flex flex-col cursor-pointer transition duration-200 ease-out md:hover:scale-105 h-28 min-w-[180px] md:h-36 md:min-w-[260px]`} onClick={()=>handleModal(film.id)}>
      <Image
        data-imagefilmid={film.id}
        src={`https://image.tmdb.org/t/p/w500${
          film?.backdrop_path || film?.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt="film card image"
      />
      <p className="absolute flex h-full items-end bottom-0 left-0 w-full bg-black/40 text-xs hover:opacity-100 hover:visible visible opacity-0 transition duration-200 ease">{film?.overview.substring(0, 100) + "..."}</p>
    </div> 
 
    </>
  )
}

export default FilmCard