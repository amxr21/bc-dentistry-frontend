import { useEffect, useRef } from "react"
import PatientRequestInput from "./PatientRequestInput";
import RequestPatientCardSubmit from "./RequestPatientCardSubmit";

const RequestPatientCard = () => {

    const requestDataForm = useRef();




    const expandRequestForm = () => {
        requestDataForm.current.classList.replace("h-0", "h-80");
    }

    useEffect(() => {
        const handleClicksOutside = (e) => {
            if(
                requestDataForm &&
                !requestDataForm.current.contains(e.target) &&
                !e.target.classList.contains("patient-card-btn")
            ) {
                requestDataForm.current.classList.replace("h-80", "h-0")
            }
        }
    
    
        document.addEventListener("click", handleClicksOutside)

        return () => {
            document.removeEventListener("click", handleClicksOutside)
        }



    }, [])





    // document.addEventListener("click", (e)=> {

    //     if(![...e.target.classList].includes("patient-card-btn") ){
    //         requestDataForm.current.classList?.replace("h-56", "h-0");
    //         // requestDataForm.current.classList.replace("opacity-100", "opacity-0");
    //     }
    // })



    return (
        <div className="patient-card relative flex flex-col text-center text-gray-400 border border-[.2em] border-dashed border-gray-300 rounded-md p-5 gap-y-3 h-56 justify-between">
            <a onClick={expandRequestForm} href="#" className="patient-card-btn text-8xl font-extralight">+</a>
            <div>
                <p>Click here to request data for a specific patient</p>
            </div>




            <div ref={requestDataForm} className="request-form flex flex-col gap-y-4 absolute top-0 left-0 w-full h-0 overflow-hidden rounded-md bg-white drop-shadow-xl">
                <div className="flex flex-col items-end   gap-y-4 p-5 text-left">
                    <PatientRequestInput header={'Patient name:'} placeHolder={"Patient full name here"} classes={''} />
                    <PatientRequestInput header={'Patient id:'} placeHolder={"id number"} classes={''} />
                    <PatientRequestInput header={'Notes:'} placeHolder={"Anything helpful?"} classes={''} />
                    <RequestPatientCardSubmit />
                </div>
            </div>



        </div>
    )
}

export default RequestPatientCard;