import React from 'react';
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
import { Box, Stack } from '@mui/material';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Unique Visitors',
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 50, 60, 70],
            borderColor: 'rgb(62, 130, 247)',
            backgroundColor: 'rgb(62, 130, 247)',

        },
        {
            label: 'Dataset 2',
            data: [25, 10, 27, 48, 68, 76, 88],
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: 'rgb(4, 209, 130)',
            backgroundColor: 'rgb(4, 209, 130)',

        },
    ],
};

export function LineBarChart() {
    return (
        <>
           
                <Line options={options} data={data} />
           
        </>
    );
}
