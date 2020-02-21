import React from "react";
import home from "./home.png"
import post from "./post.png"
import profile from "./profile.png"
import search from "./search.png"
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (

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
        );
    }
}
export default Footer;

