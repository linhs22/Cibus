
import image from "./egg.png"
import React from 'react'
import Searchmenu from "../Searchmenu"
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';



class Searchbar extends React.Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
              {/* <Header /> */}
              <br />
              <br />
              <br />
              <form>
                <br />
                <br />
                <br />
                <div className="searchBar" style={{          
                  margin: "auto",
                  width: "50%",
                  display:"inline-block"
                }}>
      
           
                  <h3>Search</h3>
                  <br/>
      
                  <input
                    type="text"
                    ref="search"
                    placeholder="User, Tag, Food?"
                    // onClick={addButtons}
                  // value=""
                  />
                  <br/>
                  <br/>
                  <Searchmenu />
                  
                  <img style={{  cursor: "pointer", float:"right" }} src={image} alt="enter" />
      
      
                </div>
                <br />
                <br />
                <br />
      
              </form>
            </div>
          )
        }
      }
      export default Searchbar;
