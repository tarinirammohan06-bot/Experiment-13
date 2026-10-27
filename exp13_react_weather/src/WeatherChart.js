import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherChart = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        // 5-day / 3-hour forecast endpoint (free plan)
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        );
        setForecast(response.data.list);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForecast();
  }, [city, apiKey]);

  const data = {
    labels: forecast.map((item) => item.dt_txt),
    datasets: [
      {
        label: `Temperature (°C) - ${city}`,
        data: forecast.map((item) => item.main.temp),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: '5-Day Temperature Forecast' },
    },
  };

  return forecast.length > 0 ? <Line data={data} options={options} /> : <p>Loading chart...</p>;
};

export default WeatherChart;
