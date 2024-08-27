import InputComponent from "../InputComponent";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";



const NewPatientDialog2 = ({ dialogStructure, dialogSectionId, hashhP, hashhN, buttonTextP, buttonTextN}) => {
    const currentPath = useLocation()
    const [ha, setHa] = useState('#addNewPatient')

    const re = useRef();


    useEffect(() =>{
        if(currentPath.hash == ha || currentPath.hash == '#sp2' || currentPath.hash == '#sp3'){
            document.getElementById('AddNewPatientDialog').classList.replace('translate-y-[30em]', '-translate-y-1/2')
            document.getElementById('AddNewPatientDialog').classList.replace('opacity-0', 'opacity-100')
        }
        else if(currentPath.hash != ha && currentPath.hash != '#sp2' && currentPath.hash != '#sp3'){
            document.getElementById('AddNewPatientDialog').classList.replace('-translate-y-1/2', 'translate-y-[30em]')
            document.getElementById('AddNewPatientDialog').classList.replace('opacity-100', 'opacity-0')
        }

    }, [currentPath.hash])








    const submitNewAppointment = () => {
        if(currentPath.hash == ha || currentPath.hash == '#sp2' || currentPath.hash == '#sp3'){
            document.getElementById('AddNewPatientDialog').classList.replace('translate-y-[30em]', '-translate-y-1/2')
            document.getElementById('AddNewPatientDialog').classList.replace('opacity-0', 'opacity-100')
        }

        else if(currentPath.hash != ha && currentPath.hash != '#sp2' && currentPath.hash != '#sp3'){
            document.getElementById('AddNewPatientDialog').classList.replace('-translate-y-1/2', 'translate-y-[30em]')
            document.getElementById('AddNewPatientDialog').classList.replace('opacity-100', 'opacity-0')
        }

        // re.current.parentElement.scrollTop += 576;




    }




    return (
        <div id={dialogSectionId} ref={re} className="p-12 flex flex-col">
            <h1 className="text-4xl font-bold mb-6">{dialogStructure.header}</h1>
            <div className="flex flex-col gap-x-4 w-full">
                <div className="details flex flex-wrap col-span-8 gap-x-4 gap-y-4 ">
                    {
                        dialogStructure?.inputs.map((input) => {
                            return <InputComponent key={input?.header} header={input?.header} type={input?.type} classes={input?.classes} placeholder={input?.placeholder} options={input?.options}/>
                        })
                    }


                </div>
            </div>
            <div className="flex justify-between text-right">
                {
                    buttonTextP == "" && <a className="" href={hashhP}><button onClick={submitNewAppointment} className='hidden border rounded-full h-12 w-12 text-[#000834] text-lg mt-6'>{'<<'}</button></a>
                }
                {
                    buttonTextP != "" && <a className="" href={hashhP}><button onClick={submitNewAppointment} className=' border rounded-full h-12 w-12 text-[#000834] text-lg mt-6'>{'<<'}</button></a>
                }
                {
                    buttonTextN == "Submit" &&  <a className="" href={hashhN}><button onClick={submitNewAppointment} className='bg-[#000834] text-white p-3 w-64 rounded-md mt-6'>{buttonTextN}</button></a>
                }
                {
                    buttonTextN != "Submit" &&  <a className="" href={hashhN}><button onClick={submitNewAppointment} className='border rounded-full h-12 w-12 text-[#000834] text-lg mt-6'>{">>"}</button></a>
                }

            </div>
        </div>
    )
}

export default NewPatientDialog2;