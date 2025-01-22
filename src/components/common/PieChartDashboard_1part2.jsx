import * as React from 'react';
import { PieChart } from '@mui/x-charts';

export default function PieChartDashboard_1part2({ data }) {
  return (
      <PieChart
        series={[
          {
            startAngle: -90,
            endAngle: 90,
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data: data,
          },
        ]}
        
        height={200}
        slotProps={{
            legend: {
              direction:"row",
              labelStyle:{
                fill: 'white',            
              }
            },
            position: { vertical: 'bottom', horizontal: 'middle' },
          }}
      />
  );
}