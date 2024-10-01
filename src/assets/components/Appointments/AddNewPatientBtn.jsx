import { useRef } from "react";

const SetNewAppointment = ({Id, option}) => {
    const a = useRef();

    const newAppointment = () => {
        document.getElementById('Form1').classList.replace('max-h-0', 'max-h-fit')
    }


    return (
        <div id={Id} ref={a} className="flex flex-grow h-16 gap-4 overflow-hidden">
            <button onClick={newAppointment} className='w-16 h-16 rounded-2xl p-2 col-span-6 border'>+</button>
            <p className='w-[1.1rem] text-xl'>{option}</p>
        </div>
    )
}

export default SetNewAppointment;