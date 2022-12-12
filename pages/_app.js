import '../styles/globals.css';
import localFont from '@next/font/local';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/layout';
import {wrapper} from "../redux/store";

const netflixFont = localFont({ src: '../public/font/NetflixSans-Light.otf' });

function MyApp({ Component, ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest);

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