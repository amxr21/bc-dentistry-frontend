import InputComponent from "../InputComponent";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";



const NewPatientDialog2 = () => {
    const currentPath = useLocation()
    const [ha, setHa] = useState('#addNewPatient')



    useEffect(() =>{
        if(currentPath.hash == ha){
            document.getElementById('AddNewPatientDialog').classList.replace('translate-y-[30em]', '-translate-y-1/2')
            document.getElementById('AddNewPatientDialog').classList.replace('opacity-0', 'opacity-100')
        }

    }, [currentPath.hash])

    const submitNewAppointment = () => {
        document.getElementById('AddNewPatientDialog').classList.replace('-translate-y-1/2', 'translate-y-[30em]')
        document.getElementById('AddNewPatientDialog').classList.replace('opacity-100', 'opacity-0')
    }




    return (
        <div className="p-12">
            <h1 className="text-4xl font-bold mb-6">Personal Info</h1>
            <div className="flex flex-col gap-x-4 w-full">
                <div className="details flex flex-wrap col-span-8 gap-x-4 gap-y-4 ">
                    <InputComponent header={'Full Name'} type={"text"} classes={'grow'} placeholder={"Full name"}/>
                    <InputComponent header={'Emirates Id'} type={"text"} classes={'w-60'} placeholder={'XXX-XXXXXXXXXXX-X'}/>
                    <InputComponent header={'Date of Birth'} type={"date"} />
                    <InputComponent header={'Gender'} type={"select"} options={['Female', 'Male']}/>
                    <InputComponent header={'Nationality'} type={"select"} options={['Female', 'Male']}/>
                    <InputComponent header={'City'} type={"text"} placeholder={'e.g. Ajman, Dubai'}/>
                    <InputComponent header={'Address'} type={"text"} classes={'grow'} placeholder={'e.g. Barsha, Jumairah'}/>
                    <InputComponent header={'Email'} type={"text"} placeholder={"example@gmail.com"}/>
                    <InputComponent header={'Phone Number'} type={"text"} placeholder={"05XXXXXXXX"}/>
                    {/* <InputComponent header={'Phone Number 2'} type={"text"} placeholder={"example@gmail.com"}/> */}
                </div>
            </div>
            <a href="#"><button onClick={submitNewAppointment} className='bg-[#000834] text-white p-3 w-64 rounded-md mt-6'>Submit</button></a>
        </div>
    )
}

export default NewPatientDialog2;