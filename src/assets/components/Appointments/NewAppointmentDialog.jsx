import InputComponent from '../InputComponent';
import SetNewAppointment from './AddNewPatientBtn';
import SetNewAppointmentForm1 from './SetNewAppointmentForm1';
import SetNewAppointmentForm2 from './SetNewAppointmentForm2';
import { useState } from 'react';

const NewAppointmentDialog = ({ reff }) => {
    const [resetKey, setResetKey] = useState(0); // For resetting forms

    const submitNewAppointment = () => {
        // Close the dialog
        reff.current.classList.replace('-translate-y-1/2', 'translate-y-[30em]');
    };

    const resetForm = () => {
        // Reset form components by updating key (forces re-render)
        setResetKey(prev => prev + 1);

        // Close dialog
        submitNewAppointment();
    };

    return (
        <div ref={reff} id='AddNewAppointmentDialog' className='fixed bg-white drop-shadow-xl w-[50em] h-fit max-h-[45em] overflow-hidden inset-1/2 -translate-x-1/2 translate-y-[30em] z-50 opacity-100 rounded-lg p-8 transition-transform duration-500'>
            <div className="flex gap-x-10 mb-10">
                <SetNewAppointment Id={'new'} option={'New Patient'} />
                <SetNewAppointment Id={'ex'} option={'Existing Patient'} />
            </div>
            <SetNewAppointmentForm1 key={resetKey} Id={'Form1'} classes={'transition-height duration-500 max-h-0'} />
            <SetNewAppointmentForm2 key={resetKey} Id={'Form2'} classes={'transition-height duration-500 max-h-0'} resetForm={resetForm} />
        </div>
    );
};

export default NewAppointmentDialog;
