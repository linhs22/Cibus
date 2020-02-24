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
            <p id="pLeft">0</p>
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
              <p>Calories</p>
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
              <p>Total Fat {this.props.nutrition? this.props.nutrition.nf_total_fat : "0"}g</p>
                  </div>
            <div className="col s2" id="fatPercent">
            <p id="pLeft">0%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="satFat">
              <p>-Saturated Fat 0g</p>
                  </div>
            <div className="col s2" id="satFatPercent">
            <p id="pLeft">0%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s12" id="transfat">
              <p>-Trans Fat 0g</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="cholesterol">
              <p>Cholesterol 0mg</p>
                  </div>
            <div className="col s2" id="cholesterolpercent" >
            <p id="pLeft">0%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="sodium" >
              <p>Sodium 0mg</p>
                  </div>
            <div className="col s2" id="sodiumpercent">
            <p id="pLeft">0%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="carbs">
              <p>Total Carbohydrate 0g</p>
                  </div>
            <div className="col s2" id="carbspercent">
            <p id="pLeft">0%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="fiber">
              <p>-Dietary Fiber 0g</p>
                  </div>
            <div className="col s2" id="fiberpercent">
            <p id="pLeft">0%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s12" id="sugar" >
              <p>-Total Sugars 0g</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s12" id="protien" >
              <p>Protein 0g</p>
                  </div>
          </div>
          <hr id="thick" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              <p>Vitamin A</p>
                  </div>
            <div className="col s2" id="vita">
            <p id="pLeft">0%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              <p>Calcium</p>
                  </div>
            <div className="col s2" id="calcium">
            <p id="pLeft">0%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              <p>Iron</p>
                  </div>
            <div className="col s2" id="iron">
            <p id="pLeft">0%</p>
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              <p>Potassium</p>
                  </div>
            <div className="col s2" id="potassium">
            <p id="pLeft">0%</p>
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