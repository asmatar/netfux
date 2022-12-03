import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player/lazy'

const Modal = ({setShowModal, currentFilmId}) => {
  const [filmDetails, setFilmDetails] = useState()
  const [genres, setGenres] = useState([])
  const [trailer, setTrailer] = useState('')
  const [movie, setMovie] = useState([])

  console.log(currentFilmId)
  useEffect(() => {
    const fetchFilmDetail = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${currentFilmId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`)
      const data = await response.json()
      console.log(data)
      setMovie(data)
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element) => element.type === 'Trailer'
        )
        setTrailer(data.videos?.results[index]?.key)
      }
      if (data?.genres) {
        setGenres(data.genres)
      }
    }  
    try {
      fetchFilmDetail()
    } catch (error) {
      console.log("error")
    }
  }, [currentFilmId])
  
  return ReactDOM.createPortal((
    <>
      <div class="modal animate-fade fixed top-0 left-0 right-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-red-400/10 border border-red-300 z-40 flex items-center justify-center">
        <div className="relative">
          
          <div className="min-w-[850px] w-[850px]">
          <div className="rounded-full bg-black p-2 w-min absolute top-5 right-5" onClick={() => {setShowModal(false); setMovie(null)}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-uia="previewModal-closebtn" role="button" aria-label="close" tabindex="0"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="currentColor"></path></svg>
          </div>
          <div className="flex justify-center items-center min-w-[850px] w-[850px] h-[480px] rounded-t-lg overflow-hidden">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer}`}
              width="100%"
              height="100%"
              playing
              /* muted={muted} */
              config={{
                youtube: {
                  playerVars: { showinfo: 0 }
                }
              }}
            />
          </div>
          <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">


          <div className="space-y-6 text-lg">

          <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie?.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
          <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres:</span>{' '}
                  {genres.map((genre) => genre.name).join(', ')}
                </div>

                <div>
                  <span className="text-[gray]">Original language:</span>{' '}
                  {movie?.original_language}
                </div>

                <div>
                  <span className="text-[gray]">Total votes:</span>{' '}
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
          </div>

          </div>
        </div>
    
      </div>
    </>
  ), document.querySelector('#modal'))
}

export default Modal