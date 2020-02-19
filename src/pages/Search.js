import React, { Component } from "react";
// import Header from "../components/Header"
// import "../components/Post/Style.css";
import image from "./FryingPan.png"
import Postcard from "../components/Postcard"

var hidden = true
var display = "none"

class Search extends Component {

  render() {


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
          <Postcard />

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

        </form>
      </div>
    )
  }
}
export default Search;