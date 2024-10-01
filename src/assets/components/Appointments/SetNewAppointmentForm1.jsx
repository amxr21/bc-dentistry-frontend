import AppointmentReasonsList from "./AppointmentReasonsList";

import Data from "../../../../data"



const appointmentReasons = [
    { value: 'cleaning', text: 'Routine Check-up' },
    { value: 'cavity-filling', text: 'Cavity Filling' },
    { value: 'whitening', text: 'Teeth Whitening Procedure' },
    { value: 'root-canal', text: 'Root Canal Treatment' },
    { value: 'tooth-extraction', text: 'Tooth Extraction' }
  ];



const SetNewAppointmentForm1 = ({Id, classes}) => {
     console.log(Data)


    const gNext = () => {
        document.getElementById('Form2').classList.replace('max-h-0', 'max-h-fit')
    }


    return (
        <div id={Id} className={`flex gap-x-6 my-4 justify-between overflow-hidden h-36 ${classes}`}>
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
                <button onClick={gNext}>Go next</button>
            </div>
        </div>
    )
}


export default SetNewAppointmentForm1;