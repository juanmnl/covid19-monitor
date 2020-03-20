import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [
    '28.02',
    '29.02',
    '1.03',
    '2.03',
    '3.03',
    '4.03',
    '5.03',
    '6.03',
    '7.03',
    '8.03',
    '9.03',
    '10.03',
    '11.03',
    '12.03',
    '13.03',
    '14.03',
    '15.03',
    '16.03',
    '17.03',
    '18.03',
    '19.03'
  ],
  datasets: [
    {
      label: 'Contagios Confirmados',
      backgroundColor: 'hsla(163, 72%, 48%, .2)',
      borderColor: 'hsla(163, 72%, 48%, 1.0)',
      borderWidth: 1,
      hoverBackgroundColor: 'hsla(50, 100%, 64%, 0.4)',
      hoverBorderColor: 'hsla(50, 100%, 64%, 1.0)',
      data: [0, 1, 5, 1, 0, 3, 3, 1, 0, 1, 0, 2, 0, 2, 1, 8, 9, 21, 53, 57, 92]
    }
  ]
};

function Charts() {
  return (
    <>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </>
  );
}

export default Charts;
