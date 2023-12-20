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

  
import { Pie } from 'react-chartjs-2';
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

const PieChart1 =() => {
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
           const dataSet2 = [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
            setData({
                labels: ["Household","Dish And Laundry","Vehicle","Food"],
                datasets: [
                  {
                    label: 'Your WaterFootprint',
                    data:["200","300","400","500"],
                    borderColor: '#8A9CD8',
                    backgroundColor: '#8A9CD8',
                  }
                ],
              })
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
            <Pie data={data} options={options}/>
         </div>)
}
export default PieChart1;
