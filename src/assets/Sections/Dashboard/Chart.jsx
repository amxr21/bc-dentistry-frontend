import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = {
  Days: [10, 13, 11, 8, 4, 6, 3],
  Monthes: [30, 23, 19, 18, 44, 16, 9],
  Years: [100, 65, 291, 80, 45, 96, 131],
};
const xLabels = {
  'Days': [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ],
  'Monthes': [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
  ],
  'Years': [
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
  ],
};


export default function SimpleBarChart() {
  const [ layout, setLayout ] = useState("Days")





  return (
    <div className='col-span-5 bg-white rounded-md px-8 py-6 overflow-hidden h-80'>
      <div className="flex justify-between">
        <h2 className='text-xl py-0.5 mb-5 font-bold'>Patients Overview</h2>
        <TextField
            select
            sx={{ minWidth: 150 }}
             
            value={layout}
            size='small'
            onChange={(event) => {setLayout(event.target.value); console.log(event.target.value);}}
          >
            <MenuItem value="Days">By Days</MenuItem> 
            <MenuItem value="Monthes">By Monthes</MenuItem> 
            <MenuItem value="Years">By Years</MenuItem>
            {/* <MenuItem value="Years">Years</MenuItem> */}
        </TextField>

      </div>


      <BarChart
        width={450}
        height={250}
        series={[
          { data: pData[layout], id: 'pvId' },
        ]}
        margin={{top: 20, right: 30, bottom: 90, left: 30}}
        xAxis={[{ data: xLabels[layout] , scaleType: 'band' }]} 
        yAxis={[{tickInterval: (value, index) => index % 2 === 1}]}
      />
    </div>
  );
}