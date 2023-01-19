import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../context/authContext'
import Login from '../pages/login'
import Header from './Layout/Header/Header'

export const AuthCheck = (props) => {
/*     const router = useRouter()
    const authCtx = useContext(AuthContext)
    console.log(authCtx.isLoggedIn)
    if (authCtx.isLoggedIn === true && router.pathname === "/login") router.push("/")
    useEffect(()=>{
        
       /*  if (typeof window !== 'undefined' && authCtx.isLoggedIn === true) router.push('/')
         
        if(!authCtx.isLoggedIn)  (
            router.push("/login")
          )
    }, []) */
    
    // a loading component that prevents the page from rendering
   
  return props.children
}