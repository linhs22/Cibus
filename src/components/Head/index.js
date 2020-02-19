import React from "react";
import "./Head.css";

class Head extends React.Component{
    render(){
        return (
           <head>
               <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet"></link>
               <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
               <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
               <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
           </head>
       );
    }   
}
export default Head;