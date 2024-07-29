import { useEffect, useRef, useState } from "react";
import InputComponent from "../InputComponent";
import { useLocation } from "react-router-dom";

const NewPatientDialog = () => {
    const newPatientDialog = useRef('');
    const currentPath = useLocation()
    const [ha, setHa] = useState('#addNewPatient')



    useEffect(() =>{
        if(currentPath.hash == ha){
            newPatientDialog.current.classList.replace('translate-y-[30em]', '-translate-y-1/2')
            newPatientDialog.current.classList.replace('opacity-0', 'opacity-100')
        }

    }, [currentPath.hash])







    const submitNewAppointment = () => {
        newPatientDialog.current.classList.replace('-translate-y-1/2', 'translate-y-[30em]')
        newPatientDialog.current.classList.replace('opacity-100', 'opacity-0')
    }



    return (
        <div ref={newPatientDialog} id='AddNewPatientDialog' className='fixed bg-white drop-shadow-md w-[50em] h-fit inset-1/2 -translate-x-1/2 translate-y-[30em] z-50 rounded-md p-8 opacity-0'>
            <h2 className='text-3xl font-bold mb-8'>Add a new Patient</h2>
            <div className="grid grid-cols-12 gap-x-4">
                <div className="details col-span-8 grid grid-cols-2 gap-x-4 gap-y-4">
                    <InputComponent header={'a'} type={"text"}/>
                    <InputComponent header={'a'} type={"text"}/>
                    <InputComponent header={'a'} type={"text"}/>
                    <InputComponent header={'a'} type={"text"}/>
                    <InputComponent header={'a'} type={"text"}/>
                </div>
            </div>
            <a href="#"><button onClick={submitNewAppointment} className='bg-blue-950 text-white p-3 w-64 rounded-md my-6'>Submit</button></a>
        </div>
    )
}


export default NewPatientDialog;