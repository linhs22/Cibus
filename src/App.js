
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer"
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
// import Nav from "./components/Nav";

// import Footer from './components/Footer';

    // class App extends Component {
    //   render() {
    //     return (
          
    //       <div>
    //         <Head />
    //         <Header />
    //         <div>
    //           <Post />
    //           {/* <Post2 />
    //           <Post3 /> */}
    //         </div>
    //         <Footer />
    //       </div>
    //     );
    //   }
    // }

    function App() {
      return (
        <Router>
          <div>
            <Footer />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/search" component={Search} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
    }
    export default App;