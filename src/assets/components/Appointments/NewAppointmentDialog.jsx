import InputComponent from '../InputComponent';
import SetNewAppointment from './AddNewPatientBtn';
import SetNewAppointmentForm1 from './SetNewAppointmentForm1';
import SetNewAppointmentForm2 from './SetNewAppointmentForm2';


const NewAppointmentDialog = ({reff}) => {

    
    const submitNewAppointment = () => {
        reff.current.classList.replace('-translate-y-1/2', 'translate-y-[30em]')
        reff.current.classList.replace('opacity-100', 'opacity-0')
    }




    return (
            <div ref={reff} id='AddNewAppointmentDialog' className='fixed bg-white drop-shadow-xl w-[50em] h-fit inset-1/2 -translate-x-1/2 translate-y-[30em] z-50 opacity-100 rounded-lg p-8'>
                <div className="flex gap-x-10 mb-10">
                    <SetNewAppointment Id={'new'} option={'New Patient'} />
                    <SetNewAppointment Id={'ex'} option={'Existing Patient'} />
                </div>
                <SetNewAppointmentForm1 />
                <SetNewAppointmentForm2 />
            </div>
    )
}

export default NewAppointmentDialog;