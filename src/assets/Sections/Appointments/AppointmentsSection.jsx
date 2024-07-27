import Data from "../../../../data"
import { MainContainer } from "../../components";
import AppointmentTicket from "../../components/Appointments/AppointmentTicket";

const AppointmentsSection = () => {
    let allAppointments = []



    const appointmentsTickets = Data.map((data) => ({[[data.name,data.id]]: data.appointments}))


    console.log(appointmentsTickets);

    allAppointments = appointmentsTickets.map((apTi) => {
        return Object.values(apTi)[0].sort((a, b) => a.date.slice(0,2) - b.date.slice(0,2)).map((app) => {
            return <AppointmentTicket
                            date={app.date}
                            time={app.time}
                            reason={app.reason}
                            dr={app.dr.name}
                            id={Object.keys(apTi)[0].split(',')[1]}
                            name={Object.keys(apTi)[0].split(',')[0]}
                            status={app.status}
        
                        />
        })
    })


    return (
        <MainContainer Id="AppointmentsSection" classes={'mt-6 gap-y-6'}>
            {allAppointments}
        </MainContainer>
    )
}

export default AppointmentsSection;