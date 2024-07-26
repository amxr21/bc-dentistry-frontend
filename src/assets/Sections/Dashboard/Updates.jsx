import AppointmentsTable from "../../components/Dashboard/AppointmentsTable";
import BriefCalendar from "../../components/Dashboard/BriefCalendar";

const Updates = () => {
    return (
        <div id="Updates" className="bg-white h-fit mb-8 rounded-md p-4 col-span-8">
            <BriefCalendar />
            <AppointmentsTable />
        </div>
    )
}

export default Updates;