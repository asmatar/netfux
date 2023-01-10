import Head from 'next/head';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {auth} from "../../firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { useRouter } from 'next/router';
const Login = () => {
  const router = useRouter()
  const [email, setEmailRef] = useState("")
  const [password, setPasswordRef] = useState("")
  const [showLoginForm, setShowLoginForm] = useState(false)
  
  const register = (event) => {
    console.log("okok")
    event.preventDefault()
    createUserWithEmailAndPassword(auth,
      email, 
      password
    ).then((userCredential)=>{
      const user = userCredential.user;
      console.log("user in register",user)
    }).catch((error)=>{
      console.log(error.message)
    })
  }

  const signin = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user in sign in", user)
    router.push("/")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    console.log(errorCode)
  });
  }
  return (

  
 <>
    <Head>
      <title>Netflux login</title>
      <meta name="description" content="Login page" />
    </Head>
    <div className='bg-login w-full h-full bg-cover absolute top-0 right-0'>
      
      <div className="flex flex-col gap-y-4 items-center justify-center w-full h-full px-4">
      {
        !showLoginForm &&
        <>
        <h1 className="text-3xl xl:text-6xl max-w-[800px] md:w-8/12 text-center px-5 login:text-5xl">Unlimited movies, TV shows, and more.</h1>
        <h2 className="text-xl max-w-[800px] text-center login:text-2xl ">Watch anywhere. Cancel anytime</h2>
        <form className="w-full flex flex-col justify-center" onSubmit={(event)=>{event.preventDefault(),setShowLoginForm(prevState => !prevState)}}>
          <h3 className="text-lg pb-5 text-center">Ready to watch? Enter your email to create or restart your membership</h3>
          <div className="flex flex-col gap-y-6 md:flex-row gap-x-1 items-center w-full justify-center">
            <input 
            type="email" 
            placeholder='Email adress'
            onChange={event =>setEmailRef(event.target.value)}
            className='text-gray-600 w-full placeholder:pl-4 placeholder:text-sm min-h-[48px] outline-none border-none tablette-md:min-h-[70px] max-w-[500px]' 
            />
            <button 
              className='bg-[#e50914] text-white rounded-sm justify-center cursor-pointer text-center text:lg flex self-center items-center xl:text-3xl min-h-[40px] tablette-md:min-h-[70px] px-6 w-max tablette-md:min-w-max transition duration-200 ease hover:bg-[#f40612]' 
              type='submit'
              >
              <span className="pr-2">Get started</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button-icon icon-chevron-next"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z" fill="currentColor"/></svg>
            </button>
          </div>
        </form>
        </>
        }

      {/***  begin sign in form *******/}
      {
        showLoginForm &&
        <form
        onSubmit={console.log("first")}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(event)=>setEmailRef(event.target.value)}

              />
            
              
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              onChange={(event)=>setPasswordRef(event.target.value)}
              />
            
          </label>
        </div>
        <button
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
          //onClick={() => setLogin(true)}
          type="submit"
          onClick={signin}
          >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?
          <button
            className="cursor-pointer text-white hover:underline pl-2"
            onClick={(event)=>register(event)}
            type="submit"
            >
            Sign up now
          </button>
        </div>
      </form>
      }
      
      {/***  end sign in form *******/}
      </div>
    </div>
    </>

  )
};

export default Login;
