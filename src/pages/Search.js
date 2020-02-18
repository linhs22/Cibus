import React, { Component } from "react";
<<<<<<< HEAD
// import Header from "../components/Header"
// import "../components/Post/Style.css";
import image from "./FryingPan.png"

var hidden = true
var display = "none"
=======
>>>>>>> 01fe2cda4ed5e5d6f3a28f24caa08d1ba5964bd1

class Search extends Component {

  render() {
<<<<<<< HEAD


    function checkDisplay() {   
      hidden = !hidden   
      if (hidden){
        display = "none";
      } else {
        display = "block";
      };
    };

    function addButtons(e){
      // hidden = true
      checkDisplay()
    }




    return (
      <div>
        {/* <Header /> */}
        <br />
        <br />
        <br />
        <form>
          <br />
          <br />
          <br />
          <div className="searchBar" style={{          
            margin: "auto",
            width: "50%",
          }}>

     
            <h3 style={{ marginLeft: "20%" }}>Search</h3>

            <input style={{ marginLeft: "20%" }}
              type="text"
              ref="search"
              placeholder="User, Tag, Food?"
              onClick={addButtons}
            // value=""
            />

            <img style={{ height: "30px", padding: "4px", cursor: "pointer", }} src={image} alt="Frying Pan" />

          </div>

          {/* <div className= "buttonsDiv" style= {{display: {display}}}>
            <button>
              Button 1
            </button>
            <button>
              Button 1
            </button>
            <button>
              Button 1
            </button>
          </div> */}
          <br />
          <br />
          <br />

=======
    return (
      <div>
        <br /> <br /> <br />
        <form>
          <br /> <br /> <br />
          <h3>Search</h3>
          <input type="text" ref="search" placeholder="User, Tag, Food?" />
          <br /> <br /> <br />
>>>>>>> 01fe2cda4ed5e5d6f3a28f24caa08d1ba5964bd1
        </form>
      </div>
    )
  }
}
export default Search;