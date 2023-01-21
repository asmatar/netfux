import { createContext, useContext, useEffect, useState } from 'react'
import {auth}  from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  signUp: () => {}
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => {

  const router = useRouter()
  const [user, setCurrentUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState()

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  } 

  function logout() {
    return signOut(auth);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged(user => {

      if(user) {
        setCurrentUser(user)
        setIsLoggedIn(true)
        Cookies.set("user", isLoggedIn)
      } else {
        setCurrentUser(null)
        setIsLoggedIn(false)
        Cookies.set("user", isLoggedIn)
      }
    })

    return unsubscribe;

  }, [isLoggedIn, router])
  
  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signUp
  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}
export default AuthContext;
