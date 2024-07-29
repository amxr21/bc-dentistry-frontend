import PatientsCards from "../Sections/Patients/PatientsCards";
import PatientsFilters from "../Sections/Patients/PatientsFilters";
import { MainContainer } from "../components";

import Lo from "../images/icons/calendar.svg"


const Patients = () => {
    return (
        <MainContainer Id={"Patients"} classes={'w-full'}>
            <PatientsFilters />
            <div className="flex flex-col w-full gap-y-4 col-span-9">
                <div className="flex items-center bg-white px-4 py-3 rounded-md w-full justify-between">
                    <h1 className="patients-header text-2xl font-bold">Patients</h1>

                    <div className="new-patient bg-gradient-to-r from-blue-800 to-blue-950 py-2 px-3 rounded-md text-white flex items-center gap-x-3 w-fit">
                        <div className="icon"><img className='w-5 h-5' src={Lo} alt="" /></div>
                        <button className="icon"><a href="#addNewPatient">Add a new Patient</a></button>
                    </div>



                </div>
                <PatientsCards />
            </div>
        </MainContainer>
    )
}

export default Patients;