import React from 'react';
import Head from 'next/head';
import Films from '../../components/Films';
import {useSelector} from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function List() {
  const {favoriteMovies} = useSelector(state=> state.favorite)
  const {favoriteSeries} = useSelector(state=> state.favorite)
  const displayFavoriteMovies = favoriteMovies.map(movie=>(
    console.log(movie),
    <Films key={favoriteMovies.index} films={movie}/>
  ))
  const displayFavoriteSeries = favoriteSeries.map(movie=>(
    console.log(movie),
    <Films key={favoriteSeries.index} films={movie}/>
  ))


  return (
   <>
    <Head>
      <title>Netflux my list</title>
      <meta name="description" content="My favorite list" />
    </Head>
    <section className=' mt-32 px-4 lg:px-10'>
    <ToastContainer />

    {favoriteMovies.length === 0 && favoriteSeries.length === 0 ? 
      <p className="text-center font-NetflixBold text-5xl flex items-center h-[calc(100vh-208px)] justify-center">There is no favorite in your list yet</p>
      :
      <div className="flex flex-col gap-y-6">
        {favoriteMovies.length !== 0 ?
        <>
        <h1 className="text-lg big-phone:text-xl md:text-2xl font-NetflixBold">My Favorite Movies</h1>
        <div className="grid grid-cols-2 small-tab:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">{displayFavoriteMovies}</div>
        </>
        : ""}
        {favoriteSeries.length !== 0 ?
        <>
        <h1 className="text-lg big-phone:text-xl md:text-2xl font-NetflixBold">My Favorite Series</h1>
        <div className="grid grid-cols-2 small-tab:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">{displayFavoriteSeries}</div>
        </>
        : ""}
      </div>
    }
    </section>
   </>
  );
}

export default List;

export function getServerSideProps  ({req})  {

  let ctx = req.cookies.user
  console.log("*****************************************************")
  console.log(req)
   if (ctx === "false") {
    return {
      redirect: {
        destination: "/login",
      },
    }
  } 
  return {
    props: {}
  }
}