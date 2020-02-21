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
      <div id="body">
        {/* <Postcard /> */}
        <br/> <br/>
        <Newcard2 /><Newcard /><Newcard /><Newcard /><Newcard /><Newcard />
      </div>

     

    );
  }
}

export default HomePage