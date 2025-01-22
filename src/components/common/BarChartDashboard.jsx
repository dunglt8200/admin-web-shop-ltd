import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarChartDashboard({ dataX }) {
  return (
    <BarChart
      series={[
        { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Áo MU 2013' },
        { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Áo REAL 2017'},
        { data: [14, 6, 5, 8, 9], stack: 'A', label: 'Áo MC 2022' },
      ]}
      yAxis={[{ tickLabelStyle: { fill: 'white'} }]}
      xAxis={[{ scaleType: 'band', data: dataX, tickLabelStyle: { fill: 'white'} }]}
      slotProps={{
        legend: {
          labelStyle:{
            fill: 'white'
          }
        },
      }}
    />
  );
}
