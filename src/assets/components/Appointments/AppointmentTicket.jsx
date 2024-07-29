import { useRef } from "react";

const AppointmentTicket = ({date, time, reason, dr, id, name, status}) => {

    const expandBtn = useRef('expand-options-button');

    const showOptions = (e) => {
        console.log(e.target.nextSibling)
        e.target.nextSibling.classList.replace('h-0','h-[8.5em]')
        // e.target.nextSibling.classList.replace('opacity-0','opacity-100')
        setTimeout(() =>{
            e.target.nextSibling.classList.replace('-z-10','z-10')

        }, 100)
    }

    window.addEventListener('click', (e) => {
        if(![...e.target.classList].includes('appointmentsOptions') ){
            if(![...e.target.classList].includes('expand-options-button')){
                document.querySelectorAll('.appointmentsOptions').forEach((a) => {
                    a.classList.replace('h-[8.5em]','h-0')
                    // a.classList.replace('opacity-100','opacity-0')
                    setTimeout(() =>{
                        a.classList.replace('z-10','-z-10')

                    }, 200)
                })
            }

        }
    })



    return (
        <div className="appointment-ticket col-span-3 bg-white p-5 flex flex-col gap-y-3 rounded-md">
            <div className="for">
                <div className="date-time bg-blue-900 flex items-center justify-between w-full px-3 py-2 text-white rounded-md mb-2">
                    <div className="date">{date}</div>
                    <div className="time">{time}</div>
                </div>
                <div className="reason text-2xl font-bold">{reason}</div>
                <div className="type-dr text-lg font-semibold">Dr. {dr}</div>
            </div>
            <div className="line border-b border-b-2"></div>
            <div className="details">
                <div className="id text-gray-300">ID: {id}</div>
                <div className="patient-name text-2xl font-bold">{name}</div>
                <div className="status font-semibold">{status}</div>
                <div className="options relative">
                    <div className=" py-1 text-center border border-blue-800 mt-4 rounded-md font-semibold text-lg">
                        <button ref={expandBtn} onClick={showOptions} className="expand-options-button z-[9999]">More Options</button>
                        <ul className="appointmentsOptions absolute border-blue-800 border-2 border-l-2 bg-white flex flex-col w-full top-10 left-0 rounded-md h-0 overflow-hidden -z-10 drop-shadow-xl">
                            <li className="py-1 border-b-2 cursor-pointer">Mark as Done</li>
                            <li className="py-1 border-b-2 cursor-pointer">Postpone Appointment</li>
                            <li className="py-1 border-b-2 cursor-pointer">Cancel Appointment</li>
                            <li className="py-1 border-b-2 cursor-pointer">Cancel Appointment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AppointmentTicket;