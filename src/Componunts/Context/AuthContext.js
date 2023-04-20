import { createContext, useEffect, useState } from "react"

export let AuthContext = createContext(null);
export default function AuthContextProvider(props) {
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     props.saveUserData();
  //   }
  // }, [])
  let [userData, setUserData] = useState(null);
    return <AuthContext.Provider value={{ userData, setUserData }}>
    {props.children}
  </AuthContext.Provider>
}
