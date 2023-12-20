import LineChart from "../Components/LineChart" 
import LineChart1 from "../Components/LineChart1"
import Navbar from "../Components/navbar"
import '../css/hardware.css'
import { useEffect,useState } from "react"
import blueDrop from '../images/blue-drop.png';
import greyDrop from '../images/grey-drop.png'

export default function Hardware(){
    useEffect(() => {
        const fetchTopArticles = async () => {
          try {
            const response = await fetch("http://localhost:8080/hardware2");
            const responseData = await response.json();
            console.log(responseData)
            
    
          } catch (error) {
            console.error("Error fetching articles:", error);
          }
        };
    
        fetchTopArticles();
      }, []);
return (
    <>
    <Navbar></Navbar>
    <div className="total-wf-hard">Total Waterfootprint Value: <span className="color-change">2000 </span>litres</div>
     <div className="container">
        <div className="image-container">
            <img className="image" src = {blueDrop} alt="Your Image 1"/>
            <div className="percentage">45%</div>
        </div>
        <div className="image-container">
            <img className="image" src={greyDrop} alt="Your Image 2"/>
            <div className="percentage">25%</div>
        </div>
    </div>
<div className="water-value">Blue Water Footprint: 900 litres/day</div>
<div className="water-value">Grey Water Footprint: 500 litres/day</div>
     <LineChart></LineChart>
     <LineChart1></LineChart1>
    
     <div></div>
     
    </>
)
}