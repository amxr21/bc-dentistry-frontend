import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Progress = ({progressName}) => {
    const hash = useLocation().hash;

    const a = {"#addNewPatient" : 'Profile Info', "#sp2" : 'Medical Record', "#sp3" : 'Insurance'}


    if(a[hash] == progressName){
        return (
            <div className="section-name flex gap-x-4 items-center">
                <div className="number w-12 h-12 rounded-full bg-white border border-white"></div>
                <div className="name text-xl font-bold">{progressName}</div>
            </div>
        )
    }

    else{
        return (
            <div className="section-name flex gap-x-4 items-center">
                <div className="number w-12 h-12 rounded-full bg-[#000834] border border-white"></div>
                <div className="name text-xl font-bold">{progressName}</div>
            </div>
        )
    }

}

export default Progress;