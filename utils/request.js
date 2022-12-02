const baseUrl = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const request = {
    fetchAction: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchAdventure: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
    fetchAnimation: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
    fetchCrime: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
    fetchComedy: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    fetchDrama: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
    fetchFamily: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
    fetchFantasy: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
    fetchHistory: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=36`,
    fetchHorror: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchNetflixOriginals: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchRomance: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchScienceFiction: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
    fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTrending : `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
}