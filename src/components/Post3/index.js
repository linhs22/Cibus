import React, { Component } from "react";
import "../Post/Style.css";

class Post2 extends Component {
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
            <img alt="Icon Living" src="https://www.recipetineats.com/wp-content/uploads/2017/07/Chile-Con-Queso-14-650x910.jpg" />
          </div>
        </div>
        <div className="Post-caption">
          <strong>Javeyn</strong> Ghetto Nachos
          <ul>
            <li>Taco Meat</li>
            <li>Jar of Queso Cheese</li>
            <li>Chips of choice</li>
            <ul>
            <li>Mix the cheese with the meat and top the chips with it.</li>
            <li>CONSUME</li>
            </ul>
          </ul>
          <strong>Steve</strong> Those look really tasty, was it hard to make?
          <br />
          <strong>Javeyn</strong> .... No. its Literally dumping stuff on shit.
        </div>
      </article>;
    }
}
export default Post2;