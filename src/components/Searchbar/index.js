
import React from 'react'
import Searchmenu from "../Searchmenu"
import image from "./egg.png"

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
            <br/>
            <img src={image} style={{margin:"5px", width:"200px", height:"auto" }} alt="Search" />
            <h3>Search</h3>
            <br />
            <br/>
            
          

            <input
              type="text"
              ref="search"
              placeholder="Search for..."
              onChange={this.props.handleInputChange}
              value={this.props.search}
            />
            <Searchmenu />
           



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
