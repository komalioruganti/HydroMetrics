import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const inputData = {
        annual_production_volume: 2,
        raw_material_water_usage: 6,
        dyeing_process_water_usage: 1,
        washing_finishing_water_usage: 2,
        supply_chain_water_footprint: 4
      };

      try {
        const response = await axios.post('http://127.0.0.1:8000/predict', inputData);
        setPrediction(response.data.water_footprint);
        console.log('Predicted Water Footprint:', response.data.water_footprint);
      } catch (error) {
        console.error('Error during API call', error);
      }
    };

    fetchData();
  //   getWaterFootprintPrediction(inputData).then(water_footprint => {
  //     console.log('Predicted Water Footprint:', water_footprint);
  // });
  
   
  }, []);

  return (
    <div>
      <h1>Water Footprint Prediction</h1>
      {prediction !== null && (
        <p>Predicted Water Footprint: {prediction}</p>
      )}
    </div>
  );
};

export default App;