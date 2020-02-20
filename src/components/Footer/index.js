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
<<<<<<< HEAD
               
=======
                {/* <BottomNavigation>
                    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                </BottomNavigation> */}
>>>>>>> 7d88dbf31dfd98489b00bcf98d586f31b40c2fb2
            </div>
        );
    }
}
export default Footer;

