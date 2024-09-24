const AppointmentDoctor = () => {
    return (
        <div className="appointment-doctor min-w-48 min-h-76 flex flex-col gap-y-4 border px-5 py-3 rounded-lg">
            <div className="pfp min-w-28 min-h-28 w-28 h-28 rounded-3xl bg-gray-400 overflow-hidden">
                <img src="" alt="dr pfp" />
            </div>
            <div className="doctor-details text-justify">
                <h4 className="text-2xl font-bold">Dr <span>{"Tomson"}</span></h4>
                <p className="text-sm">Specilized in <span>{"Doctor Specilization"}</span></p>
            </div>
        </div>
    )
}


export default AppointmentDoctor;