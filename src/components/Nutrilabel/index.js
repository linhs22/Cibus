import React from "react";
import "./nutrition.css";


class Nutrilabel extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="row" id="nutriFacts">
            <div id="specColdiv" className="col s12">
              <br /> <br /> <br />
              <h4 id="specH4">Nutrition Facts</h4>
            </div>
          </div>
          <hr id="specCol" />
          <div className="row" id="serve">
            <div id="servingCol" className="col s6">
              <p>Serving size</p>
                  </div>
            <div id="servColTwo" className="col s8" id="servingSize">
            <p id="pLeft">1</p>
                  </div>
          </div>
          <hr id="thick" />
          <div className="row">
            <div id="amountCol" className="col s12">
              <p>Amount per serving</p>
                  </div>
          </div>
          <div className="row">
            <div className="col s6" id="cal">
              <p>Calories {this.props.nutrition? parseFloat(this.props.nutrition.nf_calories.toFixed(0)) : 0}</p>
                  </div>
            <div className="col s6" id="calories">
            </div>
          </div>
          <hr id="under" />
          <div className="row">
            <div className="col s12" id="dailyValue">
              <p id="pLeft">% Daily Value*</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="fat">
              <p>Total Fat {this.props.nutrition? parseFloat(this.props.nutrition.nf_total_fat.toFixed(0)) : 0}g</p>
                  </div>
            <div className="col s2" id="fatPercent">
            <p id="pLeft">{this.props.nutrition? parseFloat(((this.props.nutrition.nf_total_fat / 65) * 100).toFixed(0)) : 0}%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="satFat">
              <p>-Saturated Fat {this.props.nutrition? parseFloat(this.props.nutrition.nf_saturated_fat.toFixed(1)) : 0}g</p>
                  </div>
            <div className="col s2" id="satFatPercent">
            <p id="pLeft"></p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s12" id="transfat">
              <p>-Trans Fat {this.props.nutrition? parseFloat(this.props.nutrition.full_nutrients[53].value.toFixed(1)) : 0}g</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="cholesterol">
              <p>Cholesterol {this.props.nutrition? parseFloat(this.props.nutrition.nf_cholesterol.toFixed(0)) : 0}mg</p>
                  </div>
            <div className="col s2" id="cholesterolpercent" >
            <p id="pLeft">{this.props.nutrition? parseFloat(((this.props.nutrition.nf_calories / 3000) * 100).toFixed(0)) : 0}%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="sodium" >
              <p>Sodium {this.props.nutrition? parseFloat(this.props.nutrition.nf_sodium.toFixed(0)) : 0}mg</p>
                  </div>
            <div className="col s2" id="sodiumpercent">
            <p id="pLeft">{this.props.nutrition? parseFloat(((this.props.nutrition.nf_sodium.toFixed(0) / 2400) * 100).toFixed(0)) : 0}%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="carbs">
              <p>Total Carbohydrate {this.props.nutrition? parseFloat(this.props.nutrition.nf_total_carbohydrate.toFixed(0)) : 0}g</p>
                  </div>
            <div className="col s2" id="carbspercent">
            <p id="pLeft">{this.props.nutrition? parseFloat(((this.props.nutrition.nf_total_carbohydrate / 300) * 100).toFixed(0)) : 0}%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="fiber">
              <p>-Dietary Fiber {this.props.nutrition? parseFloat(this.props.nutrition.nf_dietary_fiber.toFixed(0)) : 0}g</p>
                  </div>
            <div className="col s2" id="fiberpercent">
            <p id="pLeft">{this.props.nutrition? parseFloat(((this.props.nutrition.nf_dietary_fiber / 25) * 100).toFixed(0)) : 0}%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s12" id="sugar" >
              <p>-Total Sugars {this.props.nutrition? parseFloat(this.props.nutrition.nf_sugars.toFixed(1)) : 0}g</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s12" id="protien" >
              <p>Protein {this.props.nutrition? parseFloat(this.props.nutrition.nf_protein.toFixed(1)) : 0}g</p>
                  </div>
          </div>
          <hr id="thick" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              <p>Vitamin A</p>
                  </div>
            <div className="col s2" id="vita">
            <p id="pLeft">{this.props.nutrition? parseFloat(((this.props.nutrition.full_nutrients[30].value / 5000) * 100).toFixed(1)) : 0}%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              <p>Calcium</p>
                  </div>
            <div className="col s2" id="calcium">
            <p id="pLeft">{this.props.nutrition? parseFloat(((this.props.nutrition.full_nutrients[19].value / 1300) * 100).toFixed(1)) : 0}%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              <p>Iron</p>
                  </div>
            <div className="col s2" id="iron">
            <p id="pLeft">{this.props.nutrition? parseFloat(((this.props.nutrition.full_nutrients[20].value / 18) * 100).toFixed(1)) : 0}%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              <p>Potassium</p>
                  </div>
            <div className="col s2" id="potassium">
            <p id="pLeft">{this.props.nutrition? parseFloat(((this.props.nutrition.nf_potassium / 3500) * 100).toFixed(0)) : 0}%</p>
                  </div>
          </div>
          <hr id="under" />
          <div className="row">
            <div className="col s12" id="advice">
              *The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                  </div>
          </div>


        </div>
        <br /> <br /> <br />
      </div>
    );
  }
}
export default Nutrilabel