import '../styles/globals.css';
import localFont from '@next/font/local';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/layout';
import {wrapper} from "../redux/store";
import {auth} from "../firebase"
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContextProvider } from '../context/authContext'

const netflixFont = localFont({ src: '../public/font/NetflixSans-Light.otf' });

function MyApp({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest);

  const user = auth.currentUser;
  console.log("in app user", user)
  
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
          <Provider store={store}>
            <Layout>
              <Component {...props.pageProps} />
            </Layout>
          </Provider>
        </AuthContextProvider>
    </div>
  );
}

export default MyApp; 