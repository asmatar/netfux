import React, {useState} from 'react'
import Image from 'next/image'
//import Modal from './Modal'
//import dynamic from 'next/dynamic'
import { modalOpen } from '../redux/modalReducer'
import { useDispatch } from 'react-redux'
const FilmCard = ({film/* , handleModal */}) => {


  const dispatch = useDispatch()
  const handleModal = (id) => { 
    console.log("id est : ",id)
    dispatch(modalOpen(id))
  }
  
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
        <div className="absolute flex flex-col items-start justify-end gap-y-2 h-full bottom-0 left-0 w-full bg-black/40 text-xs hover:opacity-100 hover:visible visible opacity-0 transition duration-200 ease">
          <h6 className="font-NetflixBold self-start">{film?.title}</h6>
          <p className="">{film?.overview?.substring(0, 100) + "..."}</p> 
        </div>
      </div> 
    </>
  )
}

export default FilmCard