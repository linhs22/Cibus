import React from "react";

import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div class="navCont">
                <div class="navbar">
                    <a href="/"class="navButtonLeft">Home</a>
                    <a href="Login"class="navButton">Login</a>
                    <a href="Post"class="navButton">Post</a>
                    <a href="Search"class="navButton">Search</a>
                    <a href="Profile"class="navButton">Profile</a>
                </div>
                {/* <BottomNavigation>
                    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                </BottomNavigation> */}
            </div>
        );
    }
}
export default Footer;

