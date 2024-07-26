const AppointmentTableRow = ({meetingFor, id, doctorName, patientName, dateAndTime}) => {
    
    
    
    
    return (
        <div style={{gridTemplateColumns: '5fr 2fr 5fr 6fr 8fr 1fr'}}  className="AppointmentTableRow grid px-4 py-3 mb-1 rounded-md ">
            <div className="">{meetingFor}</div>
            <div className="">{id}</div>
            <div className="">{doctorName}</div>
            <div className="">{patientName}</div>
            <div className="">{dateAndTime}</div>
            <div className="cursor-pointer">...</div>
        </div>
    )
}


export default AppointmentTableRow;