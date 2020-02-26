import React, { Component } from "react";
import Nutrilabel from "../components/Nutrilabel/index"
import { List, ListItem } from "../components/List";
import { Redirect, withRouter } from "react-router-dom";
import API from "../utils/API";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Postcard from "../components/Postcard"

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
    userId: this.props.user.id,
    postId: null,
    newIngredient: "",
    selectedFile: null,
    loadFile: null,
    concepts: [],
    conceptFilter: 0.80,
    imageUrl: null,
    show: false,
    showLabel: false,
    nutrition: null,
    description: "",
    recipe: "",
    location: "",
    groupProps: {
      appear: true,
      enter: true,
      exit: true,
    },
    // Step 1 Upload pic and ingredients
    step1: true,
    // Step 2 Review nutrition or recalculate
    step2: false,
    // Step 3 Add comments, tags, location
    step3: false
  };

  ///////////////////// PAOLO /////////////////////
  // Submit image
  // componentDidMount(){
  //   console.log(this.props);
  //   setTimeout(()=>{
  //     this.props.history.push("/")
  //   },1500)
  // }
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
          postId: res.data.postId,
          show: false
        });
      })
      .catch(err => console.log(err));
  };

  // Ingredient List
  addIngredient = (event) => {
    event.preventDefault();
    if (this.state.newIngredient) {
      this.setState({
        concepts: [...this.state.concepts, { name: this.state.newIngredient }]
      });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleIngredientChange = (event) => {
    const { name, value, id } = event.target;
    const conceptsArr = this.state.concepts;
    const list = conceptsArr.map((item, index) => {
      if (index === parseInt(id)) {
        item[name] = parseInt(value);
      }
      return item;
    });
    this.setState({
      concepts: list
    });
  };

  removeIngredient = event => {
    this.setState({
      concepts: this.state.concepts.filter(item =>
        this.state.concepts.indexOf(item) !== +event.currentTarget.getAttribute('data-id')
      )
    });
  };

  handleClickNutrition = () => {
    //Filter out unnecessary items
    var convertArray = this.state.concepts.filter(item => item.amount > 0);
    //Build string for Nutritionix natural language
    var string = "";
    for (const item in convertArray) {
      if (item > 0) string += `, ${convertArray[item].amount}g ${convertArray[item].name}`;
      else string += `${convertArray[item].amount}g ${convertArray[item].name}`;
    };
    API.nutrition({ string })
      .then(res => {
        this.setState({
          nutrition: res.data.foods[0],
          step1: false,
          step2: true
        });
      })
      .catch(err => console.log(err));
  };

  handleClickSubmitPost = () => {
    var postData = {
      UserId: this.props.user.id,
      ingredients: this.state.concepts.filter(item => item.amount > 0),
      postId: this.state.postId,
      nutrition: this.state.nutrition,
      description: this.state.description,
      recipe: this.state.recipe,
      location: this.state.location
    };
    console.log(postData)
    API.uploadPost(postData)
      .then(res => {
        console.log("done");
        //this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  handleClickBackStep1 = () => {
    this.setState({
      step1: true,
      step2: false
    })
  };

  handleClickBackStep2 = () => {
    this.setState({
      step2: true,
      step3: false
    })
  };

  handleClickNext = () => {
    this.setState({
      step2: false,
      step3: true
    })
  };

  render() {

    return (
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

          <div className="Post-image" style={myStyle.container}>
            <div>
              {this.state.step1 ?
                <Fade right opposite>
                  <form method="POST" action="#" enctype="multipart/form-data">
                    <div style={myStyle.container}>
                      {this.state.selectedFile ?
                        <div>
                          <img src={this.state.loadFile} alt="Chosen Image" style={myStyle.image}></img>
                        </div> :
                        <div className="form-group files color">
                          <label>Upload Your Image</label>
                          <input type="file" className="form-control hidden" name="file" onChange={this.onChangeHandler}></input>
                          
                        </div>
                      }
                    </div>
                    <TransitionGroup {...this.state.groupProps}>
                      {this.state.concepts ?
                        this.state.concepts.filter(item => item.value > this.state.conceptFilter || item.value === undefined)
                          .map((item, index) => (
                            <Fade key={index} collapse bottom>
                              <div className="card">
                                <div className="card-body justify-content-between" style={myStyle.container}>
                                  {item.name}
                                  <div>
                                    <input
                                      type="number"
                                      name='amount'
                                      id={this.state.concepts.indexOf(item)}
                                      placeholder="Enter amount (10g)"
                                      value={item.amount ? parseInt(item.amount) : ""}
                                      onChange={this.handleIngredientChange}
                                    />&nbsp;&nbsp;
                                    <button
                                      data-id={this.state.concepts.indexOf(item)}
                                      onClick={this.removeIngredient}
                                      type="button"
                                      className="close"
                                      aria-label="Close"
                                    ><span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>

                                </div>
                              </div>
                            </Fade>)) :
                        ""}
                    </TransitionGroup>
                    {this.state.selectedFile ?
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
                              type="button">
                              Add Ingredient
                                </button>
                          </div>
                        </div>
                        <small id="emailHelp" className="form-text text-muted">
                          Item Count: {this.state.concepts ? this.state.concepts.length : "0"}
                        </small>
                      </div>
                      :
                      ""
                    }
                  </form>
                  {this.state.selectedFile && this.state.concepts ?
                    <Flash>
                      <button
                        className="btn btn-info btn-lg btn-block my-5"
                        //disabled={!this.state.selectedFile}
                        type="button"
                        onClick={this.handleClickNutrition}
                      > Calculate
                        </button>
                    </Flash>
                    :
                    ""
                  }
                </Fade>
                :
                ""
              }

              {this.state.step2 ?
                <Fade right opposite>
                  <button
                    className="btn btn-secondary btn-lg btn-block my-5"
                    type="button"
                    onClick={this.handleClickBackStep1}
                  >
                    Back
                        </button>
                  <button
                    className="btn btn-info btn-lg btn-block my-5"
                    type="button"
                    onClick={this.handleClickNext}
                  >
                    Next
                        </button>
                  <div style={myStyle.container}>
                    <Nutrilabel nutrition={this.state.nutrition} />
                  </div>
                </Fade> :
                ""
              }

              {this.state.step3 ?
                <Fade right opposite>
                  <button
                    className="btn btn-secondary btn-lg btn-block my-5"
                    type="button"
                    onClick={this.handleClickBackStep2}
                  >
                    Back
                      </button>
                  <button
                    className="btn btn-info btn-lg btn-block my-5"
                    type="button"
                    onClick={this.handleClickSubmitPost}
                  >
                    Share
                      </button>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-block" }} >
                      <input type="text" placeholder="Watcha eat?" name="description" value={this.state.description} onChange={this.handleChange} style={{ textAlign: "center", border: "1px solid grey", width:"600px", borderRadius: "25px", padding: "5px" }}></input><br></br>
                    </div>
                    <br />

                    <div style={{ display: "inline-block" }}>
                      <input type="text" placeholder="Where y'at?" name="location" value={this.state.location} onChange={this.handleChange} style={{ textAlign: "center", border: "1px solid grey", width:"600px", borderRadius: "25px", padding: "5px" }}></input>
                    </div>
                    <br/>
                    <div style={{ display: "inline-block" }}>
                      <textarea type="text" placeholder="How'd'ya do it?" name="recipe" value={this.state.recipe} onChange={this.handleChange} style={{ textAlign: "center", border: "1px solid grey", padding: "20px", width:"600px", borderRadius: "25px", height:"300px" }}></textarea><br></br>
                    </div>
                    <br />
                  </div>
                </Fade> :
                ""
              }
            </div>

          </div>

          {/* <div className="Post-caption">
                <input className="description-field"
                name= "description"
                type= "text"
                value={this.state.description}
                onChange={this.handleInputChange}
                >
                </input>
              </div> */}


        </article>
      </div>
    );
  }
}

export default withRouter(Post);