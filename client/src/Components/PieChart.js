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

import { Bar,Pie } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'y',
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
        display: false,
      },
    },
  };

const PieChart =() => {
    const [data, setData] = useState({
        labels: [],
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
             for (const val of res[0].userData[0].household) {
                labelSet.push(val.q);
                // labelSet.push(val.name)
            }
            for (const val of res[0].userData[0].household) {
                dataSet1.push(val.ans);
                // labelSet.push(val.name)
            }
            setData({
                labels: labelSet,
                datasets: [
                  {
                    label: 'Your WF',
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
        <div style={{width:'70%', height:'50%'}}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Bar data={data} options={options}/>
         </div>)
}
export default PieChart;
