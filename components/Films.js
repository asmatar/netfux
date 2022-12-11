import React from 'react'
import Image from 'next/image'
import { removeFromMyList } from '../redux/favoriteReducer'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'

const Films = ({films}) => {
  const dispatch = useDispatch()
 const handleRemoveFromFavorite = (id) => {
  dispatch(removeFromMyList(id),
  toast.error('Remove from my favorite', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
  )
 }
 const favorite = useSelector(state => state.favorite.favorite)
 
 const sameMovie = favorite.find(item => item.id === films.id)
 const type = films.number_of_episodes !== undefined ? "tv" : "movie" 

  return (
    <>
      <div  className="flex flex-col gap-y-2 hover:scale-105 transition-all duration-200 ease relative" >
      <div className="relative h-[27vw] small-tab:h-[18vw] md:h-[14vw] md:w-[full] overflow-hidden rounded text-red-700">
          { sameMovie !== undefined ? <button className="rounded-full border-red-700/60 p-1 sm:p-1 border-2 hover:border-red-700 transition duration-200 ease-out absolute top-0 right-0 lg:top-2 lg:right-4 z-50 rotate-180" onClick={() => handleRemoveFromFavorite(films.id)}>
          <svg /* width="24" height="24" */ viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" z-50 w-4 h-4 z-40 lg:w-6 lg:h-6 Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="#c53030"/></svg>
          </button> : ""}
          <Link href={`/details/${type}/${films.id}`}>
          <Image
          alt="similar movie image"
          layout="fill"
          objectFit='cover'
          className="object-center"
          src={`https://image.tmdb.org/t/p/w500${films?.backdrop_path || films?.poster_path }`}
          />
          </Link>
      </div>
      {/* <p className="text-center text-sm">{films.title || films.name}</p> */}
      </div>
    </>
  )
}

export default Films