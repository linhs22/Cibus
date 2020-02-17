// import React from 'react'
import Head from "../components/Head"
// import Header from "../components/Header"
import Post from "../components/Post"
// import Footer from "../components/Footer"
import React, { Component } from 'react';
// import "../components/Post/Style.css";


 class HomePage extends Component {
  render() {
    return (
      
      <div>
        <Head />
        {/* <Header /> */}
        <div>
          <Post />
          {/* <Post2 />
          <Post3 /> */}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default HomePage