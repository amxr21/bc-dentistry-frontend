import PatientsCards from "../Sections/Patients/PatientsCards";
import PatientsFilters from "../Sections/Patients/PatientsFilters";

import Lo from "../images/icons/calendar.svg"


const Patients = () => {
    return (
        <div id="Patients" className="grid grid-cols-12 gap-x-8" style={{gridTemplateColumns: '2fr 8fr'}}>
            <PatientsFilters />
            <div className="flex flex-col w-full gap-y-4">
                <div className="flex items-center bg-white px-4 py-3 rounded-md w-full justify-between">
                    <h1 className="patients-header text-2xl font-bold">Patients</h1>

                    <div className="new-patient bg-gradient-to-r from-blue-800 to-blue-950 py-2 px-3 rounded-md text-white flex items-center gap-x-3 w-fit">
                        <div className="icon"><img className='w-5 h-5' src={Lo} alt="" /></div>
                        <button onClick={() => {document.getElementById('AddNewPatientDialog').lastElementChild.scrollTop = 0}} id="addNewPatientBtn" className="icon"><a href="#addNewPatient">Add a new Patient</a></button>
                    </div>



                </div>
                <PatientsCards />
            </div>

        </div>
    )
}

export default Patients;