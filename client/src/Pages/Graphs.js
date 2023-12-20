import BarChart from "../Components/BarGraph";
import PieChart from "../Components/PieChart";
import Bar1 from "../Components/BarChart1";
import Bar2 from "../Components/BarChart2";
import Bar3 from "../Components/BarChart3";
import Navbar from "../Components/navbar";
import PieChart1 from "../Components/PieChart1";

export default function Graphs() {
  return (
    <>
      <Navbar></Navbar>
      <p className="head-title">Your Analysis</p>
      <div className="graph-container">
        <div className="graph-title">QuestionWise Analysis</div>
        <p className="graph">
          <BarChart></BarChart>
        </p>
      </div>
      <div className="graph-container-cat">
        <div>
          <div className="graph-title">Household </div>
          <p className="graph">
            <PieChart></PieChart>
          </p>
        </div>
        <div>
          <div className="graph-title">Dish And Laundry </div>
          <p className="graph">
            <Bar1></Bar1>
          </p>
        </div>
      </div>
      <div className="graph-container-cat">
        <div>
          <div className="graph-title">Vehicle </div>
          <p className="graph">
            <Bar2></Bar2>
          </p>
        </div>
        <div>
          <div className="graph-title">Food</div>
          <p className="graph">
            <Bar3></Bar3>
          </p>
        </div>
      </div>
    </>
  );
}
