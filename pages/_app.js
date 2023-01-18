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
/* const AuthContextProvider = dynamic(() => import('../context/authContext'), { ssr: false, }) */
const netflixFont = localFont({ src: '../public/font/NetflixSans-Light.otf' });

function MyApp({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest);
  const favMovies = store.getState().favorite.favoriteMovies;
  const favSeries = store.getState().favorite.favoriteSeries;
  //console.log(favMovies)
  
  useEffect(() => {
  
    /* if (typeof window !== "undefined") { */
      console.log("dans if dispatch", favMovies)
      let cook = JSON.stringify(favMovies)
      console.log("dans if dispatch", cook)

      Cookies.set("favMoviesh", cook)
    /* } */
  }, [favMovies]);  
/*   const dispatch = useDispatch()
  

  useEffect(() => {

    if (typeof window !== "undefined") {
      console.log("dans if dispatch")
      dispatch(addToFavoriteM(JSON.parse(window.localStorage.getItem('movieList'))))
    }
  }, [dispatch]);  

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("dans if")
      localStorage.setItem("movieList", JSON.stringify(favMovies))
      localStorage.setItem("serieList", JSON.stringify(favSeries))
    }
  }, [favMovies,favSeries]);   */


  
/*   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setIsLoggedIn(true)
      })

      return unsubscribe
 

    const unsubcribe = onAuthStateChanged(auth, userAuth =>{
      if(userAuth) {
        // loggin 
        console.log("in use effect app js auther auth", userAuth)
      } else {
        // logged out
        console.log("note loged in", userAuth)
      }
    })
    return unsubcribe;
  }, [user]) */

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
//export default wrapper.withRedux(MyApp);

export default MyApp; 
