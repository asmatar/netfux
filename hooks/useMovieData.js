// useMovieData custom hook
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import {fetchUrl} from '../constant/movie'

const useMovieData = (currentFilmId, filmOrMovie) => {
  
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [trailer, setTrailer] = useState('');

  const url = `${fetchUrl}${filmOrMovie}/${currentFilmId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR(url, fetcher);
  
  useEffect(() => {
    if (data?.videos) {
      const index = data.videos.results.findIndex(
        (element) => element.type === 'Trailer'
      );
      setTrailer(data.videos?.results[index]?.key);
    }
    if (data?.genres) {
      setGenres(data.genres);
    }
    setMovie(data);
  }, [data]);

  return { movie, genres, trailer };
};

export default useMovieData;