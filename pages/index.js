/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Banner from '../components/Banner';
import Row from '../components/Row';
import {request} from "../utils/request"
import { wrapper } from '../redux/store';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getNetflixOriginalsFilm, getTrendingFilm, getTopRatedFilm, getHistoryFilm, getScienceFictionFilm, getActionFilm, getDocumentariesFilm, getAnimationFilm, getAdventureFilm, getRomanceFilm, getComedyFilm, getHorrorFilm, getFantasyFilm, getCrimeFilm, getDramaFilm, getFamilyFilm } from '../redux/filmReducer';
const Modal = dynamic(() => import('../components/Modal'), {
  ssr: false,
})
export default function Home() {
/*   const [showModal, setShowModal] = useState(false)
  const [currentFilmId, setCurrentFilm] = useState(null) */

  /* const handleModal = (currentFilmId) => {
  setCurrentFilm(currentFilmId)
   setShowModal(true)
 }  */
  const { netflixOriginals, trending, topRated, history, scienceFiction, action, documentaries, animation, adventure, romance, comedy, horror, crime, drama, fantasy, family } = useSelector((state) => state.films)
  const {show} = useSelector(state => state.modal)
  const {favorite} = useSelector(state => state.favorite)
  const filteredMovie = useSelector(state => state.films.filteredMovie)
  const activeSearch = useSelector(state => state.films.activeSearch)
  console.log("filteredFilm")
  return (
    <div>
      <Head>
        <title>Netflux movies</title>
        <meta name="description" content="List of movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <section className="flex flex-col gap-y-8 pl-4 big-phone:pl-6 lg:pl-12">
        <ToastContainer />
          { filteredMovie.length <1 && activeSearch === false ? (
          <>
          <Row CategoryTitle={"Netflix Originals"} filmsCategory={netflixOriginals} /* handleModal={handleModal} *//>
          { favorite.length >0  && <Row CategoryTitle={"My list"} filmsCategory={favorite}  /* handleModal={handleModal} */ />}
          <Row CategoryTitle={"Top Rated"} filmsCategory={topRated} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Trending"} filmsCategory={trending} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"History"} filmsCategory={history} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"ScienceFiction"} filmsCategory={scienceFiction} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Action"} filmsCategory={action} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Documentaries"} filmsCategory={documentaries} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Animation"} filmsCategory={animation} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Adventure"} filmsCategory={adventure} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Romance"} filmsCategory={romance} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Comedy"} filmsCategory={comedy} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Horror"} filmsCategory={horror} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Crime"} filmsCategory={crime} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Drama"} filmsCategory={drama} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Fantasy"} filmsCategory={fantasy} /* handleModal={handleModal} *//>
          <Row CategoryTitle={"Family"} filmsCategory={family} /* handleModal={handleModal} *//>
          </>)
          :
          (filteredMovie.length <1 && activeSearch === true) ?
          <p className='py-20 font-NetflixBold text-red-700 text-4xl'>There is no movie that match with your search</p>
          : 
          <Row CategoryTitle={"Your Movies results"} filmsCategory={filteredMovie} /* handleModal={handleModal} *//>
        }
        </section>
      </main>
      { show && <Modal /* setShowModal={setShowModal} currentFilmId={currentFilmId} *//>}
    </div>
  );
}
export const getStaticProps = wrapper.getStaticProps(wrapper => async () => {
  
  const [fetchActionMovies, fetchAdventureMovies, fetchAnimationMovies,fetchCrimeMovies,fetchComedyMovies,fetchDocumentariesMovies, fetchDramaMovies,fetchFamilyMovies,  fetchFantasyMovies, fetchHistoryMovies, fetchHorrorMovies, fetchNetflixOriginalsMovies, fetchRomanceMovies, fetchScienceFictionMovies, fetchTopRatedMovies, fetchTrendingMovies] = await Promise.all([
    fetch(request.fetchAction), fetch(request.fetchAdventure), fetch(request.fetchAnimation), fetch(request.fetchCrime), fetch(request.fetchComedy), fetch(request.fetchDocumentaries), fetch(request.fetchDrama), fetch(request.fetchFamily), fetch(request.fetchFantasy), fetch(request.fetchHistory), fetch(request.fetchHorror), fetch(request.fetchNetflixOriginals), fetch(request.fetchRomance), fetch(request.fetchScienceFiction), fetch(request.fetchTopRated), fetch(request.fetchTrending)
  ]);
  
  const [ActionMovies, AdventureMovies, AnimationMovies,CrimeMovies,ComedyMovies,Documentaries, DramaMovies,FamilyMovies,  FantasyMovies, HistoryMovies, HorrorMovies, NetflixOriginalsMovies, RomanceMoviesMovies, ScienceFictionMovies, TopRatedMovies, TrendingMovies] = await Promise.all([fetchActionMovies.json() || null, fetchAdventureMovies.json() || null, fetchAnimationMovies.json() || null,fetchCrimeMovies.json() || null,fetchComedyMovies.json() || null,fetchDocumentariesMovies.json() || null, fetchDramaMovies.json() || null,fetchFamilyMovies.json() || null,  fetchFantasyMovies.json() || null, fetchHistoryMovies.json() || null, fetchHorrorMovies.json() || null, fetchNetflixOriginalsMovies.json() || null, fetchRomanceMovies.json() || null, fetchScienceFictionMovies.json() || null, fetchTopRatedMovies.json() || null, fetchTrendingMovies.json() || null])

  wrapper.dispatch(getActionFilm(ActionMovies.results))
  wrapper.dispatch(getAdventureFilm(AdventureMovies.results))
  wrapper.dispatch(getAnimationFilm(AnimationMovies.results))
  wrapper.dispatch(getCrimeFilm(CrimeMovies.results))
  wrapper.dispatch(getComedyFilm(ComedyMovies.results))
  wrapper.dispatch(getDocumentariesFilm(Documentaries.results))
  wrapper.dispatch(getDramaFilm(DramaMovies.results))
  wrapper.dispatch(getFamilyFilm(FamilyMovies.results))
  wrapper.dispatch(getFantasyFilm(FantasyMovies.results))
  wrapper.dispatch(getHistoryFilm(HistoryMovies.results))
  wrapper.dispatch(getHorrorFilm(HorrorMovies.results))
  wrapper.dispatch(getNetflixOriginalsFilm(NetflixOriginalsMovies.results))
  wrapper.dispatch(getRomanceFilm(RomanceMoviesMovies.results))
  wrapper.dispatch(getScienceFictionFilm(ScienceFictionMovies.results))
  wrapper.dispatch(getTopRatedFilm(TopRatedMovies.results))
  wrapper.dispatch(getTrendingFilm(TrendingMovies.results))

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