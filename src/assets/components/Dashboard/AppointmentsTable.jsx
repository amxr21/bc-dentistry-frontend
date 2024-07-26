import Data from "../../../../data"

import AppointmentTableRow from "./AppointmentTableRow";

const AppointmentsTable = () => {
    const patientsAppointments = Data.map((data) => ({
        [data.name] : data.appointments
    }))

    let ab = patientsAppointments.map((paAp) => {
        console.log(Object.values(paAp)[0]);
        return Object.values(paAp)[0].sort((a,b) => a.date.slice(0,2) - b.date.slice(0,2)).map((ap) => {
            return <AppointmentTableRow meetingFor={ap.reason} id={ap.dr.id.slice(4)} patientName={Object.keys(paAp)} doctorName={ap.dr.name} dateAndTime={`${ap.date} ${ap.time}`} />
        })

    })

    return (
        <div id="AppointmentsTable" className="w-full">
            <h1 className="text-2xl font-bold mb-3">Schedule meetings</h1>
            <div style={{gridTemplateColumns: '5fr 2fr 5fr 6fr 8fr 1fr'}} className="table-header grid px-4 py-3 rounded-md bg-gray-200 mb-3">
                <div className="">Meeting for</div>
                <div className="">ID</div>
                <div className="">Doctor Name</div>
                <div className="">Patient Name</div>
                <div className="">Date & Time</div>
                <div className="">...</div>
            </div>
            <div className="flex flex-col">
                {
                    ab
                }
            </div>

        </div>
    )
}

export default AppointmentsTable;