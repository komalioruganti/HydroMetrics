import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export default function LineChart1() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "First Dataset",
        data: [],
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "green",
      },
    ],
  });

  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        const response = await fetch("http://localhost:8080/hardware1");
        const responseData = await response.json();
        const feeds = responseData.feeds;

        // Create arrays to hold labels and data
        const updatedLabels = [];
        const updatedData = [];

        feeds.forEach((e) => {
          const len = e.created_at.length;
          const time = e.created_at.substring(11, len - 1);

          // Assuming e.field2 is an array, you might need to adjust this based on your data structure
          const fetchedData = e.field3;

          // Update the arrays directly within the loop
          updatedLabels.push(time);
          updatedData.push(fetchedData);
        });

        // Update the chart data outside of the loop
        setData({
          labels: updatedLabels,
          datasets: [
            {
              label: "First Dataset",
              data: updatedData,
              backgroundColor: "#AAD9D9",
              borderColor: "#8080D7",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchTopArticles();
  }, []);

  return (
    <>
    <div className="line-back-div1">
      <Line data={data} options={options} />
      </div>
    </>
  );
}
