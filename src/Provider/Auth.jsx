import { useEffect, useState } from "react";
import AuthContext from "./context";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/config";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";


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
            navigate(location.state ? location.state : '/')
         })
         .catch(err => toast.error(err))
         .finally(() => {
            setLoading(false)
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
            navigate(location.state ? location.state : '/')
         })
         .catch(err => toast.error(err))
         .finally(() => {
            setLoading(false)
         })
   }
   // signout
   const signOutUser = (navigate) => {
      Swal.fire({
         title: "Do you want to log out?",
         showCancelButton: true,
         confirmButtonText: "Yes",
         confirmButtonColor: 'green',
         background: '#daf2f2',
      }).then((result) => {
         if (result.isConfirmed) {
            setLoading(true);
            signOut(auth)
               .then(() => {
                  setUser(null);
                  toast.success("Logout Successfully!");
                  navigate('/');
               })
               .catch(err => toast.error(`Signout failed: ${err.message}`))
               .finally(() => {
                  setLoading(false);
               });
         }
      });
   };

   // auth observer
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         const userMail = currentUser?.email || user?.email;
         const loggedUser = { email: userMail };
         setUser(currentUser);

         // send jwt token to server
         if (currentUser) {
            axios.post("http://localhost:5000/jwt", loggedUser, { withCredentials: true })
               .then(res => console.log(res.data))
               .catch(err => console.error("Error sending JWT token:", err));
         } else {
            axios.post("http://localhost:5000/logout", loggedUser, { withCredentials: true })
               .then(res => console.log("User logged out on server", res.data))
               .catch(err => console.error("Error logging out:", err));
         }
         setLoading(false);
      })
      return () => unsubscribe();
   }, [user?.email, auth]);

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