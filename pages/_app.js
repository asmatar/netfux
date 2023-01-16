import '../styles/globals.css';
import localFont from '@next/font/local';
import { Provider, useSelector } from 'react-redux';
import Layout from '../components/Layout/layout';
import {wrapper} from "../redux/store";
import {auth} from "../firebase"
import { useEffect } from 'react';
import AuthContext from '../context/authContext';
import { AuthContextProvider } from '../context/authContext'
import { AuthCheck } from '../components/Auth-Check';

const netflixFont = localFont({ src: '../public/font/NetflixSans-Light.otf' });

function MyApp({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest);
/*   const favoriteMovies = useSelector(state => state.favorite.favoriteMovies)
  const favoriteSeries = useSelector(state => state.favorite.favoriteSeries)

  useEffect(()=>{
    localStorage.setItem("movieList", JSON.stringify(favoriteMovies))
    localStorage.setItem("serieList", JSON.stringify(favoriteSeries))
  }, [favoriteMovies,favoriteSeries]) */
  
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
        <AuthCheck>

          <Provider store={store}>
            <Layout>
              <Component {...props.pageProps} />
            </Layout>
          </Provider>
          </AuthCheck>

        </AuthContextProvider>
    </div>
  );
}
//export default wrapper.withRedux(MyApp);

export default MyApp; 