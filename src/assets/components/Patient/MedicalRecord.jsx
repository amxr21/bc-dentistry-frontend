import DetailInfo from "./DetailInfo";
import Data from "../../../../data";
import { useLocation } from "react-router-dom";
import Allergies from "./Allergies";
import Medications from "./Medications";

const MedicalRecord = () => {
    const id = useLocation().pathname.split('/').pop();
    const patientDetail = Data.filter((d) => {return d.id == id})[0];

    console.log(patientDetail.medications[0]);
    

    return (
        <div className="medical-record bg-white rounded-md flex gap-x-10 items-left flex flex-col gap-y-6 w-full px-16 py-6">
            <h2 className="text-3xl font-bold">Medical Record</h2>
            <div className="details grid grid-cols-6 w-full justify-between gap-6">
                {
                    Object.entries(patientDetail["dental-details"]).map((detail) => {
                        return <DetailInfo classes={'grow w-fit'} header={detail[0]} info={detail[1]} />
                    })
                }
            </div>


            <Allergies allergyDetails={patientDetail.allergies[0]}/>


            <div className="flex flex-col gap-y-4">
                <h1 className="text-2xl font-semibold">Medication</h1>
                <div className="medications grid grid-cols-2 gap-8">
                    {
                        patientDetail.medications.map((m, index) => {
                            return <Medications index={index+1} medicationDetails={m} />
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default MedicalRecord;