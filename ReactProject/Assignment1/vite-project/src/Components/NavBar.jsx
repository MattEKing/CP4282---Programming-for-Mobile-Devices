import { useState } from "react";
import "../StyleSheet/NavBar.css"

const NavBar = () => {

    const [logButton, setLogButton] = useState("Login") 
    return(
        <>
        <div id="Nav">
        <h2>Assignment 1 - Movie List </h2>
        <button  onClick={() => {logButton == "Login" ? setLogButton("Logout") : setLogButton("Login")}}>{logButton}</button>
        </div>
        </>
    )
};

export default NavBar;
