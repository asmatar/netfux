import '../styles/globals.css';
import localFont from '@next/font/local';
import { Provider, useSelector } from 'react-redux';
import Layout from '../components/Layout/layout';
import {wrapper} from "../redux/store";
import {auth} from "../firebase"
import { useEffect } from 'react';
import AuthContext from '../context/authContext';
import { AuthContextProvider } from '../context/authContext'
import dynamic from 'next/dynamic'
import { useDispatch } from 'react-redux';
import { addToFavoriteM } from '../redux/favoriteReducer'
import Cookies from 'js-cookie'

import { AuthCheck } from '../components/Auth-Check';
const netflixFont = localFont({ src: '../public/font/NetflixSans-Light.otf' });

function MyApp({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest);
  const favMovies = store.getState().favorite.favoriteMovies;
  const favSeries = store.getState().favorite.favoriteSeries;
  //console.log(favMovies)
/*   let a = "arthur"
  useEffect(() => {
  
    /* if (typeof window !== "undefined") { */
/*       console.log("dans if dispatch", favMovies)
      let cook = JSON.stringify(favMovies)
      console.log("dans if dispatch", cook)

      Cookies.set("favMoviesh", cook) */
    /* } 
  }, [favMovies]);   */


  return (
    <div className={netflixFont.className}>
        <AuthContextProvider>
        {/* <AuthCheck> */}

          <Provider store={store}>
            <Layout>
              <Component {...props.pageProps} />
            </Layout>
          </Provider>
         {/*  </AuthCheck> */}

        </AuthContextProvider>
    </div>
  );
}

export default MyApp; 
