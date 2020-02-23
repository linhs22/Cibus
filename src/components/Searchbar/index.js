
import image from "./FryingPan.png"
import React from 'react'

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
      
                  <input
                    type="text"
                    ref="search"
                    placeholder="User, Tag, Food?"
                    // onClick={addButtons}
                  // value=""
                  />
                  <img style={{ height: "30px", padding: "4px", cursor: "pointer", float:"right" }} src={image} alt="Frying Pan" />
      
      
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
