import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { modalOpen } from '@/redux/modalReducer'
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux';
import baseUrl from '../../constant/movie'
import Casting from '@/components/Casting'
import Similar from '@/components/Similar'
import Reviews from '@/components/Reviews'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify';
import { useRemoveFromFavorite, useAddToFavorite } from "../../hooks/useToastFunction"

const FavUp = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180 Hawkins-Icon Hawkins-Icon-Standard"><path fillRule="evenodd" clipRule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="red"/></svg>
}
const FavDown = () => {
  return    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard"><path fillRule="evenodd" clipRule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor"/></svg>
}
import clock from 'public/clock.svg'
import calendar from 'public/calendar.svg'
import 'react-toastify/dist/ReactToastify.css';

const Modal = dynamic(() => import('@/components/Modal'), {ssr: false,})

const Detail = ({reviewsData, castData, similarData, detailData}) => {

  const removeFromFavorite = useRemoveFromFavorite();
  const addToMyFavorite = useAddToFavorite();
  const dispatch = useDispatch()
  const {show} = useSelector(state => state.modal)
  const CurrentFavoriteMovie = useSelector(state => state.favorite.favoriteMovies)
  const CurrentFavoriteSerie = useSelector(state => state.favorite.favoriteSeries)
  const router = useRouter()

  const type = (router.pathname === "/series" || router.query.slug[0] === "tv") ? "tv" : "movie"
  let CurrentFavorite = type === "movie" ? CurrentFavoriteMovie : CurrentFavoriteSerie
  const path = `${baseUrl}/${detailData?.backdrop_path || detailData?.poster_path}`
  const favoriteCurrentId = CurrentFavorite.find(fav => fav.id === +router.query.slug[1])

  const handleRemoveFromFavorite = (id) => {
    removeFromFavorite(id)
  }
  const handleFavorite = (movie, type) => {
    addToMyFavorite(movie, type)
  }
  const handleModal = (id, type) => {
    dispatch(modalOpen({id, type}))
  } 
  
  return (
    <section className="bg-cover flex w-full justify-center bg-center"
    style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0, .8) 0%, rgba(0,0,0, .8) 100%), url(${path})`}}>
     <ToastContainer />
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
              <Image
              src={calendar} 
              alt="calendar"
              width={15}
              height={16}
            />
             
                {detailData.release_date?.slice(0,4) || detailData.first_air_date?.slice(0,4)}
              </p>
              <p className="flex gap-x-2 items-center text-sm">
              <Image
              src={clock} 
              alt="clock"
              width={17}
              height={17}
            />
                {detailData.runtime || detailData?.episode_run_time[0]} min
              </p>
            </div>
            <p className="max-w-[850px] w-full text-justify">{detailData.overview}
            </p>
            <div className="flex gap-x-6 items-center">
             { favoriteCurrentId ?
              <div className="border-r-2 bg-gray-800 p-1 cursor-pointer rounded border-gray-800" onClick={() => handleRemoveFromFavorite(detailData.id)}>
                < FavUp />
              </div>
             :
             <div className="border-r-2 bg-gray-800 p-1 cursor-pointer rounded border-gray-800" onClick={() => handleFavorite(detailData, type)}>
               < FavDown />
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
        < Casting cast={castData} />
        {reviewsData.length !== 0 && < Reviews reviews={reviewsData} />  } 
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