import React, { Component } from "react";
import axios from 'axios';

  

 class Post extends React.Component {

  state = {    
    imageUpload: "",
    test: ""
  };
    
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    if (name != "imageUpload"){
      this.setState({
        [name]: value
      });
    } else {
      this.setState({
        imageUpload: event.target.files[0]
      })
    }
  };



    render() {

      function checkData(){
        console.log(document.getElementsByClassName("fileSelector"));        
      }


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
        <button onClick= {checkData} style={{height: "20px", width: "40px"}}></button>
        <input className = "fileSelector"        
          name= "imageUpload"
          type= "file"     
          value={this.state.img}
          onChange={this.handleInputChange}
        />
      <input 
      name= 'test'
      type= 'text'
      value={this.state.test}
      onChange={this.handleInputChange}
      />
      </article>;     
      
      </div>
    );
  }
}

export default Post


