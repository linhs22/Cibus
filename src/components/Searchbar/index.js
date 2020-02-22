
import image from "./FryingPan.png"
import React from 'react'

class Searchbar extends React.Component {
    render() {
        return (
            <div>
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
                }}>
      
           
                  <h3 style={{ marginLeft: "20%" }}>Search</h3>
      
                  <input style={{ marginLeft: "20%" }}
                    type="text"
                    ref="search"
                    placeholder="User, Tag, Food?"
                    // onClick={addButtons}
                  // value=""
                  />
      
                  <img style={{ height: "30px", padding: "4px", cursor: "pointer", }} src={image} alt="Frying Pan" />
      
                </div>
                {/* <Postcard /> */}
                {/* <Smallcard /> */}
      
                {/* <div className= "buttonsDiv" style= {{display: {display}}}>
                  <button>
                    Button 1
                  </button>
                  <button>
                    Button 1
                  </button>
                  <button>
                    Button 1
                  </button>
                </div> */}
                <br />
                <br />
                <br />
      
              </form>
            </div>
          )
        }
      }
      export default Searchbar;
