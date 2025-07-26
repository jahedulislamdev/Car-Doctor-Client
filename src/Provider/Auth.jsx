import { useState } from "react";
import AuthContext from "./context";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";
import app from "../Firebase/config";
import toast from "react-hot-toast";

const Auth = ({ children }) => {
   const [loading, setLoading] = useState(false);
   const [user, setUser] = useState(null);

   // getauth app
   const auth = getAuth(app);

   // login and register using email and password
   const registrationWithEmail = async (email, pass) => {
      setLoading(true)
      return await createUserWithEmailAndPassword(auth, email, pass)
         .finally(() => setLoading(false));
   }
   const loginWithEmail = async (email, pass) => {
      setLoading(true)
      return await signInWithEmailAndPassword(auth, email, pass)
         .finally(() => setLoading(false))
   }

   // login with google 
   const googleAuthProvider = new GoogleAuthProvider();
   const loginWithGoogle = (navigate, location) => {
      setLoading(true);
      signInWithPopup(auth, googleAuthProvider)
         .then(res => {
            setUser(res.user)
            toast.success("Login Successfully!")
         })
         .catch(err => toast.error(err))
         .finally(() => {
            setLoading(false)
            navigate(location.state ? location.state : '/')
         })

   }
   // login with facebook
   const facebookProvider = new FacebookAuthProvider();
   const loginWithFacebook = (navigate, location) => {
      setLoading(true)
      signInWithPopup(auth, facebookProvider)
         .then(res => {
            setUser(res.user)
            toast.success("Login Successfully!")
         })
         .catch(err => toast.error(err))
         .finally(() => {
            setLoading(false)
            navigate(location.state ? location.state : '/')
         })
   }

   // signout
   const signOutUser = (navigate) => {
      setLoading(true)
      signOut(auth)
         .then(() => {
            setUser(null);
            toast.success("Logout Successfully!")
         })
         .catch(err => toast.error("signout faild", err))
         .finally(() => {
            setLoading(false)
            navigate('/');
         })
   }

   // provided data
   const providedData = {
      user, setUser,
      loading, setLoading,
      registrationWithEmail, loginWithEmail, loginWithGoogle, loginWithFacebook,
      signOutUser
   }
   return (
      <AuthContext.Provider value={providedData}>
         {children}
      </AuthContext.Provider>
   );
};

export default Auth;