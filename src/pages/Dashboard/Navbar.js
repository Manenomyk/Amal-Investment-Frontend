import React from 'react';
import Donut from 'react-svg-donut-chart';

function Navbar() {
  return (
    <div>
      <Donut
        chartData={[
          { name: 'Black Panther', data: 30 },
          { name: 'Avengers', data: 50 },
          { name: 'Antman', data: 20 },
        ]}
        // chartWidth={30}
        // chartHeight={50}
        title="Marvel movies that were popular this year"
        chartThemeConfig={{
          series: {
            colors: ['#ffe0bd', '#670303', '#6cbfce'],
          },
        }}
      />
      
    </div>
  )
}

export default Navbar