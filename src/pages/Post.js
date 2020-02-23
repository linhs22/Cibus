import React, { Component } from "react";
import Nutrilabel from "../components/Nutrilabel/index"
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import Fade from "react-reveal/Fade";
import TransitionGroup from 'react-transition-group/TransitionGroup';

const myStyle = {
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },
  image: {
    width: "300px",
    height: "300px",
  }
};

 class Post extends React.Component {
  state = {    
    newIngredient: "",
    selectedFile: null,
    loadFile: null,
    concepts: null,
    imageUrl: null,
    show: false,
    groupProps: {
      appear: true,
      enter: true,
      exit: true,
    }
  };

  ///////////////////// PAOLO /////////////////////
  // Submit image
  onChangeHandler = async (event) => {
    event.preventDefault();
    await this.setState({
        selectedFile: event.target.files[0],
        loadFile: URL.createObjectURL(event.target.files[0])
    });
    const data = new FormData();
    data.append('image', this.state.selectedFile);
    API.uploadPost(data)
    .then(res => {
      console.log(res.data);
      this.setState({
        concepts: res.data.concepts,
        imageUrl: res.data.imageUrl,
        show: false
      });
    })
    .catch(err => console.log(err));
  };

  // Ingredient List
  addIngredient = (event) => {
    event.preventDefault();
    console.log(event);
    this.setState({
      concepts: [...this.state.concepts, {name: this.state.newIngredient}]
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  ///////////////////// PAOLO /////////////////////
    render() {

      return(
        <div>
          <article className="Post" ref="Post" style={myStyle.body}>
              {/* <header style={{display: "flex", flexDirection:"row"}}>
                <div className="Post-user">
                  <div className="Post-user-avatar">
                    <img src={this.props.user? this.props.user.profilePic : ""} alt={this.props.user? this.props.user.firstName : ""} />
                  </div>
                  <div className="Post-user-nickname">
                    <span>{this.props.user? this.props.user.username : ""}</span>
                  </div>
                </div>
              </header> */}
                
              <div className="Post-image"  style={myStyle.container}>
                  <div>
                    <form method="POST" action="#" enctype="multipart/form-data">
                      <div style={myStyle.container}>
                        {this.state.selectedFile? 
                          <div>
                            <img src={this.state.loadFile} alt="Chosen Image" style={myStyle.image}></img>
                          </div> :
                          <div className="form-group files color">
                            <label>Upload Your Image</label>
                            <input type="file" className="form-control" name="file" onChange={this.onChangeHandler}></input>
                          </div>
                        }
                      </div>
                      
                      <TransitionGroup {...this.state.groupProps}>
                        {this.state.concepts?
                          this.state.concepts.map( item => (
                          <Fade key={this.state.concepts.indexOf(item)} bottom>
                            <div className="card">
                              <div className="card-body justify-content-between">
                                {item.name}
                              </div>
                            </div>
                          </Fade>)) :
                          "" }
                      </TransitionGroup>
                      <div className="col-10">
                        <div className="input-group mt-4 mb-1">
                          <input
                            type="text"
                            className="form-control"
                            id='todoField'
                            placeholder='Food item'
                            name='newIngredient'
                            value={this.state.newIngredient}
                            onChange={this.handleChange}
                          />
                          <div className="input-group-append">
                            <button
                              onClick={this.addIngredient}
                              className="btn btn-outline-success"
                              type="button"
                            >
                              Add Item
                            </button>
                          </div>
                        </div>
                        <small id="emailHelp" className="form-text text-muted">
                          Item Count: {this.state.concepts? this.state.concepts.length : "0"}
                        </small>
                      </div>
                    </form>
                  </div>
              </div>
              {/* <Fade top cascade collapse when={this.state.show}>
                <div style={myStyle.container}>
                  { this.state.concepts? (
                    <List style={{display: "flex", flexDirection:"column", flexGrow:"1"}}>
                      {this.state.concepts.map(concepts => (
                        <ListItem key={concepts.name}>
                          <a href={"/ingredients/" + ingredient._id}>
                            <strong>
                              {ingredient} by {ingredient}
                            </strong>
                          </a>
                        </ListItem>
                      ))}
                    </List>
                    ) : (
                      
                      <h3>No Results to Display</h3>
                    )
                  }
                </div>
              </Fade> */}
              {/* <div style={myStyle.container}>
                <Fade>
                  <div>
                    <h2>React Reveal</h2>
                    <h2>React Reveal</h2>
                    <h2>React Reveal</h2>
                  </div>
                </Fade>
              </div> */}
              

                
              {/* </div> */}
              
              {/* <div className="Post-caption">
                <input className="description-field"
                name= "description"
                type= "text"
                value={this.state.description}
                onChange={this.handleInputChange}
                >
                </input>
              </div> */}
              <div style={myStyle.container}>
                <Nutrilabel/>
              </div>
              
            </article>  
          </div>
    );
  }
}

export default Post