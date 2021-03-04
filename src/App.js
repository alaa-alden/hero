import "./styles/App.css";
import Routers from './routers';

import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import AuthContext from "./context";
function App() {
  const [auth, setAuth] = useState(false);
  const readCookie=()=>{
    const user=Cookies.get('user')
    if(user){
      setAuth(true)
    }
  }
  useEffect(() => {
    readCookie()
    // $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000");
  },[]);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        <Routers />
    </AuthContext.Provider>
  );
}

export default App;
