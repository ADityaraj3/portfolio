import {createContext, useState} from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [userInfo,setUserInfo] = useState({});
 
//   if(userInfo===null){
//     console.log("null")
//   }
  console.log("UserContextProvider rendered with userInfo:", userInfo);
  return (
    <UserContext.Provider value={{userInfo,setUserInfo}}>
      {children}
    </UserContext.Provider>
  );
}