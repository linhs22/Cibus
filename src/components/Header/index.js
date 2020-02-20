import React from "react";
import "./style.css";
import login from "./login.png"


class Header extends React.Component{
    render(){
        return (
           <nav className="Nav">
                   <p><strong>Cibus</strong><a href="Login"class="navButton"><img src={login} style={{float:"right", margin:"20px"}} alt="home icon"/> </a></p> 
             <div className="Nav-menus">
               <div className="Nav-brand">
                 {/* <a className="Nav-brand-logo" href="/"> */}
                   <br/>
                 {/* </a> */}
               </div>
             </div>
           </nav>
       );
    }   
}
export default Header;