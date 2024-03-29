/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {searchByName} from "@/redux/filmReducer"
import {searchSeriesByName} from "@/redux/serieReducer"
import {auth} from "../../../firebase"
import { useAuth } from '../../../context/authContext';
import Button from '@/components/UI/Button';
const AccountLogo = () => {
  <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.72598 6.523C3.75656 6.56742 3.79748 6.60373 3.84521 6.62882C3.89294 6.6539 3.94606 6.66701 3.99998 6.66701C4.0539 6.66701 4.10702 6.6539 4.15475 6.62882C4.20248 6.60373 4.2434 6.56742 4.27398 6.523L7.27398 2.18967C7.3087 2.13969 7.32907 2.08115 7.33286 2.0204C7.33665 1.95966 7.32372 1.89904 7.29547 1.84513C7.26723 1.79122 7.22475 1.74608 7.17266 1.71462C7.12056 1.68316 7.06084 1.66657 6.99998 1.66667H0.999979C0.93926 1.66692 0.879758 1.68372 0.827872 1.71526C0.775987 1.74679 0.73368 1.79188 0.705502 1.84567C0.677324 1.89945 0.664341 1.9599 0.667949 2.02051C0.671557 2.08112 0.691619 2.13961 0.725979 2.18967L3.72598 6.523Z" fill="white" />
  </svg>
} 

function Header() {

  const [search, setSearch] = useState("")
  const [isScroll, setIsScroll] = useState(false);
  const router = useRouter()
  const {pathname} = useRouter()
  const {logout} = useAuth()
  const dispatch = useDispatch()

  const handleScroll = () => {
    const isScrolling = window.scrollY > 0
    setIsScroll(isScrolling);
  };

  const handleSearchName = (event) => {
    const {value} = event.target
    const isSeriesPathname
    = pathname.includes("series")
    const action = isSeriesPathname ? searchSeriesByName : searchByName
    dispatch(action(value), setSearch(()=> value))
  }
  
  function handleSignOut(event) {
    event.preventDefault()
    logout(auth).then(() => {
    router.push("/login")
    }).catch((error) => {
     console.log(error)
    });
  }
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
    className={`bg-gradient-to-b from-black/30 to-transparent ${isScroll && 'bg-[#141414]'} transition-all duration-300`}>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-x-2 sm:gap-x-6">
          <Link href="/">
            <Image
              src="/netflix-logo.png"
              className="object-cover"
              width={120}
              height={120}
              alt="netflix logo"
            />
          </Link>
          { pathname !== "/login" && <Nav/> }
        </div>
        { pathname === "/login"
        ?
        <>
          <Link  href={{
            pathname: '/login',
            query: { signinQuery: true },
          }} 
          className='bg-[#e50914] text-white justify-center cursor-pointer text-center text:lg transition duration-200 ease px-4 py-1 rounded-sm hover:bg-[#f40612]'>Sign in</Link>
        </>
        :
          <div className="relative flex items-center gap-x-6">
            <div className="relative hidden small-tab:flex">
              <input type="search" placeholder="Title..." value={search} className="relative peer z-10 h-10 w-10 cursor-pointer rounded-full border bg-transparent pl-10 outline-none transition-all duration-200 ease-in focus:w-full focus:cursor-text focus:border-red-600 focus:pl-16 focus:pr-4" onChange={(event)=> {setSearch(()=> event.target.value), handleSearchName(event)}} />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 peer-focus:border-red-600 peer-focus:stroke-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="relative flex items-center gap-x-2 cursor-pointer group">
              <Image
                src="/images/header/avatar.jpg"
                width={35}
                height={35}
                alt="profil logo"
              />
              <div className="group-hover:rotate-180 transition-all duration-200">
                < AccountLogo />
              </div>
              <div className="opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 absolute top-14 right-0 w-52"
                     onClick={handleSignOut}

             >
                <div className="absolute -top-5 right-0">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 14.5833L23.3334 20.4167H11.6667L17.5 14.5833Z" fill="white" />
                  </svg>
                </div>
                <Button
                  className="bg-black/70 border border-gray-500/30 py-4 flex justify-center transition-all duration-300 hover:bg-[#141414] w-full ">
                  sign out of Netflix
                </Button>
              </div>
            </div>
          </div>
        }
      </div>
    </header>
  );
}

export default Header;
