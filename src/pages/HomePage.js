import Head from "../components/Head"
import Post from "../components/Post"
import Postcard from "../components/Postcard"
import Newcard from "../components/Newcard"
import Newcard2 from "../components/Newcard2"
import React, { Component } from 'react';
// import "../index.css"


 class HomePage extends Component {
  
  render() {
    return (
      <div>
        {this.props.posts.results.length > 0? this.props.posts.results.map(post => <Postcard posts={post}/>) : ""};
        {/* <Postcard posts={this.props.posts.results[0]}/> */}
      </div>

     

    );
  }
}

export default HomePage