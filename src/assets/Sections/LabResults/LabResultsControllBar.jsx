import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState, useContext, useRef, useEffect } from 'react';
import CheckBox from '../../components/LabResults/CheckBox';

import { FiltersContext } from "../../Context/FiltersContext";

const LabResultsControllBar = () => {

    const [filterPeriod, setFilterPeriod] = useState("Day");

    const {filters, setFilters} = useContext(FiltersContext);
    const {sortPeriod, setSortPeriod} = useContext(FiltersContext);

    return (
        <div id="AppointmentsControlBar" className="flex col-span-12 bg-white rounded-md p-4 w-full items-center gap-x-4 justify-between">
            <div className="flex gap-x-4">
                <h2>Show:</h2>
                <div className="boxes flex gap-x-4">
                    <CheckBox id={'UnderProgress'} label={'under progress'} />
                    <CheckBox id={'completed'} label={'completed'} />
                </div>
            </div>


            <div className='flex gap-x-2'>
                <TextField
                    select
                    value={filterPeriod}
                    sx={{ minWidth: 150 }}
                    size='small'
                    onChange={(event) => {setFilterPeriod(event.target.value);setSortPeriod(event.target.value); console.log(sortPeriod);
                    }}
                >
                    <MenuItem value="Day">This day</MenuItem>
                    <MenuItem value="Week">This Week</MenuItem>
                    <MenuItem value="Month">This Month</MenuItem>
                </TextField>
            </div>

        </div>
    )
}

export default LabResultsControllBar;