import Appointments from "../Sections/Dashboard/Appointments";
import { MainContainer } from "../components";
import SimpleBarChart from "../Sections/Dashboard/Chart"
import Calendar from "../components/Dashboard/Calendar";
import Updates from "../Sections/Dashboard/Updates";
import Requests from "../Sections/Dashboard/Requests";

const Home = () => {
    return (
        <MainContainer Id={"Appointments"} classes={'gap-y-10'}>
            <Appointments />
            <SimpleBarChart />
            <Calendar />
            <Updates />
            <Requests />
        </MainContainer>
    )
}

export default Home;