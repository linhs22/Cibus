import Head from "../components/Head"
import Post from "../components/Post"
import Postcard from "../components/Postcard"
import Newcard from "../components/Newcard"
import Newcard2 from "../components/Newcard2"
import React, { Component } from 'react';
import API from "../utils/API";
import debounce from "lodash.debounce";
// import "../index.css"


 class HomePage extends Component {
   state = {
     results: [],
     count: 0,
     numOfPostToGet: 1,
     offset: 0,
     userProps: false,
     user:{}
   };

   componentDidMount() {
     API.userExist("javeyn").then(data=>{
       this.setState({
         user:data.data
       })
     })
    window.addEventListener('scroll', this.handleScrollEvent);
  };

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScrollToElement);
  }

  componentDidUpdate() {
    if(this.state.user && !this.state.userProps)
    {
      this.getUsers(); 
      this.setState({userProps: true});
    }   
  }
    

  handleScrollEvent = debounce((event) => {
      //if (document.getElementById(this.state.count) === null) return;
      console.log("scrollTop: " + document.documentElement.scrollTop);
      console.log("scrollTop: " + document.getElementById(this.state.count).offsetTop);
      console.log("Element scrollTop: " + document.getElementById(this.state.count).offsetTop);
      if (document.documentElement.scrollTop > document.getElementById(this.state.count).offsetTop) {
      this.getUsers();
      };
  }, 100);

  getUsers = () => {
      API.getPostsHomepage(this.state.user.id, this.state.offset, this.state.numOfPostToGet)
      .then(res => {
          this.setState({
              results: [...this.state.results, ...res.data],
              offset: this.state.offset + this.state.numOfPostToGet,
              count: this.state.count + this.state.numOfPostToGet
          });
      })
      //.then(console.log(this.state.results + this.state.search))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        {this.state.results.length > 0? this.state.results.map(post => <Postcard posts={post} key={this.state.results.indexOf(post)} id={this.state.results.indexOf(post)} user={this.state.user}/>) : ""};
        {/* {this.props.posts.results.length > 0? this.props.posts.results.map(post => <Postcard posts={post}/>) : ""}; */}
        {/* <Postcard posts={this.props.posts.results[0]}/> */}
      </div>
    );
  }
}

export default HomePage