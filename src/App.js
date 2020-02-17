
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
import Head from "./components/Head"
import Header from "./components/Header"


    function App() {
      return (
          <div>
        <Router>
        <Head />
        <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/search" component={Search} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
          <Footer />
          </div>
      );
    }
    export default App;