/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
/* [#010511] */
  return (
    <header className={`bg-gradient-to-b from-black/30 to-transparent ${isScroll && 'bg-[#141414]'} transition-all duration-300`}>
      <div className="flex justify-between w-full items-center">
        {/* navbar */}
        <div className="flex items-center gap-x-2 sm:gap-x-6">
          <Link href="/">
            <Image
              src="/netflix-logo.png"
              className="object-cover"
              width={120}
              height={120}
              alt="netflix logo"
             /*  layout="fill" */
            />
          </Link>
          <nav className="flex flex-col relative group transition-all duration-200">
            {/* menu movil div select + svg */}
            <div className="flex items-center sm:hidden gap-x-1 cursor-pointer">
              <div className="text-xs relative">Browse</div>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.72598 6.523C3.75656 6.56742 3.79748 6.60373 3.84521 6.62882C3.89294 6.6539 3.94606 6.66701 3.99998 6.66701C4.0539 6.66701 4.10702 6.6539 4.15475 6.62882C4.20248 6.60373 4.2434 6.56742 4.27398 6.523L7.27398 2.18967C7.3087 2.13969 7.32907 2.08115 7.33286 2.0204C7.33665 1.95966 7.32372 1.89904 7.29547 1.84513C7.26723 1.79122 7.22475 1.74608 7.17266 1.71462C7.12056 1.68316 7.06084 1.66657 6.99998 1.66667H0.999979C0.93926 1.66692 0.879758 1.68372 0.827872 1.71526C0.775987 1.74679 0.73368 1.79188 0.705502 1.84567C0.677324 1.89945 0.664341 1.9599 0.667949 2.02051C0.671557 2.08112 0.691619 2.13961 0.725979 2.18967L3.72598 6.523Z" fill="white" />
              </svg>
            </div>
            {/* svg movil menu */}
            <div className="flex-col absolute top-8 right-1/2 translate-x-1/2 sm:!opacity-0 group-hover:opacity-100 opacity-0 sm:hidden group-hover:visible group-hover:flex transition-all duration-200">
              <svg width="57" height="57" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 6.25L10 8.75H5L7.5 6.25Z" fill="white" />
              </svg>
            </div>
            {/* menu desktop + movil */}
            <ul className="gap-x-6 flex-col sm:relative sm:top-0 absolute top-16 right-1/2 group-hover:opacity-100 opacity-0 group-hover:visible translate-x-1/2 sm:flex-row w-56 sm:flex sm:border-none sm:opacity-100 border border-t-2 border-gray-500 border-t-white transition-all duration-200">
              <li className="hover:text-gray-400 transition-all duration-200 ease cursor-pointer py-3 w-full flex justify-center hover:bg-gray-500/10"><Link href="/">Home</Link></li>
              <li className="hover:text-gray-400 transition-all duration-200 ease cursor-pointer py-3 w-full flex justify-center hover:bg-gray-500/10"><Link href="/series">Series</Link></li>
              <li className="hover:text-gray-400 transition-all duration-200 ease cursor-pointer py-3 w-full flex justify-center hover:bg-gray-500/10"><Link href="/my-list">My List</Link></li>
            </ul>
          </nav>
        </div>
        {/* cta-search */}
        <div className="relative flex items-center gap-x-6  ">
          {/* search */}
          <div className="relative hidden small-tab:flex">
            <input type="search" placeholder="Title..." className="peer relative z-10 h-10 w-10 cursor-pointer rounded-full border bg-transparent pl-10 outline-none transition-all duration-200 ease-in focus:w-full focus:cursor-text focus:border-red-600 focus:pl-16 focus:pr-4" />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-red-600 peer-focus:stroke-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="relative flex items-center gap-x-2 cursor-pointer group">
            <Image
              src="/avatar.jpg"
              objectFit="cover"
              width={35}
              height={35}
              alt="profil logo"
              /*
              layout="fill"
              */
            />
            <div className="group-hover:rotate-180 transition-all duration-200">
              <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.72598 6.523C3.75656 6.56742 3.79748 6.60373 3.84521 6.62882C3.89294 6.6539 3.94606 6.66701 3.99998 6.66701C4.0539 6.66701 4.10702 6.6539 4.15475 6.62882C4.20248 6.60373 4.2434 6.56742 4.27398 6.523L7.27398 2.18967C7.3087 2.13969 7.32907 2.08115 7.33286 2.0204C7.33665 1.95966 7.32372 1.89904 7.29547 1.84513C7.26723 1.79122 7.22475 1.74608 7.17266 1.71462C7.12056 1.68316 7.06084 1.66657 6.99998 1.66667H0.999979C0.93926 1.66692 0.879758 1.68372 0.827872 1.71526C0.775987 1.74679 0.73368 1.79188 0.705502 1.84567C0.677324 1.89945 0.664341 1.9599 0.667949 2.02051C0.671557 2.08112 0.691619 2.13961 0.725979 2.18967L3.72598 6.523Z" fill="white" />
              </svg>
            </div>
            <div className="opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 absolute top-14 right-0 w-52">
              <div className="absolute -top-5 right-0">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 14.5833L23.3334 20.4167H11.6667L17.5 14.5833Z" fill="white" />
                </svg>
              </div>
              <button type="button" className="border border-gray-500/30 py-4 flex justify-center hover:bg-gray-500/20 w-full ">
                <span>sign out of Netflix</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
