import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { modalOpen, modalClose } from '../../redux/modalReducer'
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux';
import Casting from '../../components/Casting'
import Similar from '../../components/Similar'
import Reviews from '../../components/Reviews'
import { useRouter } from 'next/router'
import { addToMyList, removeFromMyList } from '../../redux/favoriteReducer'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Modal = dynamic(() => import('../../components/Modal'), {
  ssr: false,
})
const Detail = ({reviewsData, castData, similarData, detailData}) => {
  console.log(castData)
  const router = useRouter()
  const dispatch = useDispatch()
  const type = (router.pathname === "/series" || router.query.slug[0] === "tv") ? "tv" : "movie"
  const CurrentFavoriteMovie = useSelector(state => state.favorite.favoriteMovies)
  const CurrentFavoriteSerie = useSelector(state => state.favorite.favoriteSeries)
  let CurrentFavorite = type === "movie" ? CurrentFavoriteMovie : CurrentFavoriteSerie
  const [favorite, setFavorite] = useState(false)
  const path = `https://image.tmdb.org/t/p/original${detailData?.backdrop_path || detailData?.poster_path}`
  const handleModal = (id, type) => {
    dispatch(modalOpen({id, type}))
  } 
  const handleFavorite = (movie, type) => {
    dispatch(addToMyList({movie, type}),
    setFavorite(true),
    toast.success('Add to my favorite', {
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
  const handleRemoveFromFavorite = (id) => {
    dispatch(removeFromMyList(id),
    setFavorite(false),
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
  const {show} = useSelector(state => state.modal)
  const favoriteCurrentId = CurrentFavorite.find(fav => fav.id === +router.query.slug[1])
 
  return (
   <section className="bg-cover flex w-full justify-center bg-center"
    style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0, .8) 0%, rgba(0,0,0, .8) 100%), url(${path})`}}>
     <ToastContainer />

      {/* detail */}
      <div className="max-w-[1360px] w-full px-4 lg:px-10 flex flex-col gap-y-28">
        <div className="flex lg:flex-row flex-col gap-6 pt-28">
          <div className="">
           <Image
            src={`https://image.tmdb.org/t/p/original${detailData?.backdrop_path || detailData?.poster_path}`}
            width={500}
            height={400}
            className="lg:min-w-[465px]"
            alt="film poster"
           />
          </div>
          <div className="flex flex-col gap-y-6">
            <h1 className="font-NetflixBold text-2xl md:text-3xl lg:text-4xl">{detailData.title || detailData.name}</h1>
            <div className="flex gap-x-6 items-center">
              <p className="rounded py-1 px-2 bg-red-700">HD</p>
              <p className="text-sm">{detailData.genres[0].name}</p>
              <p className="flex gap-x-2 items-center text-sm">
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.58333 15.8333C1.14792 15.8333 0.775042 15.6784 0.464708 15.3686C0.154903 15.0583 0 14.6854 0 14.25V3.16667C0 2.73125 0.154903 2.35864 0.464708 2.04883C0.775042 1.7385 1.14792 1.58333 1.58333 1.58333H2.375V0H3.95833V1.58333H10.2917V0H11.875V1.58333H12.6667C13.1021 1.58333 13.475 1.7385 13.7853 2.04883C14.0951 2.35864 14.25 2.73125 14.25 3.16667V14.25C14.25 14.6854 14.0951 15.0583 13.7853 15.3686C13.475 15.6784 13.1021 15.8333 12.6667 15.8333H1.58333ZM1.58333 14.25H12.6667V6.33334H1.58333V14.25ZM1.58333 4.75H12.6667V3.16667H1.58333V4.75ZM1.58333 4.75V3.16667V4.75ZM7.125 9.5C6.90069 9.5 6.71281 9.424 6.56133 9.272C6.40933 9.12053 6.33333 8.93264 6.33333 8.70834C6.33333 8.48403 6.40933 8.29588 6.56133 8.14388C6.71281 7.99241 6.90069 7.91667 7.125 7.91667C7.34931 7.91667 7.53746 7.99241 7.68946 8.14388C7.84093 8.29588 7.91667 8.48403 7.91667 8.70834C7.91667 8.93264 7.84093 9.12053 7.68946 9.272C7.53746 9.424 7.34931 9.5 7.125 9.5ZM3.95833 9.5C3.73403 9.5 3.54588 9.424 3.39388 9.272C3.2424 9.12053 3.16667 8.93264 3.16667 8.70834C3.16667 8.48403 3.2424 8.29588 3.39388 8.14388C3.54588 7.99241 3.73403 7.91667 3.95833 7.91667C4.18264 7.91667 4.37079 7.99241 4.52279 8.14388C4.67426 8.29588 4.75 8.48403 4.75 8.70834C4.75 8.93264 4.67426 9.12053 4.52279 9.272C4.37079 9.424 4.18264 9.5 3.95833 9.5ZM10.2917 9.5C10.0674 9.5 9.87947 9.424 9.728 9.272C9.576 9.12053 9.5 8.93264 9.5 8.70834C9.5 8.48403 9.576 8.29588 9.728 8.14388C9.87947 7.99241 10.0674 7.91667 10.2917 7.91667C10.516 7.91667 10.7039 7.99241 10.8553 8.14388C11.0073 8.29588 11.0833 8.48403 11.0833 8.70834C11.0833 8.93264 11.0073 9.12053 10.8553 9.272C10.7039 9.424 10.516 9.5 10.2917 9.5ZM7.125 12.6667C6.90069 12.6667 6.71281 12.5907 6.56133 12.4387C6.40933 12.2872 6.33333 12.0993 6.33333 11.875C6.33333 11.6507 6.40933 11.4628 6.56133 11.3113C6.71281 11.1593 6.90069 11.0833 7.125 11.0833C7.34931 11.0833 7.53746 11.1593 7.68946 11.3113C7.84093 11.4628 7.91667 11.6507 7.91667 11.875C7.91667 12.0993 7.84093 12.2872 7.68946 12.4387C7.53746 12.5907 7.34931 12.6667 7.125 12.6667ZM3.95833 12.6667C3.73403 12.6667 3.54588 12.5907 3.39388 12.4387C3.2424 12.2872 3.16667 12.0993 3.16667 11.875C3.16667 11.6507 3.2424 11.4628 3.39388 11.3113C3.54588 11.1593 3.73403 11.0833 3.95833 11.0833C4.18264 11.0833 4.37079 11.1593 4.52279 11.3113C4.67426 11.4628 4.75 11.6507 4.75 11.875C4.75 12.0993 4.67426 12.2872 4.52279 12.4387C4.37079 12.5907 4.18264 12.6667 3.95833 12.6667ZM10.2917 12.6667C10.0674 12.6667 9.87947 12.5907 9.728 12.4387C9.576 12.2872 9.5 12.0993 9.5 11.875C9.5 11.6507 9.576 11.4628 9.728 11.3113C9.87947 11.1593 10.0674 11.0833 10.2917 11.0833C10.516 11.0833 10.7039 11.1593 10.8553 11.3113C11.0073 11.4628 11.0833 11.6507 11.0833 11.875C11.0833 12.0993 11.0073 12.2872 10.8553 12.4387C10.7039 12.5907 10.516 12.6667 10.2917 12.6667Z" fill="#B91C1C"/>
                </svg>
                {detailData.release_date?.slice(0,4) || detailData.first_air_date?.slice(0,4)}
              </p>
              <p className="flex gap-x-2 items-center text-sm">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.8935 8.22649L10.7126 10.0456C10.8608 10.1938 10.935 10.3793 10.935 10.6019C10.935 10.8239 10.8608 11.0158 10.7126 11.1775C10.5509 11.3392 10.359 11.4201 10.137 11.4201C9.91437 11.4201 9.72221 11.3392 9.56051 11.1775L7.84245 9.45945C7.6538 9.2708 7.51231 9.06194 7.41799 8.83286C7.32366 8.60379 7.2765 8.3545 7.2765 8.085V5.6595C7.2765 5.43042 7.35412 5.23827 7.50935 5.08304C7.66404 4.92835 7.85592 4.851 8.085 4.851C8.31407 4.851 8.50623 4.92835 8.66146 5.08304C8.81615 5.23827 8.8935 5.43042 8.8935 5.6595V8.22649ZM8.085 1.617C8.31407 1.617 8.50623 1.69435 8.66146 1.84904C8.81615 2.00427 8.8935 2.19642 8.8935 2.4255C8.8935 2.65457 8.81615 2.84673 8.66146 3.00196C8.50623 3.15665 8.31407 3.234 8.085 3.234C7.85592 3.234 7.66404 3.15665 7.50935 3.00196C7.35412 2.84673 7.2765 2.65457 7.2765 2.4255C7.2765 2.19642 7.35412 2.00427 7.50935 1.84904C7.66404 1.69435 7.85592 1.617 8.085 1.617ZM14.553 8.085C14.553 8.31407 14.4754 8.50596 14.3202 8.66065C14.1655 8.81588 13.9736 8.8935 13.7445 8.8935C13.5154 8.8935 13.3235 8.81588 13.1688 8.66065C13.0136 8.50596 12.936 8.31407 12.936 8.085C12.936 7.85592 13.0136 7.66377 13.1688 7.50854C13.3235 7.35385 13.5154 7.2765 13.7445 7.2765C13.9736 7.2765 14.1655 7.35385 14.3202 7.50854C14.4754 7.66377 14.553 7.85592 14.553 8.085ZM8.085 12.936C8.31407 12.936 8.50623 13.0136 8.66146 13.1688C8.81615 13.3235 8.8935 13.5154 8.8935 13.7445C8.8935 13.9736 8.81615 14.1655 8.66146 14.3202C8.50623 14.4754 8.31407 14.553 8.085 14.553C7.85592 14.553 7.66404 14.4754 7.50935 14.3202C7.35412 14.1655 7.2765 13.9736 7.2765 13.7445C7.2765 13.5154 7.35412 13.3235 7.50935 13.1688C7.66404 13.0136 7.85592 12.936 8.085 12.936ZM3.234 8.085C3.234 8.31407 3.15665 8.50596 3.00196 8.66065C2.84673 8.81588 2.65457 8.8935 2.4255 8.8935C2.19642 8.8935 2.00427 8.81588 1.84904 8.66065C1.69435 8.50596 1.617 8.31407 1.617 8.085C1.617 7.85592 1.69435 7.66377 1.84904 7.50854C2.00427 7.35385 2.19642 7.2765 2.4255 7.2765C2.65457 7.2765 2.84673 7.35385 3.00196 7.50854C3.15665 7.66377 3.234 7.85592 3.234 8.085ZM8.085 16.17C6.96657 16.17 5.91553 15.9576 4.93185 15.5329C3.94818 15.1087 3.09251 14.5328 2.36486 13.8051C1.63721 13.0775 1.06129 12.2218 0.637098 11.2381C0.212366 10.2545 0 9.20342 0 8.085C0 6.96657 0.212366 5.91553 0.637098 4.93185C1.06129 3.94818 1.63721 3.09251 2.36486 2.36486C3.09251 1.63721 3.94818 1.06102 4.93185 0.636289C5.91553 0.212096 6.96657 0 8.085 0C9.20342 0 10.2545 0.212096 11.2381 0.636289C12.2218 1.06102 13.0775 1.63721 13.8051 2.36486C14.5328 3.09251 15.1087 3.94818 15.5329 4.93185C15.9576 5.91553 16.17 6.96657 16.17 8.085C16.17 9.20342 15.9576 10.2545 15.5329 11.2381C15.1087 12.2218 14.5328 13.0775 13.8051 13.8051C13.0775 14.5328 12.2218 15.1087 11.2381 15.5329C10.2545 15.9576 9.20342 16.17 8.085 16.17ZM8.085 14.553C9.89065 14.553 11.4201 13.9264 12.6732 12.6732C13.9264 11.4201 14.553 9.89065 14.553 8.085C14.553 6.27935 13.9264 4.74994 12.6732 3.49676C11.4201 2.24359 9.89065 1.617 8.085 1.617C6.27935 1.617 4.74994 2.24359 3.49676 3.49676C2.24359 4.74994 1.617 6.27935 1.617 8.085C1.617 9.89065 2.24359 11.4201 3.49676 12.6732C4.74994 13.9264 6.27935 14.553 8.085 14.553Z" fill="#B91C1C"/>
                </svg>
                {detailData.runtime || detailData?.episode_run_time[0]} min
              </p>
            </div>
            <p className="max-w-[850px] w-full text-justify">{detailData.overview}
            </p>
            <div className="flex gap-x-6 items-center">
             { favoriteCurrentId ?
              <div className="border-r-2 bg-gray-800 p-1 rounded border-gray-800" onClick={() => handleRemoveFromFavorite(detailData.id)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180 Hawkins-Icon Hawkins-Icon-Standard"><path fill-Rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="red"/></svg>
              </div>
             :
             <div className="border-r-2 bg-gray-800 p-1 rounded border-gray-800" onClick={() => handleFavorite(detailData, type)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard"><path fill-Rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor"/></svg>
              </div>}
              <p className="text-sm">Language : {detailData.spoken_languages[0].name}</p>
              <button className="flex items-center gap-x-2 rounded-full border-red-700 border py-2 px-8 text-xs font-NetflixBold hover:bg-red-600 transition-all duration-200 ease" onClick={()=>handleModal(detailData.id, type)}>
                <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.06248 10.3125C2.60067 10.7743 2.07227 10.8773 1.47727 10.6217C0.881299 10.3669 0.583313 9.91144 0.583313 9.25519V1.74478C0.583313 1.08853 0.881299 0.633043 1.47727 0.37832C2.07227 0.122626 2.60067 0.225681 3.06248 0.687487L6.85415 4.47915C6.99998 4.62499 7.10935 4.78297 7.18227 4.95311C7.25519 5.12325 7.29165 5.30554 7.29165 5.49999C7.29165 5.69443 7.25519 5.87672 7.18227 6.04686C7.10935 6.217 6.99998 6.37499 6.85415 6.52082L3.06248 10.3125Z" fill="white"/>
                </svg>
                Watch
              </button>
            </div>
          </div>
        </div>
        {/* casting */}
        < Casting cast={castData} />
        {/* review */}
        {reviewsData.length !== 0 && < Reviews reviews={reviewsData} />  } 
        {/* similar */}
        <div className="">
        <div className="flex items-center gap-x-4 mb-6">
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.068 7.0595L7.12001 9.13701L5.0425 10.085L7.12001 11.033L8.068 13.1105L9.01599 11.033L11.0935 10.085L9.01599 9.13701M16.136 0L18.153 4.034H15.1275L13.1105 0H11.0935L13.1105 4.034H10.085L8.068 0H6.051L8.068 4.034H5.0425L3.0255 0H2.017C0.917735 0 0 0.90765 0 2.017V14.119C0 15.2284 0.917735 16.136 2.017 16.136H18.153C18.6879 16.136 19.201 15.9235 19.5792 15.5452C19.9575 15.167 20.17 14.6539 20.17 14.119V0H16.136ZM18.153 14.119H2.017V2.491L3.80204 6.051H14.119L13.4836 7.43265L12.102 8.068L13.4836 8.70336L14.119 10.085L14.7544 8.70336L16.136 8.068L14.7544 7.43265L14.119 6.051H18.153V14.119Z" fill="#B91C1C"/>
        </svg>
          <h2 className="font-NetflixBold ">Similar Movie</h2>
      </div>
          < Similar similar={similarData} />
        </div>
      </div>
      { show && <Modal />}
    </section>
  )
}

export default Detail

export async function getServerSideProps(context) {
  let id = context.query.slug[1]
  let type = context.query.slug[0]
  
  const [fetchReviews, fetchCast, fetchSimilar, fetchDetail] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=c08ed3943d3afdc4be08c4b190d1fc02&language=en-US`), 
    fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=c08ed3943d3afdc4be08c4b190d1fc02&language=en-US`),
    fetch(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=c08ed3943d3afdc4be08c4b190d1fc02&language=en-US`),
    fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=c08ed3943d3afdc4be08c4b190d1fc02&language=en-US`)
  ]);
  
  const [reviews, cast, similar, detail] = await Promise.all([fetchReviews.json(), fetchCast.json(), fetchSimilar.json(), fetchDetail.json()])
  const [reviewsData, castData, similarData, detailData] = [reviews.results, cast.cast, similar.results, detail]

  return {
    props: {reviewsData, castData, similarData, detailData}
  }
}