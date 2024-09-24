import AppointmentReasonsList from "./AppointmentReasonsList";

import Data from "../../../../data"



const appointmentReasons = [
    { value: 'cleaning', text: 'Routine Check-up' },
    { value: 'cavity-filling', text: 'Cavity Filling' },
    { value: 'whitening', text: 'Teeth Whitening Procedure' },
    { value: 'root-canal', text: 'Root Canal Treatment' },
    { value: 'tooth-extraction', text: 'Tooth Extraction' }
  ];



const SetNewAppointmentForm1 = () => {
     console.log(Data)





    return (
        <div className="flex gap-x-6 my-4 justify-between">
            <div className="pfp min-w-32 min-h-32 w-32 h-32 bg-gray-500 rounded-3xl bg-blue-500">
                <img src="" alt="pfp" />
            </div>


            <div className="text overflow-hidden">
                <h2 className='text-3xl font-bold mb-2'>
                    Set an appointment for
                    <span> "Patient Name"</span>
                </h2>
                <div className="reason relative flex gap-x-8 outline-none w-full">
                    <AppointmentReasonsList header={'Appointment for: '} list={appointmentReasons} /> 
                    <AppointmentReasonsList header={'Appointment for: '} list={[...Data.map((e) => e.name) ]} /> 
                </div>
            </div>
        </div>
    )
}


export default SetNewAppointmentForm1;