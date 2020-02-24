import React from "react";
import "./style.css";
import login from "./login.png"


class Header extends React.Component{
    render(){
        return (
           <nav className="Nav">
             <div id="navColDiv" style={{height:"65px", borderRadius: "15%",float: "left", width:"10%"}}><p><strong>Cibus</strong></p></div>
             <div id="navColDiv" style={{float: "left", width: "90%"}}><a href="Login"class="navButton"><img src={login} style={{float:"right", margin:"20px"}} alt="home icon"/> </a></div>
             <br />
           </nav>
       );
    }   
}
export default Header;