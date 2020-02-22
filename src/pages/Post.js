import React, { Component } from "react";
import Nutrilabel from "../components/Nutrilabel/index"
import { List, ListItem } from "../components/List";

// import axios from 'axios';


 class Post extends React.Component {

  state = {    
    // insert data from api here 
    ingredients: [1,2,3,4],
    description: "",
    imageUpload: "",
    test: "asfd"
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
        imageUpload: "./"+event.target.files[0]
      })
    }
  };

  

  // renderIngredients(){
  //   this.state.ingredients.length ? (
  //     <List>
  //       {this.state.ingredients.map(ingredient => (
  //         <ListItem key={ingredient._id}>
  //           <a href={"/ingredients/" + ingredient._id}>
  //             <strong>
  //               {ingredient} by {ingredient}
  //             </strong>
  //           </a>
  //         </ListItem>
  //       ))}
  //     </List>
  //   ) : (
  //     <h3>No Results to Display</h3>
  //   )
  // }


    render() {

      function checkData(event){
        // console.log(document.getElementsByClassName("fileSelector")[0].value);        
        console.log(event.target.files[0]);
        console.log(event.target.value);

        
      }    return(
    <div>
      
     <article className="Post" ref="Post">
        <header style={{display: "flex", flexDirection:"row"}}>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src="https://qph.fs.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp" alt="Chris" />
            </div>
            <div className="Post-user-nickname">
    <span>Chris</span>
            </div>
          </div>
        </header>
        
        {/* <div className= "form-fields" style={{position:"absolute", left: 0}}> */}
          
        <div className="Post-image"  style={{display: "flex", flexDirection:"row"}}>
          <div className="Post-image-bg" style={{width: "50%", height: "50%", display: "flex", flexDirection:"column", flexGrow:"3"}}>
            <img alt="Icon Living" src=
            // {this.state.imageUpload}
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/20/1/FNM_010113-TTAH-Steamed-Pork-and-Mushroom-Shumai-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371612375300.jpeg"
            />
            {/* <input style={{position:"absolute", right: 0}}
              name= 'test'
              type= 'text'
              value={this.state.test}
              onChange={this.handleInputChange}
            />            */}
            </div>

            <div style={{display: "flex", flexDirection:"column", flexGrow:"1"}}>
            <input className = "fileSelector"        
              name= "imageUpload"
              type= "file"     
              value={this.state.img}
              onChange={this.handleInputChange}
              onInput={checkData}
            />
            <button onClick= {checkData} style={{height: "20px", width: "40px"}}></button>
            </div>

          {    this.state.ingredients.length ? (
        <List style={{display: "flex", flexDirection:"column", flexGrow:"1"}}>
          {this.state.ingredients.map(ingredient => (
            <ListItem key={ingredient._id}>
              {/* <a href={"/ingredients/" + ingredient._id}>
                <strong>
                  {ingredient} by {ingredient}
                </strong>
              </a> */}
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )
      }
        </div>
        {/* </div> */}
        
        <div className="Post-caption">
          <input className="description-field"
          name= "description"
          type= "text"
          value={this.state.description}
          onChange={this.handleInputChange}
          >
          </input>
        </div>

    <Nutrilabel/>
      
      </article>;    
      
      
      </div>
    );
  }
}

export default Post