import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

const CircleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Data 1', 'Data 2', 'Data 3'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    new Doughnut(chartRef.current, {
      data: data,
      options: chartOptions,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default CircleChart;
