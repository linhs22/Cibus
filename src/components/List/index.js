import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container" style={{width:"25%"}}>
      <ul className="list-group">{children}</ul>
    </div>
  );
}

// style={{width: "40%", position:"absolute", right: "50%"}}
export function ListItem({ children }) {
  return (
  <div style={{display: "flex", flexDirection:"row"}}>
  <li className="list-group-item" style={{width: "50%",display: "flex", flexDirection:"column", border: "none"}}>Ingredient
            <input 
              name= 'test'
              type= 'text'
              defaultValue= "carrot"
              // value={state.test}
              // onChange={this.handleInputChange}
            />
    {children}
    </li>
           <li className="list-group-item" style={{width: "20%",display: "flex", flexDirection:"column"}}>Amount
            <input 
              name= 'test'
              type= 'text'
              defaultValue= "x"
              // value={this.state.test}
              // onChange={this.handleInputChange}
            />
    {children}
    </li>
  </div>
  )}
