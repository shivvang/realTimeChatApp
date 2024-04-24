//Context API is used to pass global variables anywhere in the code.
//Context is primarily used when some data needs to be accessible by many components at different nesting levels

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

//consuming context
export const useAuthContext = () => {
  return useContext(AuthContext);
};

//way to provide context
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
