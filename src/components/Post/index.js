import React, { Component } from "react";
import "./Style.css";

class Post extends Component {
  render() {
    return <article className="Post" ref="Post">
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
            <img alt="Icon Living" src="https://theheritagecook.com/wp-content/uploads/2013/10/PBJ-Triangles-w-fruit-iStock.jpg" />
          </div>
        </div>
        <div className="Post-caption">
          <strong>Javeyn</strong> Peanut Butter and Jelly Sandwich
          <br />
          Ingredients:
          <ul>
            <li>Two slices of bread</li>
            <li>3 Tablespoons of Peanut Butter</li>
            <li>1.5 Tablespoons of Jelly or Jam</li>
            <ul>
            <li>Spread Peanut Butter on one slice of bread, and then spread jelly on the other slice of bread</li>
            <li>Cut in half and place on the plate</li>
            <li>enjoy!</li>
            </ul>
          </ul>
          <strong>Paolo</strong> I love cheese and fruit.
          <br/>
          <strong>Javeyn</strong> Thats why we call you Mr. Cheese'n'fruit
          <br/>
          <strong>Paolo</strong> Wait what?
        </div>
      </article>;
    }
}
export default Post;