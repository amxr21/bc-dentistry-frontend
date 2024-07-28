import AppointmentsBar from "../Sections/Appointments/AppointmentsBar";
import AppointmentsSection from "../Sections/Appointments/AppointmentsSection";


const Appointments = () => {
    return (
        <div id="Appointments" className="w-full flex flex-col mb-24">
            <AppointmentsBar />
            <AppointmentsSection />

        </div>
    )
}

export default Appointments;