import { createContext, useEffect, useState } from "react"
import Auth from '../../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new  FacebookAuthProvider();

  const signUp = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  }
  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  }
  const signUpWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  }
  const signUpWithFb = () =>{
    setLoading(true);
    return signInWithPopup(Auth, fbProvider);
  }
  const logOut = () =>{
    setLoading(true);
    return signOut(Auth);
  }

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(Auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    })
    return () =>{
      unSubscribe();
    }
  },[])


    const authInfo = {
        user,
        signUp,
        signIn,
        signUpWithGoogle,
        signUpWithFb,
        logOut,
        loading,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
