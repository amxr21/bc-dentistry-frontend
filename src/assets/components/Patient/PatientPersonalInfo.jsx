import Data from '../../../../data'
import DetailInfo from "./DetailInfo";
import { useLocation } from 'react-router-dom';

const PatientPersonalInfo = () => {
    const id = useLocation().pathname.split('/').pop();
    const patientDetail = Data.filter((d) => {return d.id == id})[0];


    return (
        <div className="patient-personal-info bg-white rounded-md flex gap-x-10 items-left flex flex-col gap-y-6 w-full px-16 py-6">
            <h2 className="text-3xl font-bold">Personal Details</h2>
            <div className="details flex w-full justify-between gap-x-6">
                <DetailInfo classes={'grow'} header={'Insurance'} info={patientDetail['insurance']['company-name']} />
                <DetailInfo classes={'grow'} header={'Nationality'} info={patientDetail['nationality']} />
                <DetailInfo classes={'grow'} header={'Address'} info={patientDetail['address']} />
                <DetailInfo classes={'grow'} header={'Phone Number'} info={patientDetail['phone-number']} />
                <DetailInfo classes={'grow'} header={'Email'} info={patientDetail['email']} />
                <DetailInfo classes={'grow'} header={'Phone Number'} info={patientDetail['phone-number']} />
            </div>
        </div>
    )
}

export default PatientPersonalInfo;