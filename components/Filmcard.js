import React from 'react'
import Image from 'next/image'
import { modalOpen } from '@/redux/modalReducer'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getType } from '../utils/getType';

const FilmCard = ({film}) => {

  const router = useRouter()
  const dispatch = useDispatch()
  const type = getType(router.pathname);
  
  const handleModal = (id, type) => { 
    dispatch(modalOpen({id, type}))
  }

  return (
    <div className={`relative flex flex-col cursor-pointer transition duration-200 ease-out md:hover:scale-105 h-28 min-w-[180px] md:h-36 md:min-w-[260px]`} onClick={()=>handleModal(film.id, type)}>
    <Image
      data-imagefilmid={film.id}
      src={`https://image.tmdb.org/t/p/w500${
        film?.backdrop_path || film?.poster_path
      }`}
      className="rounded-sm object-cover md:rounded"
      fill
      alt="film card image"
    />
    <div className="absolute flex flex-col items-start justify-end gap-y-2 h-full bottom-0 left-0 w-full bg-black/40 text-xs hover:opacity-100 hover:visible visible opacity-0 transition duration-200 ease px-1">
      <h6 className="font-NetflixBold self-start">{film?.title || film?.name}</h6>
      <p className="">{film?.overview?.substring(0, 100) + "..."}</p> 
    </div>
  </div> 
  )
}

export default FilmCard