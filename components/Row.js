import FilmCard from './FilmCard';
import {useRef} from "react"
function Row({ filmsCategory, CategoryTitle, handleModal}) {

  const rowRef = useRef(null)

  const displayFilmCategory = filmsCategory.map((film)=>(
    <FilmCard key={film.id} film={film} handleModal={handleModal}/>
  ))  

  const handleCarousel = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }  

  return (
    <div className="space-y-0.5 md:space-y-1 group relative">
      {CategoryTitle}
      <div className="group relative md:-ml-2">
      <div className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" onClick={() => handleCarousel("right")}>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5271 24.1938L19.2063 17.5L12.5271 10.8062L14.5833 8.75L23.3333 17.5L14.5833 26.25L12.5271 24.1938Z" fill="white"/>
        </svg>
      </div>
      <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2" ref={rowRef}>
        {displayFilmCategory}
      </div>
      <div className="cursor-pointer absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 opacity-0 transition hover:scale-125 group-hover:opacity-100" onClick={() => handleCarousel("left")}>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.473 10.8064L15.7939 17.5001L22.473 24.1939L20.4168 26.2501L11.6668 17.5001L20.4168 8.75011L22.473 10.8064Z" fill="white"/>
        </svg>
      </div>
      </div>
    </div>
  );
}

export default Row;
