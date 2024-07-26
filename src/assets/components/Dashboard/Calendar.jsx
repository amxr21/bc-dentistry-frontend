import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function Calendar() {
  return (
    <div className='col-span-3 bg-white h-80 rounded-md'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
        </LocalizationProvider>
    </div>
  );
}