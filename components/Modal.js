import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player/lazy'
import Button from './UI/Button'

const Modal = ({setShowModal, currentFilmId}) => {

  const [genres, setGenres] = useState([])
  const [trailer, setTrailer] = useState('')
  const [movie, setMovie] = useState([])
  const [muted, setMuted] = useState(false)

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
  const handleMute = () => {
    setMuted((prev) => !prev)
  }
  console.log(muted)
  
  return ReactDOM.createPortal((
    <>
      <div class="modal animate-fade fixed top-0 left-0 right-0 bottom-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-black/60 z-50 flex items-center justify-center" /* onClick={() => setShowModal(false)} */>
        <div className="min-w-full w-full big-phone:min-w-[85%] big-phone:w-[85%] lg:w-[850px] lg:min-w-[850px] mt-28 big-phone:mt-0">
          <div className="flex justify-center items-center min-w-full w-full lg:min-w-[850px] lg:w-[850px] big-phone:h-[380px] lg:h-[480px] h-[250px] rounded-t-lg overflow-hidden relative">
            <div className="rounded-full bg-black p-2 w-min absolute top-5 right-5" onClick={() => {setShowModal(false); setMovie(null)}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-uia="previewModal-closebtn" role="button" aria-label="close" tabindex="0"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="currentColor"></path></svg>
            </div>
            <div className="absolute bottom-5 sm:bottom-10 left-10 z-20 flex gap-x-2 items-center">
              <Button className="bannerButton bg-white text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"/></svg>
                Play
              </Button>
              <div className="relative flex flex-col gap-y-4 group">
                <div className="transition-all duration-500 py-2 px-4 absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-max text-black rounded">
                  <p className="bg-white/80 rounded py-2 px-4">More details</p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.58903 9.7845C5.6349 9.85112 5.69628 9.90559 5.76787 9.94322C5.83947 9.98085 5.91914 10.0005 6.00003 10.0005C6.08091 10.0005 6.16059 9.98085 6.23218 9.94322C6.30378 9.90559 6.36516 9.85112 6.41103 9.7845L10.911 3.2845C10.9631 3.20953 10.9937 3.12172 10.9993 3.0306C11.005 2.93949 10.9856 2.84856 10.9433 2.7677C10.9009 2.68683 10.8372 2.61912 10.759 2.57193C10.6809 2.52473 10.5913 2.49986 10.5 2.5H1.50003C1.40895 2.50038 1.3197 2.52557 1.24187 2.57288C1.16404 2.62019 1.10058 2.68782 1.05831 2.7685C1.01605 2.84917 0.996572 2.93985 1.00198 3.03077C1.0074 3.12168 1.03749 3.20941 1.08903 3.2845L5.58903 9.7845Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <button className="rounded-full border-white/60 p-1 sm:p-2 border-2 group-hover:border-white transition duration-200 ease-out">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg>
                </button>
              </div>
              <div className="relative flex flex-col gap-y-4 group">
                <div className="transition-all duration-500 py-2 px-4 absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-max text-black rounded">
                  <p className="bg-white/80 rounded py-2 px-4">Add to my list</p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.58903 9.7845C5.6349 9.85112 5.69628 9.90559 5.76787 9.94322C5.83947 9.98085 5.91914 10.0005 6.00003 10.0005C6.08091 10.0005 6.16059 9.98085 6.23218 9.94322C6.30378 9.90559 6.36516 9.85112 6.41103 9.7845L10.911 3.2845C10.9631 3.20953 10.9937 3.12172 10.9993 3.0306C11.005 2.93949 10.9856 2.84856 10.9433 2.7677C10.9009 2.68683 10.8372 2.61912 10.759 2.57193C10.6809 2.52473 10.5913 2.49986 10.5 2.5H1.50003C1.40895 2.50038 1.3197 2.52557 1.24187 2.57288C1.16404 2.62019 1.10058 2.68782 1.05831 2.7685C1.01605 2.84917 0.996572 2.93985 1.00198 3.03077C1.0074 3.12168 1.03749 3.20941 1.08903 3.2845L5.58903 9.7845Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <button className="rounded-full border-white/60 p-1 sm:p-2 border-2 hover:border-white transition duration-200 ease-out">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor"/></svg>
                </button>
              </div>
            </div>
            <button className="absolute bottom-5 sm:bottom-10 right-10 cursor-pointer rounded-full border-white/60 p-1 sm:p-2 border-2 hover:border-white transition duration-200 ease-out" onClick={handleMute}>
              { muted ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="currentColor"></path></svg> :
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 8.28699 22.525 4.72603 19.8995 2.10052L18.4853 3.51474C20.7357 5.76517 22 8.81742 22 12C22 15.1826 20.7357 18.2349 18.4853 20.4853L19.8995 21.8995C22.525 19.274 24 15.7131 24 12ZM11 4.00001C11 3.59555 10.7564 3.23092 10.3827 3.07613C10.009 2.92135 9.57889 3.00691 9.29289 3.29291L4.58579 8.00001H1C0.447715 8.00001 0 8.44773 0 9.00001V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00001ZM5.70711 9.70712L9 6.41423V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70712ZM16.0001 12C16.0001 10.4087 15.368 8.8826 14.2428 7.75739L12.8285 9.1716C13.5787 9.92174 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92896C18.9462 6.80432 19.9998 9.34786 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87829 17.157 7.84346 15.6567 6.34317L17.0709 4.92896Z" fill="currentColor"></path></svg>}
            </button>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer}`}
              width="100%"
              height="100%"
              playing
              muted = {muted}
              config={{
                youtube: {
                  playerVars: { showinfo: 0 }
                }
              }}
            />
          </div>
          {/* description */}
          <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-2 text-sm">
                <p className="font-semibold text-green-400">
                  {(movie?.vote_average * 10).toFixed(2)}% Match
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
    </>
  ), document.querySelector('#modal'))
}

export default Modal