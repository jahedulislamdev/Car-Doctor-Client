import { useEffect, useState } from "react";
import AuthContext from "./context";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/config";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";


const Auth = ({ children }) => {
   const [loading, setLoading] = useState(true);
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

   // automatic sign out if an unauthorized user try to access another user's data
   const autoLogout = (navigate) => {
      signOut(auth)
         .then(() => {
            setUser(null);
            toast('Logout, Access Forbidden!', {
               icon: '⚠️',
               style: {
                  border: '1px solid #FFA500',
                  padding: '13px',
                  color: '#333',
                  background: '#FFF3CD',
               },
            });
            navigate('/signin');
         })
         .catch(err => toast.error(`An Error occurred: ${err.message}`))
         .finally(() => {
            setLoading(false);
         });
   }


   // auth observer
   useEffect(() => {
      setLoading(true);
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setLoading(true)
         const userMail = currentUser?.email || user?.email;
         const loggedUser = { email: userMail };
         setUser(currentUser);

         // send jwt token to server
         if (currentUser) {
            axios.post("http://localhost:5000/jwt", loggedUser, { withCredentials: true })
               .then(res => console.log(res.data))
               .catch(err => console.error("Error sending JWT token:", err))
               .finally(() => setLoading(false))
         } else {
            axios.post("http://localhost:5000/logout", loggedUser, { withCredentials: true })
               .then(res => console.log("User logged out on server", res.data))
               .catch(err => console.error("Error logging out:", err))
               .finally(() => setLoading(false));
         }
      })
      return () => unsubscribe();
   }, [auth, user?.email]);

   // provided data
   const providedData = {
      user, setUser,
      loading, setLoading,
      registrationWithEmail, loginWithEmail, loginWithGoogle, loginWithFacebook,
      signOutUser, autoLogout
   }
   return (
      <AuthContext.Provider value={providedData}>
         {children}
      </AuthContext.Provider>
   );
};

export default Auth;