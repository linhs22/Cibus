import Head from "../components/Head"
import Post from "../components/Post"
import Postcard from "../components/Postcard"
import Newcard from "../components/Newcard"

import React, { Component } from 'react';
import API from "../utils/API";
import debounce from "lodash.debounce";
// import "../index.css"


 class HomePage extends Component {
   state = {
     results: [],
     count: 0,
     numOfPostToGet: 2,
     offset: 0,
     userProps: false,
     user:{},
     username: ""
   };

   componentDidMount() {
     API.isAuthenticated().then(data => {
       console.log('Yau')
       console.log(data.data.name);
       this.setState({
        user: data.data
      })
     })
    //  .then(res => {
    //     console.log(this.state.username);
    //    API.userExist(this.state.username).then(data=>{
    //     this.setState({
    //       user:data.data
    //     })
    //     console.log("user exist")
    //     console.log(this.state.user);
    //  });
    // }) 
    .then(res => {
      console.log("Here")
      console.log(this.state.user)
      if(this.state.user && !this.state.userProps)
      {
        this.getUsers(); 
        this.setState({userProps: true});
      } 
    }) 
     .catch(err=>{
       console.log('No bueno')
     })

    window.addEventListener('scroll', this.handleScrollEvent);
  };

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScrollToElement);
  }

  componentDidUpdate() {
  
  }
    

  handleScrollEvent = debounce((event) => {
      console.log("scrollTop: " + document.documentElement.scrollTop);
      console.log("What?: " + document.getElementById(this.state.count).offsetTop);
      console.log("scrollTop: " + (document.getElementById(this.state.count).offsetTop - document.getElementById(1).offsetTop * 3));
      console.log("Element scrollTop: " + (document.getElementById(this.state.count).offsetTop - document.getElementById(1).offsetTop * 3));
      if (document.documentElement.scrollTop > document.getElementById(this.state.count).offsetTop - document.getElementById(1).offsetTop * 3) {
      this.getUsers();
      };
  }, 100);

  getUsers = () => {
      console.log("Hello");
      API.getPostsHomepage(this.state.user.id, this.state.offset)
      .then(res => {
        console.log(res.data.length);
          this.setState({
              results: [...this.state.results, ...res.data],
              offset: this.state.offset + 2,
              count: this.state.count + res.data.length
          });
      })
      //.then(console.log(this.state.results + this.state.search))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        {this.state.results.length > 0? this.state.results.map(post => <Postcard posts={post} key={this.state.results.indexOf(post)} id={this.state.results.indexOf(post) + 1} user={this.state.user}/>) : ""};
        {/* {this.props.posts.results.length > 0? this.props.posts.results.map(post => <Postcard posts={post}/>) : ""}; */}
        {/* <Postcard posts={this.props.posts.results[0]}/> */}
      </div>
    );
  }
}

export default HomePage