import '../styles/globals.css';
import localFont from '@next/font/local';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/layout';
import {wrapper} from "../redux/store";
import {auth} from "../firebase"
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const netflixFont = localFont({ src: '../public/font/NetflixSans-Light.otf' });

function MyApp({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest);

  const user = auth.currentUser;
  console.log("in app user", user)
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, userAuth =>{
      if(userAuth) {
        console.log("in use effect app js auther auth",userAuth)
      } else {
        console.log("note loged in", user)
      }
    })
    return unsubcribe;
  }, [user])
  return (
    <div className={netflixFont.className}>
       <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
       </Provider>
    </div>
  );
}

export default MyApp; 