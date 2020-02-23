
import './App.css';
import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Head from "./components/Head"
import Header from "./components/Header"
import API from './utils/API';
// import API from "./utils/API";
// import BottomNavigation from '@material-ui/core/BottomNavigation';


function App() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    profilePic: '',
    id: 0,
    isAuthenticated: true
  });

  useEffect(() => {
    API.userExist("mechea")
    .then(res => {
      setUser({
        name: res.data.firstname,
        username: res.data.username,
        profilePic: res.data.profilePic,
        id: res.data.id
      })
    })
  }, []);
  // const [posts, setPosts] = useState({
  //   results: [],
  //   postsToLoad: 1
  // });
  
  // useEffect(() => {
  //   API.getPostsHomepage(1, 8).then(res => {
  //     setPosts({
  //       results: [...posts.results, ...res.data]
  //     });
  //   })
  // }, [])
  
  return (
    <div id="body">
      <Router>
        <Head />
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage user={user}></HomePage>
          </Route>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/post">
            <Post user={user}></Post>
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}
export default App;