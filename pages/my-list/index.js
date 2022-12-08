import React from 'react';
import Head from 'next/head';
import Films from '../../components/Films';
import {useSelector} from "react-redux"
function List() {
  const favoriteMovies = useSelector(state=> state.favorite.favorite)
  console.log("favoriteMovies", favoriteMovies)
  const displayFavoriteMovie = favoriteMovies.map(movie=>(
    console.log("movie",movie),
    <Films key={favoriteMovies.index} films={movie}/>
  ))
  const favorite = useSelector(state => state.favorite.favorite)
  console.log(displayFavoriteMovie)
  return (
   <>
    <Head>
      <title>Netflux my list</title>
      <meta name="description" content="My favorite list" />
    </Head>
    <section className='h-[calc(100vh-208px)] mt-32 px-10'>
    {favorite.length === 0 ? 
      <p className="text-center font-NetflixBold text-5xl">There is no favorite in your list yet</p>
      :

    <div className="flex flex-col gap-y-6">
      <h1 className="text-2xl font-NetflixBold">My Favorite Movies</h1>
      <div className="grid grid-cols-4 gap-x-4">{displayFavoriteMovie}</div>
    </div>
    }
    </section>
   </>
  );
}

export default List;
