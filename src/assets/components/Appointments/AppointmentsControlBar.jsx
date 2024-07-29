import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useRef, useState } from 'react';
import NewAppointmentDialog from "../Appointments/NewAppointmentDialog";
import InputComponent from '../InputComponent';
import SetNewAppointment from './SetNewAppointment';

const AppointmentsControlBar = () => {

    const dialogg = useRef();
    const addNewAppointment = () => {
        dialogg.current.classList.replace('translate-y-[30em]', '-translate-y-1/2')
        dialogg.current.classList.replace('opacity-0', 'opacity-100')
        dialogg.current.showModal();
    }
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
                    sx={{ minWidth: 150 }}
                    size='small'
                    onChange={(event) => {setFilterOption(event.target.value);}}
                >
                    <MenuItem value="Name">Name</MenuItem>
                    <MenuItem value="Recent">Recent</MenuItem>
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value="Status">Status</MenuItem>
                </TextField>

            </div>
            {/* <SetNewAppointment clickFunc={addNewAppointment} /> */}


            {/* <NewAppointmentDialog reff={dialogg} /> */}

        </div>
    )
}

export default AppointmentsControlBar;