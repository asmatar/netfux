import Head from 'next/head';
import React, {useState, useEffect } from 'react';
import {auth} from "../../firebase"
import { useRouter } from 'next/router';
import { useAuth } from '../../context/authContext';
import { useForm } from "react-hook-form";


const Login = () => {
  
  const router = useRouter()
  const [log, setLog] = useState(false)
  const [email, setEmailRef] = useState("")
  const [password, setPasswordRef] = useState("")
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [signinQuery, setSigninQuery] = useState(false)
  const [firebaseErrorLogin, setFirebaseErrorLogin] = useState("")
  const [firebaseErrorSignup, setFirebaseErrorSignup] = useState("")
  const user = auth.currentUser;

  const { signUp, login } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    if (log) {
      setFirebaseErrorSignup("")
      await login(data.email, data.password)
      .then((userCredential)=>{
        router.push("/")
      }) 
      .catch((error) => {
        setFirebaseErrorLogin("")
        setFirebaseErrorSignup(error.code)
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    } else {
      await signUp(data.email, data.password)
      .then((userCredential)=>{
        router.push("/")
      }) 
      .catch(err => setFirebaseErrorSignup(err.code))
    }
  }


  useEffect(() => {
    setSigninQuery(router.query.signinQuery)
  }, [signinQuery, router.query.signinQuery, user, router])

  
  return (
    <>
      <Head>
        <title>Netflux login</title>
        <meta name="description" content="Login page" />
      </Head>
      <div className='bg-login w-full h-full bg-cover absolute top-0 right-0'>
        <div className="flex flex-col gap-y-4 items-center justify-center w-full h-full px-4">
          {
            ((email === "" && signinQuery == undefined && showLoginForm === false) || (email !== ""  && showLoginForm === false &&  signinQuery == undefined) || (email !== "" && signinQuery === undefined  && showLoginForm === false) /* || signinQuery === undefined  */) &&
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
                    disabled={email === "" ? true : false}
                  >
                    <span className="pr-2">Get started</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-icon icon-chevron-next"><path fillRule="evenodd" clipRule="evenodd" d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z" fill="currentColor"/></svg>
                  </button>
                </div>
              </form>
            </>
          }
          {
            (showLoginForm || signinQuery === "true") &&
            <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-4xl font-semibold">Sign In</h1>
              <div className="space-y-4">
                <label className="inline-block w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input"
                    value={email}
                    {...register("email", { required: "this field is required", minLength: { value: 7, message: "the email must have 7 caracters"}, maxLength: { value: 20, message: "the email souldn't have more than 20 caracters"}, onChange:(event)=>setEmailRef(event.target.value)})}              
                  />
                  { errors.email && (
                  <p className="text-sm  text-orange-500">
                    {errors.email.message}
                  </p>
                  )}
                </label>
                <label className="inline-block w-full">
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    {...register("password", { required: "this field is required", minLength: { value: 7, message: "password must have 7 caracters"}, maxLength: { value: 15, message: "password shouldn't have more than 15 caracters"}, onChange:(event)=>setPasswordRef(event.target.value)})}      
                  />

                  {errors.password && (
                    <p className="text-sm  text-orange-500">
                      {errors.password.message}
                    </p>
                  )}
                </label>
              </div>
              <button
                className="w-full rounded bg-[#E50914] py-3 font-semibold"
                type="submit"
                onClick={() => setLog(true)}
                >
                Sign In
              </button>
              {firebaseErrorLogin !== "" && 
                (
                  <p className="text-sm  text-orange-500">
                    {firebaseErrorLogin}
                  </p>
                )
              }
              {firebaseErrorSignup !== "" && 
                (
                  <p className="text-sm  text-orange-500 text-center">
                    {firebaseErrorSignup}
                  </p>
                )
              }
              <div className="text-[gray]">
                New to Netflix?
                <button
                  className="cursor-pointer text-white hover:underline pl-2"
                  onClick={() => setLog(false)}
                  type="submit"
                  >
                  Sign up now
                </button>
              </div>
            </form>
          }
        </div>
      </div>
    </>
  )
};

export default Login;

export function getServerSideProps  ({req})  {

  let ctx = req.cookies.user
   if (ctx === "true") {
    return {
      redirect: {
        destination: "/",
      },
    }
  } 
  return {
    props: {}
  }
}