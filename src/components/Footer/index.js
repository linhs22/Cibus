import React from "react";
import home from "./home.png"
import post from "./post.png"
import profile from "./profile.png"
import search from "./search.png"

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



            <div class="navCont">
                <div class="navbar">
                    <a href="/" class="navButton">
                        <img src={home} />
                    </a>
                    <a href="Profile" class="navButton">
                        <img src={profile} />
                    </a>
                    <a href="Post" class="navButton">
                        <img src={post} />
                    </a>
                    <a href="Search" class="navButton">
                        <img src={search} />
                    </a>
                </div>

            </div>
            </div>
        );
    }
}
export default Footer;

