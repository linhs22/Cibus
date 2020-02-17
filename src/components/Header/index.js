import React from "react";
import "./style.css";


class Header extends React.Component{
    render(){
        return (
           <nav className="Nav">
                   <p><strong>Cibus</strong></p>
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