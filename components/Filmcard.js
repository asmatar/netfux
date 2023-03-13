import React from 'react'
import Image from 'next/image'
import { modalOpen } from '../redux/modalReducer'
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
    <div className={`relative flex-col cursor-pointer h-28 min-w-[180px] md:h-36 md:min-w-[260px]`} onClick={()=>handleModal(film.id, type)}å>
      <div class="transition duration 200 h-full group">
        <Image
          data-imagefilmid={film.id}
          src={`https://image.tmdb.org/t/p/w500${
            film?.backdrop_path || film?.poster_path
          }`}
          className="rounded-sm object-cover md:rounded group-hover:translate-y-[-62px] group-hover:scale-150 transition-all duration-500 group-hover:z-20 group-hover:shadow-xl "
          fill
          alt="film card image"
        />
        <div class="invisible absolute top-[50%] left-0 right-0 p-2 bg-[#141414] flex flex-col rounded-sm items-start text-xs justify-end gap-y-2 group-hover:shadow-xl 
                     transition-all  duration-500 group-hover:z-20 group-hover:visible group-hover:scale-150 group-hover:translate-y-[75%] -z-10">
          <h6 className="font-NetflixBold self-start w-full">{film?.title || film?.name}</h6>
          <p className="">{film?.overview?.substring(0, 100) + "..."}</p> 
        </div>
      </div>
    </div>
  )
}

export default FilmCard
{/* <> */}
  {/* <div className={`relative flex flex-col cursor-pointer transition duration-200 ease-out md:hover:scale-105 h-28 min-w-[180px] md:h-36 md:min-w-[260px]`} onClick={()=>handleModal(film.id, type)}>
    <Image
      data-imagefilmid={film.id}
      src={`https://image.tmdb.org/t/p/w500${
        film?.backdrop_path || film?.poster_path
      }`}
      className="rounded-sm object-cover md:rounded"
      fill
      alt="film card image"
    />
    <div className="absolute flex flex-col items-start justify-end gap-y-2 h-full bottom-0 left-0 w-full bg-black/40 text-xs hover:opacity-100 hover:visible visible opacity-0 transition duration-200 ease">
      <h6 className="font-NetflixBold self-start">{film?.title || film?.name}</h6>
      <p className="">{film?.overview?.substring(0, 100) + "..."}</p> 
    </div>
  </div>  */}
  
{/*   </> */}