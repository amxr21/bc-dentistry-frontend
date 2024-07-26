import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


import Lo from "../../images/icons/calendar.svg"

const AppointmentsControlBar = () => {
    const [filterPeriod, setFilterPeriod] = useState("Day");
    const [filterOption, setFilterOption] = useState("Recent");


    return (
        <div id="AppointmentsControlBar" className="flex col-span-12 bg-white rounded-md p-4 w-full items-center gap-x-4 justify-end">
            <h4 className='mr-4'>Appointments: </h4>
            <div className='flex gap-x-2'>
                <TextField
                    select
                    value={filterPeriod}
                    sx={{ minWidth: 150 }}
                    size='small'
                    onChange={(event) => {setFilterPeriod(event.target.value);}}
                >
                    <MenuItem value="Day">This day</MenuItem>
                    <MenuItem value="Week">This Week</MenuItem>
                    <MenuItem value="Monthe">This Month</MenuItem>
                </TextField>


                <TextField
                    select
                    value={filterOption}
                    sx={{ minWidth: 150, }}
                    size='small'
                    onChange={(event) => {setFilterOption(event.target.value);}}
                >
                    <MenuItem value="Name">Name</MenuItem>
                    <MenuItem value="Recent">Recent</MenuItem>
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value="Status">Status</MenuItem>
                </TextField>

            </div>
            <div className="new-appointment bg-gradient-to-r from-blue-800 to-blue-950 py-2 px-3 rounded-md text-white flex items-center gap-x-3">
                <div className="icon"><img className='w-4' src={Lo} alt="" /></div>
                <div className="icon">Set a new appointment</div>
            </div>
        </div>
    )
}

export default AppointmentsControlBar;