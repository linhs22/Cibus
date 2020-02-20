import React, { Component } from "react";
import "./Style.css";





class PostCard extends Component {
  render() {
    return <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src="https://qph.fs.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp" alt="Chris" />
            </div>
            <div className="Post-user-nickname">
              <span>{whatever.username}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt="Icon Living" src={whatever.imgUrl} />
          </div>
        </div>
        <div className="Post-description">
         
          {whatever.description}

        </div>

          <div>
        
           {whatever.comments}

          </div>
      </article>;

      
    }
}
export default PostCard;

