import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';
const Nav = () => {

  const router = useRouter()

  return (
    <nav className="flex flex-col relative transition-all duration-200 group">
        <div className="flex items-center sm:hidden gap-x-1 cursor-pointer">
            <div className="text-xs relative">Browse</div>
            <Image
              src="/images/header/BrowseArrow.svg" 
              alt="Browse Arrow"
              width={8}
              height={8}
            />
        </div>
        <ul className="gap-x-6 flex-col sm:relative sm:top-0 absolute invisible sm:visible top-16 right-1/2 group-hover:opacity-100 opacity-0  group-hover:visible translate-x-1/2 sm:flex-row w-56 sm:flex sm:border-none sm:opacity-100 border border-t-2 border-gray-500 border-t-white transition-all duration-200">
            <div className="flex-col absolute -top-9 right-1/2 translate-x-1/2 sm:!opacity-0 group-hover:opacity-100 opacity-0 sm:hidden group-hover:visible group-hover:flex transition-all duration-200">
              <svg width="57" height="57" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 6.25L10 8.75H5L7.5 6.25Z" fill="white" />
              </svg>
            </div>
            <li className="nav-links"><Link className={router.pathname == "/" ? "text-red-500 font-NetflixBold" : ""}href="/">Home</Link></li>
            <li className="nav-links"><Link className={router.pathname == "/series" ? "text-red-500 font-NetflixBold" : ""}href="/series">Series</Link></li>
            <li className="nav-links"><Link className={router.pathname == "/my-list" ? "text-red-500 font-NetflixBold" : ""}href="/my-list">My List</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;/*  */