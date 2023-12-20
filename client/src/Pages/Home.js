import other7 from "../images/Other07.png";
import other18 from "../images/Other18.png";
import other0115 from "../images/Other0115.png";
import Navbar from "../Components/navbar.js";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="wrapper">
        <div className="cont">
          <div className="grid">
            <div>
              <div className="heading">Want To Know Your Water Footprint?</div>
              <div className="head-content">
                It include the amount of fresh water resources used to produce a
                good or a service.
              </div>
              <a href = "/waterCalculator">
              <div className="wfcalc">Calcuate Your WaterFootprint</div>
              </a>
            </div>
            <div>
              <img alt="Home-img" className="comp-img" src={other7}></img>
            </div>
          </div>
        </div>
        <div className="cont">
          <div className="grid1">
            <div>
              <img alt="Home-img" className="track-img" src={other18}></img>
            </div>
            <div>
              <div className="heading h1">
                Track Your Water Consumption Everyday
              </div>
              <div className="head-content h2">
                It include the amount of fresh water resources used to produce a
                good or a service.
              </div>
              <div className="wfcalc h1 b1">
                Are You Living in a Scarce Region?
              </div>
              <a href="/graph">
              <div className="wfcalc h1 b1 b2" >Get Your Analysis</div>
              </a>
            </div>
          </div>
        </div>
        <div className="cont globalMeter">
          <div className="gm-title">Global Meter</div>
          <div className="meter"> '</div>
          <div className="gm-text">Saved 5000 litres of water combing all HydroMetrics users</div>
        </div>
        <div className="cont">
          <div className="grid">
            <div>
              <div className="heading h3">Earn rewards in Real-time</div>
              <div className="head-content">
                Get rewards based on your water Footprint tracking progress.
              </div>
            </div>
            <div>
              <img alt="Home-img" className="comp-img" src={other0115}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
