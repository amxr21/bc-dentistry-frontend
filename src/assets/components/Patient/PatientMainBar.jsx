const PatientMainBar = ({id, fullName, dob, gender}) => {
    return (
        <div id="PatientMainBar" className="bg-white p-4 rounded-md flex gap-x-10 px-14 py-6">
            <div className="patient-pfp w-36 h-30 rounded-full overflow-hidden">
                <img src="" alt="a" className="w-full h-full bg-gray-300" />
            </div>
            <div className="patient-info w-full p-3 flex flex-col">
                <div className="patient-id text-gray-300 text-sm">Emirates Id: {id}</div>
                <div className="patient-full-name w-full font-bold text-5xl mb-2">{fullName}</div>
                <div className="flex gap-x-6 w-fit">
                    <p className="patient-dob text-xl">Date of Birth: {dob}</p>
                    <p className="patient-gender text-lg">Gender: {gender}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default PatientMainBar;