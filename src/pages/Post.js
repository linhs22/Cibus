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
    concepts: [],
    conceptFilter: 0.80,
    imageUrl: null,
    show: false,
    showLabel: false,
    nutrition: null,
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
    if(this.state.newIngredient) {
    this.setState({
      concepts: [...this.state.concepts, {name: this.state.newIngredient}]
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
    // const list = this.state.concepts.map(item=>{
    //       if (this.state.concepts.indexOf(item) === parseInt(id)) 
    //       {
    //         item[name] = value;
    //       }
    //     });
    this.setState(
      // {concepts: list}
      state => {
      const list = state.concepts.map(item=>{
        if (state.concepts.indexOf(item) === parseInt(id)) 
        {
          item[name] = value;
        }
      });
      return list;
    })};

  removeIngredient = event => {
    this.setState({ concepts: this.state.concepts.filter( item =>
      this.state.concepts.indexOf(item) !== +event.currentTarget.getAttribute('data-id')
    )});
  }

  handleClickNutrition = () => {
    //Filter out unnecessary items
    var convertArray = this.state.concepts.filter(item => item.amount > 0);
    //Build string for Nutritionix natural language
    var string = "";
    for (const item in convertArray) {
      if (item > 0) string += `, ${convertArray[item].amount}g ${convertArray[item].name}`;
      else          string += `${convertArray[item].amount}g ${convertArray[item].name}`;
    };
    API.nutrition({string})
    .then(res => {
      console.log(res.data.foods[0]);
      this.setState({
        nutrition: res.data.foods[0]
      });
    })
    .catch(err => console.log(err));
  };

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
                            <input type="file" className="form-control hidden" name="file" onChange={this.onChangeHandler}></input>
                          </div>
                        }
                      </div>
                      <TransitionGroup {...this.state.groupProps}>
                        {this.state.concepts?
                          this.state.concepts.filter(item => item.value > this.state.conceptFilter || item.value === undefined)
                          .map( item => (
                          <Fade key={this.state.concepts.indexOf(item)} collapse bottom>
                            <div className="card">
                              <div className="card-body justify-content-between" style={myStyle.container}>
                                {item.name}
                                <div>
                                    <input
                                    type="number"
                                    name='amount'
                                    id={this.state.concepts.indexOf(item)}
                                    placeholder="Enter amount (10g)"
                                    value={item.amount? parseInt(item.amount) : ""}
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
                              type="button">
                              Add Item
                            </button>
                          </div>
                        </div>
                        <small id="emailHelp" className="form-text text-muted">
                          Item Count: {this.state.concepts? this.state.concepts.length : "0"}
                        </small>
                        <button
                          className="btn btn-info btn-lg btn-block my-5"
                          type="button"
                          onClick={this.handleClickNutrition}
                        >
                          { this.state.showLabel ? 'Re-calculate' : 'Calculate' }
                        </button>
                      </div>
                    </form>
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
              {this.state.nutrition? 
                <Fade top>
                  <div style={myStyle.container}>
                    <Nutrilabel nutrition={this.state.nutrition}/>
                  </div> 
                </Fade> :
                ""
              }
              
            </article>  
          </div>
    );
  }
}

export default Post