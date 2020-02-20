import React from "react";

import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="navCont">
                <div className="navbar">
                    <a href="/"className="navButtonLeft">Home</a>
                    <a href="Login"className="navButton">Login</a>
                    <a href="Post"className="navButton" id="upload_widget">Post</a>
                    <a href="Search"className="navButton">Search</a>
                    <a href="Profile"className="navButton">Profile</a>
                </div>
               
            </div>
        );
    }
}
export default Footer;