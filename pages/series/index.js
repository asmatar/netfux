/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Banner from '../../components/Banner';
import Row from '../../components/Row';
import {tvRequest} from "../../utils/request"
import { wrapper } from '../../redux/store';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAnimationTv, getComedyTv, getCrimeTv, getDocumentariesTv, getDramaTv, getFamilyTv, getKidsTv, getMysteryTv, getNewsTv,getRealityTv, getTalkTv, getTopRatedTv } from '../../redux/serieReducer';
const Modal = dynamic(() => import('../../components/Modal'), {
  ssr: false,
})
export default function Series() {

  const { animation, comedy, crime, documentaries, drama, family, kids, mystery, news, reality, talk } = useSelector((state) => state.serie)
  const {show} = useSelector(state => state.modal)
  const {favoriteSeries} = useSelector(state => state.favorite)
  const filteredSeries = useSelector(state => state.serie.filteredSeries)
  console.log("filter series", filteredSeries)
  const activeSearch = useSelector(state => state.serie.activeSearch)

  return (
    <div>
     
      <Head>
      <title>Netflux series</title>
      <meta name="description" content="List of Tv series" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <section className="flex flex-col gap-y-8 pl-4 big-phone:pl-6 lg:pl-12">
        <ToastContainer />
          { filteredSeries.length <1 && activeSearch === false ? (
          <>
          <Row CategoryTitle={"Animation"} filmsCategory={animation}/>
          { favoriteSeries.length >0  && <Row CategoryTitle={"My list"} filmsCategory={favoriteSeries}  />}
          <Row CategoryTitle={"Comedy"} filmsCategory={comedy}/>
          <Row CategoryTitle={"Crime"} filmsCategory={crime}/>
          <Row CategoryTitle={"Documentaries"} filmsCategory={documentaries}/>
          <Row CategoryTitle={"Drama"} filmsCategory={drama}/>
          <Row CategoryTitle={"Family"} filmsCategory={family}/>
          <Row CategoryTitle={"Kids"} filmsCategory={kids}/>
          <Row CategoryTitle={"Mystery"} filmsCategory={mystery}/>
          <Row CategoryTitle={"News"} filmsCategory={news}/>
          <Row CategoryTitle={"Reality"} filmsCategory={reality}/>
          <Row CategoryTitle={"Talk"} filmsCategory={talk}/>
          </>)
          :
          (filteredSeries.length <1 && activeSearch === true) ?
          <p className='py-20 font-NetflixBold text-red-700 text-4xl'>There is no movie that match with your search</p>
          : 
          <Row CategoryTitle={"Your Movies results"} filmsCategory={filteredSeries}/>
        }
        </section>
      </main>
      { show && <Modal/>}
    </div>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(wrapper => async ({req}) => {
  
  const [fetchAnimation, fetchComedy, fetchCrime, fetchDocumentaries, fetchDrama, fetchFamily, fetchKids, fetchMystery, fetchNews, fetchReality, fetchTalk, fetchTopRated] = await Promise.all([
    fetch(tvRequest.fetchAnimation), fetch(tvRequest.fetchComedy), fetch(tvRequest.fetchCrime), fetch(tvRequest.fetchDocumentaries), fetch(tvRequest.fetchDrama), fetch(tvRequest.fetchFamily), fetch(tvRequest.fetchKids), fetch(tvRequest.fetchMystery), fetch(tvRequest.fetchNews), fetch(tvRequest.fetchReality), fetch(tvRequest.fetchTalk), fetch(tvRequest.fetchTopRated)
  ]);
  
  const [animation, comedy, crime,documentaries, drama, family, kids,  mystery, news, reality, talk, topRated] = 
  await Promise.all([fetchAnimation.json(), fetchComedy.json(), fetchCrime.json(),fetchDocumentaries.json(),fetchDrama.json(),fetchFamily.json(), fetchKids.json(),fetchMystery.json(),  fetchNews.json(), fetchReality.json(), fetchTalk.json(), fetchTopRated.json()])
  console.log(animation)
  wrapper.dispatch(getAnimationTv(animation.results))
  wrapper.dispatch(getComedyTv(comedy.results))
  wrapper.dispatch(getCrimeTv(crime.results))
  wrapper.dispatch(getDocumentariesTv(documentaries.results))
  wrapper.dispatch(getDramaTv(drama.results))
  wrapper.dispatch(getFamilyTv(family.results))
  wrapper.dispatch(getKidsTv(kids.results))
  wrapper.dispatch(getMysteryTv(mystery.results))
  wrapper.dispatch(getNewsTv(news.results))
  wrapper.dispatch(getRealityTv(reality.results))
  wrapper.dispatch(getTalkTv(talk.results))
  wrapper.dispatch(getTopRatedTv(topRated.results))
 

  let ctx = req.cookies.user

  
  

  if (ctx === "false") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }  

  return {
    props: {
    }
  }
  // revalidation : 10 sec => refetch after 10sec
  // not Found => true or false, if true => render 404 page, il fail to fetch data
  // redirect => user is redirect to another route redirect : {destination:"/"}
  // context => object with query and other stuff
})
// get static path tell to nextjs which page sould be pre render
// paths : [ {params: {id: "1"} } ]
// fallback option => if we have lot of pages. if true we tell next that event if we don't have pre generated pages in the path params, id:2
// we can have acces to this page just this will be generated at the moment
// avec cette methode on doit generer un fallback option dans le composant
// falback false: if id doesn't exist we show 404
// blocking option => next wait the loading of the page 

// we can mixed fallback true with notfound


// get serversideprops don't have revaluated props. it run on the server after the build time
// context object => we have accees to the req and res, params
