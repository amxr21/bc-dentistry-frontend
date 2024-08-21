import Data from "../../../data";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../components";
import PatientMainBar from "../components/Patient/PatientMainBar";
import PatientPersonalInfo from "../components/Patient/PatientPersonalInfo";
import MedicalRecord from "../components/Patient/MedicalRecord";
import DentalRecord from "../components/Patient/DentalRecord";

const Patient = () => {
    const path = useLocation().pathname;

    const patientDetails = Data.filter((patient) => {
        return patient.id == path.split('/').pop();
    })

    return (
        <MainContainer classes={'w-full my-6'}>
            <div className="col-span-12 flex flex-col gap-y-4">
                <PatientMainBar id={patientDetails[0].id} fullName={patientDetails[0].name} gender={patientDetails[0].Gender} dob={patientDetails[0]["date-of-birth"]} />
                <PatientPersonalInfo />
                <MedicalRecord />
                <DentalRecord dentalDetails={patientDetails[0]['dental-details']} />
                
            </div>
        </MainContainer>
    )
}

export default Patient;