import { createContext, useContext, useEffect, useState } from 'react'
import {auth}  from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { useRouter } from 'next/router'
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
        console.log("in login context")
        return signInWithEmailAndPassword(auth, email, password)
    } 

    function logout() {
        console.log("in sign OUT context", auth)
        return signOut(auth);
    }

    function signUp(email, password) {
        console.log("in sign up context")
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log("user in use effect auth context", user)
           /*  if (isLoggedIn === true && router.pathname === "/login") router.push("/") */
            if(user) {
            console.log("IFF effect auth context", user)

                // loggin 
                setCurrentUser(user)
                setIsLoggedIn(true)
                console.log("in use effect app js auther auth", user)
              } else {
                console.log("ELSE effect auth context", user)

                // logged out
                setCurrentUser(null)
                setIsLoggedIn(false)
                console.log("note loged in", user)
                //router.push("/login")
              }
        })

        return unsubscribe
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

/* xport function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signOut() {
    return auth.signOut();
  }

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function getUser() {
    return auth.currentUser
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    getUser,
    login,
    signOut,
    signUp
  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
} */
