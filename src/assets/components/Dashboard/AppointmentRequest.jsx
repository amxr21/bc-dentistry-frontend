const AppointmentRequest = ({patientName, time, date, type, status }) => {
    return (
        <div className="appointment-request flex flex-col gap-y-2 border rounded-md px-6 py-4">
            <h2 className="text-xl font-bold">{patientName}</h2>
            <div>
                <div className="details flex justify-between">
                    <div className="date-time flex justify-betweens gap-x-2">
                        <div className="date">{date}</div>
                        <div className="time">{time}</div>
                    </div>
                    <div className="type font-semibold">{type}</div>
                </div>
                <div className="action-buttons flex gap-x-4 mt-3">
                    <div className="accept w-1/2 p-1 font-bold text-red-600 border border-red-600 rounded-md text-center">Reject</div>
                    <div className="reject w-1/2 p-1 font-bold text-white bg-green-600 rounded-md text-center">Accept</div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentRequest;