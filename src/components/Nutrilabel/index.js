import React from "react";
import "./nutrition.css";
// style={{position:"absolute", right: 0, marginRight: "16.2%"}}

class Nutrilabel extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="row" id="nutriFacts">
            <div id="specCol" className="col s12">
            <br/> <br/> <br/>
              <h4 id="specH4">Nutrition Facts</h4>
            </div>
          </div>
          <hr id="specCol" />
          <div className="row" id="serve">
            <div id="servingCol" className="col s4">
              Serving size
                  </div>
            <div id="servColTwo" className="col s8" id="servingSize">
              0
                  </div>
          </div>
          <hr id="thick" />
          <div className="row">
            <div id="amountCol" className="col s12">
              Amount per serving
                  </div>
          </div>
          <div className="row">
            <div className="col s6" id="cal">
              Calories
                  </div>
            <div className="col s6" id="calories">
            </div>
          </div>
          <hr id="under" />
          <div className="row">
            <div className="col s12" id="dailyValue">
              % Daily Value*
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="fat">
                Total Fat 0g
                  </div>
            <div className="col s2" id="fatPercent">
              0%
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="satFat">
              Saturated Fat 0g
                  </div>
            <div className="col s2" id="satFatPercent">
              0%
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s12" id="transfat">
              Trans Fat 0g
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="cholesterol">
                Cholesterol 0mg
                  </div>
            <div className="col s2" id="cholesterolpercent" >
              0%
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="sodium" >
                Sodium 0mg
                  </div>
            <div className="col s2" id="sodiumpercent">
              0%
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="carbs">
                Total Carbohydrate 0g
                  </div>
            <div className="col s2" id="carbspercent">
              0%
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="fiber">
              Dietary Fiber 0g
                  </div>
            <div className="col s2" id="fiberpercent">
              0%
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s12" id="sugar" >
              Total Sugars 0g
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s12" id="protien" >
                Protein 0g
                  </div>
          </div>
          <hr id="thick" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              Vitamin A
                  </div>
            <div className="col s2" id="vita">
              0%
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              Calcium
                  </div>
            <div className="col s2" id="calcium">
              0%
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              Iron
                  </div>
            <div className="col s2" id="iron">
              0%
                  </div>
          </div>
          <hr id="transHr" />
          <div className="row">
            <div className="col s10" id="ammountCol">
              Potassium
                  </div>
            <div className="col s2" id="potassium">
              0%
                  </div>
          </div>
          <hr id="under" />
          <div className="row">
            <div className="col s12" id="advice">
              *The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                  </div>
          </div>


        </div>
        {/* <br/> <br/> <br/> */}
      </div>
    );
  }
}
export default Nutrilabel