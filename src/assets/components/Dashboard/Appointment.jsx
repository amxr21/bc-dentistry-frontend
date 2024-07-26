const Appointment = ({icon, header, subheader}) => {
    return (
        <div className="appointment flex bg-white px-3 py-0 h-16 items-center rounded-lg grow">
            <div className="icon border p-1 mr-4 w-10 h-10 flex items-center justify-center rounded-md">
                <img className="w-5" src={icon} alt="" />
            </div>
            <div className="text">
                <p className="font-regular text-[.75em]">{subheader}</p>
                <h5 className="font-extrabold text-lg h-4 leading-none">{header}</h5>
            </div>
        </div>
    )
}
export default Appointment;