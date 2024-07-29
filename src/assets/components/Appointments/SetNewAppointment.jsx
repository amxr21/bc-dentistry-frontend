import Lo from "../../images/icons/calendar.svg"

const SetNewAppointment = ({clickFunc}) => {
    return (
        <div className="new-appointment bg-gradient-to-r from-blue-800 to-blue-950 py-2 px-3 rounded-md text-white flex items-center gap-x-3">
            <div className="icon"><img className='w-4' src={Lo} alt="" /></div>
            <button onClick={clickFunc} className="icon">Set a new appointment</button>
        </div>
    )
}

export default SetNewAppointment;