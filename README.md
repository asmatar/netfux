This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.






export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const request = {
    fetchTrendingMovies : `${BASE_URL}trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    fetchAdventure: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
    fetchAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
    fetchCrime: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
    fetchDrama: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
    fetchFamilu: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
    fetchFantasy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
    fetchHistory: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=36`,
    fetchScienceFiction: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
}