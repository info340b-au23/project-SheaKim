import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const Visualization = ({ logs }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (logs.length === 0) {
      return;
    }

    const dates = {};
    logs.forEach((log) => {
      const date = log.date;
        if (!dates[date]) {
          dates[date] = 1;
        } else {
          dates[date] += 1;
        }
    });

    const chartData = {
      datasets: [{
        label: '# of logs',
        data: Object.keys(dates).map((date) => ({
          x: new Date(date),
          y: new Date(date).getTime(),
          r: dates[date] * 10,
        })),
        backgroundColor: 'rgba(75, 0, 130, 0.6)',
      }],
    };

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'bubble',
      data: chartData,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Sickness Logs Overtime',
          },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              parser: 'date-fns',
              unit: 'day',
              displayFormats: {
                day: 'MMM d, yyyy',
              },
            },
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            type: 'time',
            title: {
              display: true,
              text: 'Time',
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [logs]);

  return <canvas ref={chartRef} width="400" height="200" />;
};

export default Visualization;
