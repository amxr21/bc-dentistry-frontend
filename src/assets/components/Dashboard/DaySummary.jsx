import DayDate from "./DayDate";
import DayStatus from "./DayStatus";

import Data from "../../../../data";

const DaySummary = ({dayDateD}) => {
    let dates = {} 

    let a = []
    Data.forEach((da) => {
        a.push(...da.appointments);
        dates[da.appointments[0].date] = [ ]
    })

    Data.forEach((d) => {
        d.appointments.forEach((app) => {
            let c = {status: app.status, time: app.time}
            dates[app.date].push(c)
        })
    })



    return (
        <div className="day-summary w-16 flex flex-col items-center p-1">
            <DayStatus appointmentStatus={dates} dayDate={dayDateD} />
        </div>
    )
}

export default DaySummary;