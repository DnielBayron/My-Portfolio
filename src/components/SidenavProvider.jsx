import { useState } from "react"
import sideNav from "../context/sidenav"


const SidenavProvider = ({ children }) => {


    const [nav, setNav] = useState (false);

    const handleNav = () => {
        setNav(!nav);
        console.log("state change");
    }




  return ( 
  <sideNav.Provider
  value={{nav, handleNav}}>
  {children}
  </sideNav.Provider>
  )
}

export default SidenavProvider;
