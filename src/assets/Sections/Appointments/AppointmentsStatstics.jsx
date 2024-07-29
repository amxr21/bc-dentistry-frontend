import Data from "../../../../data"
import { Appointment } from "../../components";
import Alarm1 from "../../images/icons/alarm1.svg"
import Alarm2 from "../../images/icons/alarm2.svg"
import Alarm3 from "../../images/icons/alarm3.svg"
import Visitors from "../../images/icons/visitors.svg"

const AppointmentsStatstics = () => {
    let appointmentsStatus = {
        'D': 0,
        'Co': 0,
        'P': 0,
        'Ca': 0,
    }

    Data.forEach((p)=>{
        p.appointments.forEach((appointment) => {
            switch (appointment.status){
                case "confirmed": appointmentsStatus["Co"]++; break;
                case "done": appointmentsStatus["D"]++; break;
                case "canceled": appointmentsStatus["Ca"]++; break;
                case "pending": appointmentsStatus["P"]++; break;
            }
        })
    })


    return (
        <div id="AppointmentsStatstics" className="flex col-span-12 gap-x-4">
            <Appointment header={appointmentsStatus['D']+appointmentsStatus['Co']+appointmentsStatus['P']+appointmentsStatus['Ca']} subheader={"All appointments"} icon={Alarm1}/>
            <Appointment header={appointmentsStatus['P']} subheader={"Pending appointments"} icon={Alarm2}/>
            <Appointment header={appointmentsStatus['Ca']} subheader={"Canceled appointments"} icon={Alarm3}/>
            <Appointment header={appointmentsStatus['Co']} subheader={"Finished appointments"} icon={Visitors}/>
            <Appointment header={appointmentsStatus['D']+appointmentsStatus['Co']+appointmentsStatus['P']+appointmentsStatus['Ca']} subheader={"Total visitors"} icon={Alarm1}/>
        </div>
    )
}


export default AppointmentsStatstics;