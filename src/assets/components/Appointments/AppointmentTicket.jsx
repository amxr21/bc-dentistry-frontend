const AppointmentTicket = ({date, time, reason, dr, id, name, status}) => {
    return (
        <div className="appointment-ticket col-span-3 bg-white p-5 flex flex-col gap-y-3 rounded-md">
            <div className="for">
                <div className="date-time bg-blue-800 flex items-center justify-between w-full px-3 py-2 text-white rounded-md mb-2">
                    <div className="date">{date}</div>
                    <div className="time">{time}</div>
                </div>
                <div className="reason text-2xl font-bold">{reason}</div>
                <div className="type-dr text-lg font-semibold">Dr. {dr}</div>
            </div>
            <div className="line border-b border-b-2"></div>
            <div className="details">
                <div className="id text-gray-300">ID: {id}</div>
                <div className="patient-name text-2xl font-bold">{name}</div>
                <div className="status font-semibold">{status}</div>
                <div className="options relative">
                    <div className=" py-1 text-center border border-blue-800 mt-4 rounded-md font-semibold text-lg">
                        <h1>More Options</h1>
                        <ul className="absolute border-blue-800 border-2 border-l-2 bg-white flex flex-col w-full top-0 left-0 rounded-md hidden">
                            <li className="py-2 border-b-2">Mark as Done</li>
                            <li className="py-2 border-b-2">Postpone Appointment</li>
                            <li className="py-2 border-b-2">Cancel Appointment</li>
                            <li className="py-2 border-b-2">Cancel Appointment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AppointmentTicket;