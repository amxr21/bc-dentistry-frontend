import AppointmentDoctor from "./AppointmentDoctor";

const SetNewAppointmentForm2 = () => {
    return (
        <div id="Doctors">
            <h2 className="text-2xl font-bold">These are the Doctors availabe for <span>{"Your case"}</span></h2>
            <div className="doctors-section flex gap-x-8 w-[46em] overflow-x-scroll overflow-y-hidden py-4 ">
                <AppointmentDoctor />
                <AppointmentDoctor />
                <AppointmentDoctor />
                <AppointmentDoctor />
                <AppointmentDoctor />
                <AppointmentDoctor />
                <AppointmentDoctor />
            </div>
        </div>
    )
}

export default SetNewAppointmentForm2;