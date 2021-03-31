import axios from "axios";
import React, { createContext, useContext, useState, useCallback } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState({});
  
  const changeUser = useCallback(
    user => setUser(user), [setUser]
  );

  const getUser = useCallback(async () => {
    const  {data}  = await axios.get("https://reqres.in/api/users/2");
    setUser(data.data);
  }, [setUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUser };
