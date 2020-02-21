import Head from "../components/Head"
import Post from "../components/Post"
import Postcard from "../components/Postcard"
import React, { Component } from 'react';


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