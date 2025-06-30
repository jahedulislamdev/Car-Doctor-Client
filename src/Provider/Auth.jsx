import AuthContext from "./context";

const Auth = ({ children }) => {
   const providedData = 'xyz'
   return (
      <AuthContext.Provider value={providedData}>
         {children}
      </AuthContext.Provider>
   );
};

export default Auth;