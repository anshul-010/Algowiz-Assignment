// CandlestickChart.js
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const CandlestickChart = ({ data,time }) => {

  const [candlestickData, setCandlestickData] = useState([]);
  // console.log(time)
  useEffect(() => {
    const transformedData = data.map((item, index) => ({
      
      x: time+index, 
      y: [
        item.Nifty,                     // Open
        item.Banknifty ,                // High
        item.Finnifty ,                 // Low
        Math.random()*100000            // closing   
      ],
    }));

    setCandlestickData(transformedData);
  }, [time]);
  const series = [
    {
      data: candlestickData,
    },
  ];

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'Candlestick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return <div style={{width:"100%",margin:"auto"}}>
    <Chart options={options} width={"1400px"} margin={"auto"} series={series} type="candlestick" height={350} />
  </div>;
};

export default CandlestickChart;
