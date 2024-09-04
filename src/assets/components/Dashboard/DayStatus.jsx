import { useState } from "react";

const DayStatus = ({appointmentStatus,dayDate}) => {
    let num = {};


    Object.keys(appointmentStatus).forEach((date) => {
        if(date.split(".")[0] == dayDate){ 
            num[date] = appointmentStatus[date] 
        }
    })


    return (
        <>
            <div className="day-status flex flex-col items-center w-14 px-2">
                <div className="appointments-bubbles flex items-end w-10 h-8 mb-2 flex flex-wrap gap-x-2 gap-y-1 justify-center">
                {
                    Object.entries(num)[0] ? Object.entries(num)[0][1].map((date) => {
                        switch(date.status){
                            case "confirmed":
                                return <div key={Math.random(0,9)} className="bubble p-0 w-3 h-3 bg-green-500 rounded-full"></div>
                            case "pending" :
                                return <div key={Math.random(0,9)} className="bubble p-0 w-3 h-3 bg-yellow-500 rounded-full"></div>
                            case "canceled" :
                                return <div key={Math.random(0,9)} className="bubble p-0 w-3 h-3 bg-red-500 rounded-full"></div>
                            default:
                                return <div key={Math.random(0,9)} className="bubble p-0 w-3 h-3 bg-gray-200 rounded-full"></div>

                        }
                    })
                    : ''
                }
                </div>
            </div>
            <div className="day-date w-[1.55em] h-[1.55em] flex items-center justify-center text-3xl font-bold bg-gray-200 p-1 rounded-lg">
                {dayDate}
            </div>
        </>
    )
}
 

export default DayStatus;

//<div className="bubble p-0 w-3 h-3 bg-red-500 rounded-full"></div>