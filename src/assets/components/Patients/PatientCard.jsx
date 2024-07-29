
const PatientCard = ({patientId, fullName, age, gender, insurance, medicalRecord, dentalRecord}) => {
    return (
        <>
            <div className="patient-card bg-white rounded-md p-5 flex flex-col gap-y-3 h-56 justify-between">
                <p className="id text-gray-300 text-sm">Id: #{patientId}</p>
                <div className="personal-brief flex flex-col gap-y-2 h-36">
                    <h2 className="name text-xl text-justify font-bold">{fullName}</h2>
                    <div className="age-gender flex justify-between">
                        <p className="age"><span className="font-semibold">Age: </span>{age}</p>
                        <p className="gender">{gender}</p>
                    </div>
                    <div className="insurance"><span className="font-semibold">Insurance: </span>{insurance}</div>
                </div>
                <div className="records flex justify-between text-sm underline">
                    <a className="medical-record" href={medicalRecord.link}>Medical record</a>
                    <a className="dental-record" href={dentalRecord.link}>Dental record</a>
                </div>
            </div>
        </>
    )
}

export default PatientCard;