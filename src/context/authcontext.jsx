import React, { useEffect, createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [user, setUser] = useState();
  const value = {
    user,
    setUser,
  };

  useEffect(() => {
    const userObj = {
      accessToken: sessionStorage.getItem("accessToken"),
      name: sessionStorage.getItem("name"),
      image: sessionStorage.getItem("image"),
    };
    setUser(userObj);
  }, []);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
