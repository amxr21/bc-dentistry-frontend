import { AppointmentsControlBar } from "../../components";
import MainContainer from "../../components/MainContainer";
import AppointmentsStatstics from "./AppointmentsStatstics";


const AppointmentsBar = () => {
    return (
        <MainContainer Id={"AppointmentControlBar"} classes={'gap-y-4'}>
            <AppointmentsControlBar />
            <AppointmentsStatstics />

        </MainContainer>
    )
}

export default AppointmentsBar;