import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

const BarChart =() => {
    const [data, setData] = useState({
        labels: ["Q1","Q2","Q3","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10","Q11","Q12","Q13","Q14","Q15","Q16","Q17","Q18"
                  ,"Q19","Q20","Q21","Q22","Q23","Q24","Q25","Q26","Q27","Q28","Q29"],
        datasets: [
          {
            label: 'Dataset 1',
            data:[],
            borderColor: '#8A9CD8',
            backgroundColor: '#8A9CD8',
          }
        ],
      });
    useEffect(()=> {
       const fetchData= async()=> {
           const url = 'http://localhost:3001/q'
           const labelSet = []
           const dataSet1 = [];
           const dataSet2 = [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const val of res[0].userData[0].qData) {
                dataSet1.push(val.ans);
                // labelSet.push(val.name)
            }
            setData({
                labels: ["Q1","Q2","Q3","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10","Q11","Q12","Q13","Q14","Q15","Q16","Q17","Q18"
                      ,"Q19","Q20","Q21","Q22","Q23","Q24","Q25","Q26","Q27","Q28","Q29"],
                datasets: [
                  {
                    label: 'Your WaterFootprint',
                    data:dataSet1,
                    borderColor: '#8A9CD8',
                    backgroundColor: '#8A9CD8',
                  }
                ],
              })
            console.log("arrData", dataSet1)
         }).catch(e => {
                console.log("error", e)
            })
        }
        
        fetchData();
    },[])
   
    return(
        <div style={{width:'90%', height:'60%'}}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Bar data={data} options={options}/>
         </div>)
}
export default BarChart;
