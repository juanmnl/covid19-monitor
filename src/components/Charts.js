import React from 'react';
import { Bar, HorizontalBar, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { getDates } from '../utils/dateUtils';
import { useTranslation } from 'react-i18next';
import { useStats } from '../hooks/statsContext';

const ChartSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.3rem 0.7rem 0;
  display: flex;
  position: relative;
`;

const ChartPieSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  @media (max-width: 960px) {
    padding: 0 1rem 0.4rem;
  }
`;

// Usar esto para casos diarios (barras) y crear curva log() en nueva sección "La curva"

const datesArray = getDates(new Date('02/29/2020'), new Date());

const dailyConfirmed = [
  1,
  5,
  1,
  0,
  3,
  3,
  1,
  0,
  1,
  0,
  2,
  0,
  2,
  4,
  8,
  9,
  21,
  53,
  57,
  92,
  216,
  106,
  257,
  192,
  101,
  91,
  171,
  224,
  196
];

const sum = dailyConfirmed.reduce((a, b) => a + b);
console.log(sum);

let dailyTotal = [
  1,
  6,
  7,
  7,
  10,
  13,
  14,
  14,
  15,
  15,
  17,
  17,
  19,
  23,
  28,
  37,
  58,
  111,
  168,
  260,
  476,
  582,
  839,
  1031,
  1132,
  1223,
  1394,
  1618,
  1814
];

const confirmed = {
  labels: datesArray.map(date => date.displayFormat),
  datasets: [
    {
      label: 'Confirmados Día',
      pointBorderColor: 'hsla(163, 72%, 48%, 1.0)',
      pointBackgroundColor: 'hsla(163, 72%, 48%, 0.7)',
      backgroundColor: 'hsla(163, 72%, 48%, .4)',
      borderColor: 'hsla(163, 72%, 48%, 1.0)',
      borderWidth: 1,
      hoverBackgroundColor: 'hsla(163, 72%, 48%, .9)',
      hoverBorderColor: 'hsla(163, 72%, 48%, 1)',
      pointRadius: 6,
      pointStyle: 'mitter',
      showLines: false,
      data: dailyConfirmed
    },
    {
      label: 'Confirmados Total',
      data: dailyTotal,
      pointBorderColor: 'hsla(25, 100%, 67%, 1.0)',
      borderColor: 'hsla(25, 100%, 67%, 1.0)',
      borderWidth: 1,
      lineTension: 0,
      type: 'line'
    }
  ]
};

export function ConfirmedChart() {
  return (
    <>
      <ChartSection>
        <Bar
          data={confirmed}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: 'top',
              fullWidth: true,
              reverse: false,
              labels: {
                fontColor: 'hsla(163, 72%, 48%, 1)'
              }
            },
            scales: {
              yAxes: [
                {
                  type: 'logarithmic',
                  stacked: true,
                  ticks: {
                    callback: function(value, index, values) {
                      return value;
                    }
                  }
                }
              ]
            }
          }}
        />
      </ChartSection>
    </>
  );
}

export function ConfirmedByProvinceChart() {
  const { provinces } = useStats();
  const sortedProvinces = provinces.sort((a, b) => {
    return a.id - b.id;
  });
  const labels = sortedProvinces.map(province => province.name);
  const confirmedCases = sortedProvinces.map(province => province.confirmed);
  const confirmedByProvince = {
    labels: labels,
    datasets: [
      {
        label: 'Confirmados x Provincia',
        backgroundColor: 'hsla(163, 72%, 48%, .4)',
        borderColor: 'hsla(163, 72%, 48%, 1.0)',
        borderWidth: 1,
        hoverBackgroundColor: 'hsla(163, 72%, 48%, .9)',
        hoverBorderColor: 'hsla(163, 72%, 48%, 1)',
        data: confirmedCases
      }
    ]
  };
  return (
    <>
      <ChartSection>
        <HorizontalBar
          data={confirmedByProvince}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: 'top',
              fullWidth: true,
              reverse: false,
              labels: {
                fontColor: 'hsla(163, 72%, 48%, 1)'
              }
            }
          }}
        />
      </ChartSection>
    </>
  );
}

export function DetailsChart() {
  const { t } = useTranslation();
  const data = {
    labels: [
      t('recoveries.label'),
      t('homeStable.label'),
      t('hospitalStable.label'),
      t('reserveState.label'),
      t('deaths.label')
    ],
    datasets: [
      {
        data: [3, 1565, 113, 94, 48],
        borderColor: 'hsla(164, 23%, 3%, 0.6)',
        backgroundColor: [
          'hsla(163, 72%, 100%, 0.9)',
          'hsla(163, 72%, 48%, 0.7)',
          'hsla(50, 100%, 64%, 0.7)',
          'hsla(25, 100%, 67%, 0.7)',
          'hsla(0, 100%, 67%, 0.7)'
        ],
        hoverBackgroundColor: [
          'hsla(163, 72%, 100%, 1.0)',
          'hsla(163, 72%, 48%, 1.0)',
          'hsla(50, 100%, 64%, 1.0)',
          'hsla(25, 100%, 67%, 1.0)',
          'hsla(0, 100%, 67%, 1.0)'
        ]
      }
    ]
  };

  return (
    <ChartPieSection>
      <Doughnut
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: 'top',
            fullWidth: true,
            reverse: false,
            labels: {
              fontColor: 'hsla(163, 72%, 48%, 1)'
            }
          }
        }}
      />
    </ChartPieSection>
  );
}
