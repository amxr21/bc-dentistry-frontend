import { useContext, useState } from "react";
import { TeethContext } from "../../Context/TeethContext";

import Data from "../../../../data";
import { useLocation } from "react-router-dom";

const DentalInfo = ({details}) => {
    const patientId = useLocation().pathname.split('/')[2];

    const {toothSite, setToothSite} = useContext(TeethContext);

    let a = Data.filter((patient)=>{
        return patient.id == patientId
    })


    if(toothSite){
        // console.log(toothSite);
        // console.log(a[0]['dental-details'].teeth);
        console.log(a[0]['dental-details'].teeth[toothSite]);
        console.log('\n\n');

    }


    if(a[0]['dental-details'].teeth[toothSite]){
        console.log(a[0]['dental-details'].teeth[toothSite]['Suf']['Mesial']);
    return (
        <div className="info flex flex-wrap gap-x-4 w-4/12 overflow-hidden">
            <div className="flex bg">
                <h4 className="font-bold">Site:</h4>
                <p>{toothSite}</p>
            </div>

            <div className="flex">
                <h4 className="font-bold">Category:</h4>
                <p>{a[0]['dental-details'].teeth[toothSite]['Category']}</p>
            </div>

            <div className="flex">
                <h4 className="font-bold">Code:</h4>
                <p>{a[0]['dental-details'].teeth[toothSite]['Code']}</p>
            </div>


            <div className="flex flex-col grow w-full">
                <h3 className="text-2xl font-bold">Suf:</h3>
                <div className="grid grid-cols-3">
                    {
                        Object.entries(a[0]['dental-details'].teeth[toothSite]['Suf']).map((e)=>{
                            return (
                                <div>
                                    <h4 className="text-xl font-semibold">{e[0]}</h4>
                                    <p className="font-semibold">Status: <span className="font-light">{a[0]['dental-details'].teeth[toothSite]['Suf']['Mesial']['Status']}</span></p>
                                    <p className="font-semibold">Authorization: <span className="font-light">{a[0]['dental-details'].teeth[toothSite]['Suf']['Mesial']['Pre_Auth']}</span></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )}
}

export default DentalInfo;