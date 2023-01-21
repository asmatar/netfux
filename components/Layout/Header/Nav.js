import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {

  const router = useRouter()

  return (
    <nav className="flex flex-col relative group transition-all duration-200">
        <div className="flex items-center sm:hidden gap-x-1 cursor-pointer">
            <div className="text-xs relative">Browse</div>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.72598 6.523C3.75656 6.56742 3.79748 6.60373 3.84521 6.62882C3.89294 6.6539 3.94606 6.66701 3.99998 6.66701C4.0539 6.66701 4.10702 6.6539 4.15475 6.62882C4.20248 6.60373 4.2434 6.56742 4.27398 6.523L7.27398 2.18967C7.3087 2.13969 7.32907 2.08115 7.33286 2.0204C7.33665 1.95966 7.32372 1.89904 7.29547 1.84513C7.26723 1.79122 7.22475 1.74608 7.17266 1.71462C7.12056 1.68316 7.06084 1.66657 6.99998 1.66667H0.999979C0.93926 1.66692 0.879758 1.68372 0.827872 1.71526C0.775987 1.74679 0.73368 1.79188 0.705502 1.84567C0.677324 1.89945 0.664341 1.9599 0.667949 2.02051C0.671557 2.08112 0.691619 2.13961 0.725979 2.18967L3.72598 6.523Z" fill="white" />
            </svg>
        </div>
        <div className="flex-col absolute top-8 right-1/2 translate-x-1/2 sm:!opacity-0 group-hover:opacity-100 opacity-0 sm:hidden group-hover:visible group-hover:flex transition-all duration-200">
            <svg width="57" height="57" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 6.25L10 8.75H5L7.5 6.25Z" fill="white" />
            </svg>
        </div>
        <ul className="gap-x-6 flex-col sm:relative sm:top-0 absolute top-16 right-1/2  group-hover:opacity-100 opacity-0 group-hover:visible translate-x-1/2 sm:flex-row w-56 sm:flex sm:border-none sm:opacity-100 border border-t-2 border-gray-500 border-t-white transition-all duration-200">
            <li className="hover:text-gray-400 hover:bg-[#141414] transition-all duration-200 ease bg-black/70 sm:bg-transparent sm:hover:bg-transparent cursor-pointer py-3 w-full flex justify-center"><Link className={router.pathname == "/" ? "text-red-500 font-NetflixBold" : ""}href="/">Home</Link></li>
            <li className="hover:text-gray-400 hover:bg-[#141414] transition-all duration-200 ease bg-black/70 sm:bg-transparent sm:hover:bg-transparent cursor-pointer py-3 w-full flex justify-center"><Link className={router.pathname == "/series" ? "text-red-500 font-NetflixBold" : ""}href="/series">Series</Link></li>
            <li className="hover:text-gray-400 hover:bg-[#141414] transition-all duration-200 ease bg-black/70 sm:bg-transparent sm:hover:bg-transparent cursor-pointer py-3 w-full flex justify-center"><Link className={router.pathname == "/my-list" ? "text-red-500 font-NetflixBold" : ""}href="/my-list">My List</Link></li>
        </ul>
    </nav>
  )
}

export default Nav