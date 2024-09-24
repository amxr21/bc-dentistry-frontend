import DentalChart from "./DentalChart";
import DentalInfo from "./DentalInfo";
import DetailInfo from "./DetailInfo";

import { useContext } from "react";
import { TeethContextContainer } from "../../Context/TeethContext";

const DentalRecord = ({dentalDetails}) => {

    // console.log(dentalDetails);
    
    return (
        <div className="DentalRecord bg-white rounded-md flex items-left flex flex-col gap-6 w-full px-16 py-6 h-[32em]">
            <h1 className="text-3xl font-bold">Dental Record</h1>
            <div className="flex justify-between gap-x-8 w-full">

                <TeethContextContainer>
                    <DentalChart dentalTeethDetails={dentalDetails}  />
                    <DentalInfo details={dentalDetails} />
                </TeethContextContainer>


            </div>
        </div>
    )
}

export default DentalRecord;