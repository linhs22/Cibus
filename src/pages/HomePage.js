import Head from "../components/Head"
import Post from "../components/Post"
import Postcard from "../components/Postcard"
import React, { Component } from 'react';

 class HomePage extends Component {
  render() {
    return (
      
      <div>
        <Head />
        <div>
          {/* <Post /> */}
          <Postcard />
        </div>
      </div>
    );
  }
}

export default HomePage