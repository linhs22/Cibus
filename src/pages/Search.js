import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <br /> <br /> <br />
        <form>
          <br /> <br /> <br />
          <h3>Search</h3>
          <input type="text" ref="search" placeholder="User, Tag, Food?" />
          <br /> <br /> <br />
        </form>
      </div>
    )
  }
}
export default Search;