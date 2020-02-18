import Head from "../components/Head"
import Post from "../components/Post"
import React, { Component } from 'react';

 class HomePage extends Component {
  render() {
    return (
      
      <div>
        <Head />
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

export default HomePage