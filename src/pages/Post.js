import React, { Component } from "react";

class Post extends Component {
  render() {
    return(
    <div>
     <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src="https://qph.fs.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp" alt="Chris" />
            </div>
            <div className="Post-user-nickname">
              <span>Chris</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt="Icon Living" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/20/1/FNM_010113-TTAH-Steamed-Pork-and-Mushroom-Shumai-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371612375300.jpeg" />
          </div>
        </div>
        <div className="Post-caption">
          <strong>Javeyn</strong> look at this group of lovely pork and shrimp shumai. #hashtag #blessed #eatshumai #notacook
        </div>
      </article>;
      </div>
    )
    }
}
export default Post;