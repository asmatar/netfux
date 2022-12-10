import React from 'react';
import Head from 'next/head';
import Films from '../../components/Films';
import {useSelector} from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function List() {
  const favoriteMovies = useSelector(state=> state.favorite.favorite)
  const displayFavoriteMovie = favoriteMovies.map(movie=>(

    <Films key={favoriteMovies.index} films={movie}/>
  ))
  const favorite = useSelector(state => state.favorite.favorite)
/* h-[calc(100vh-208px)] */
  return (
   <>
    <Head>
      <title>Netflux my list</title>
      <meta name="description" content="My favorite list" />
    </Head>
    <section className=' mt-32 px-4 lg:px-10'>
    <ToastContainer />

    {favorite.length === 0 ? 
      <p className="text-center font-NetflixBold text-5xl">There is no favorite in your list yet</p>
      :

    <div className="flex flex-col gap-y-6">
      <h1 className="text-lg big-phone:text-xl md:text-2xl font-NetflixBold">My Favorite Movies</h1>
      <div className="grid grid-cols-2 small-tab:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">{displayFavoriteMovie}</div>
    </div>
    }
    </section>
   </>
  );
}

export default List;
