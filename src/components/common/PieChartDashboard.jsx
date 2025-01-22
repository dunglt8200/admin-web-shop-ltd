import * as React from 'react';
import { PieChart } from '@mui/x-charts';

export default function PieChartDashboard({data}) {
  return (
    <PieChart
      series={[
        {
          data: data,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter
        },
      ]}
      height={200}
      slotProps={{
        legend: {
          labelStyle:{
            fill: 'white',            
          },
          direction: 'row',  
        },
      }}
    />
  );
}

export const valueFormatter = (item) => `${item.value}%`;