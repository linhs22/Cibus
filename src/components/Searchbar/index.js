
import image from "./enter.png"
import React from 'react'
import Searchmenu from "../Searchmenu"

class Searchbar extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
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
            display: "inline-block"
          }}>


            <h3>Search</h3>
            <br />
          

            <input
              type="text"
              ref="search"
              placeholder="Tacos, Jacob, etc"
            // onClick={addButtons}
            // value=""
            />
            <Searchmenu />
            <br />

            {/* <img src={image} style={{ border: ".5px solid lightgrey", borderRadius: "25%" }} alt="Search" /> */}


          </div>
          <br />
          <br />
          <br />

        </form>
      </div>
    )
  }
}
export default Searchbar;
