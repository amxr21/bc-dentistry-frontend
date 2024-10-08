import Box from "../../components/Box"
import PatientCard from "../../components/Patients/PatientCard";
import Data from '../../../../data'
import NewPatientDialog from "../../components/Patients/NewPatientDialog";
import RequestPatientCard from "../../components/Patients/RequestPatientCard";

const PatientsCards = () => {

    let medicalRecordObj = {appointments: [], medications: [], allergies: [], link: '#medical'}
    let dentalRecordObj = {details: [], link: '#addNewPatient'}

    let d = new Date

    const patientsCards = Data.map((patient) => {
        medicalRecordObj.medications = patient.medications
        medicalRecordObj.appointments = patient.appointments
        medicalRecordObj.allergies = patient.allergies
        medicalRecordObj.link = '#medical'
        
        dentalRecordObj.details = patient["dental-details"]
        dentalRecordObj.link = '#dental'


        return (
            <PatientCard
                key={patient.id}
                patientId={patient.id}
                fullName={patient.name}
                age={d.getFullYear() - patient['date-of-birth'].split('.').pop()}
                gender={patient.gender}
                insurance={patient.insurance['company-name']}
                medicalRecord={medicalRecordObj}
                dentalRecord={dentalRecordObj}
            />
        )
    })



    return (
        <div id="PatientsCards" className="rounded-md">
            <div className='grid grid-cols-3 2xl:grid-cols-4 gap-3 p-0'>
                <RequestPatientCard />
                {patientsCards}
            </div>




            <NewPatientDialog />
        </div>
    )
}

export default PatientsCards;