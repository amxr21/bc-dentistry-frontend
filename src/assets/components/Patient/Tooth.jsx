import { useContext } from "react"
import { TeethContext } from "../../Context/TeethContext"

import ToothFraction from "./Tooth/ToothFraction"


const Tooth = ({category, code, site, suf}) => {
    const { toothSite, setToothSite } = useContext(TeethContext);



    const changeColorOnEnter = (e) => {
        e.target.style.fill = 'lightgray'
    }
    const changeColorOnLeave = (e) => {
        e.target.style.fill = "white"
    }

    return (
        <div onClick={() => {setToothSite(site)}} className="relative w-fit tooth bg-red-800">

                <div onClick={()=>{console.log('-----')}} className="Occlusal centerPart bg-[lightgray] relative h-[52px] w-[65px]">
                    <svg
                        onClick={changeColorOnEnter}
                        onMouseLeave={changeColorOnLeave}
                        className="Occlusal h-full w-full" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 311.14">
                        <rect
                            width="400" height="311.14"
                            style={{fill:"white", stroke: '#000', strokeLnecap:'round', strokeLinejoin: 'round', strokeWidth:"1px"}}
                        />
                    </svg>


                    {
                        Object.entries(suf).map((side) => {
                            return <>
                                <ToothFraction
                                    type={"Mesial"}
                                    status={side[0]['Status']}
                                    preAuth={side[0]['Pre_Auth']}
                                    phase={side[0]['Phase']}
                                    discipline={side[0]['Discipline']}
                                    diagnosis={side[0]['Diagnosis']}
                                    notes={side[0]['Notes']}
                                    estimate={side[0]['Estimate']}
                                    doctorId={side[0]['Doctor_ID']}
                                    auditDate={side[0]['Audit_Date']}
                                    createdDate={side[0]['Created_Date']}
                                />
                                <ToothFraction
                                    type={"Lingual"}
                                    status={side[0]['Status']}
                                    preAuth={side[0]['Pre_Auth']}
                                    phase={side[0]['Phase']}
                                    discipline={side[0]['Discipline']}
                                    diagnosis={side[0]['Diagnosis']}
                                    notes={side[0]['Notes']}
                                    estimate={side[0]['Estimate']}
                                    doctorId={side[0]['Doctor_ID']}
                                    auditDate={side[0]['Audit_Date']}
                                    createdDate={side[0]['Created_Date']}
                                />
                                <ToothFraction
                                    type={"Distal"}
                                    status={side[0]['Status']}
                                    preAuth={side[0]['Pre_Auth']}
                                    phase={side[0]['Phase']}
                                    discipline={side[0]['Discipline']}
                                    diagnosis={side[0]['Diagnosis']}
                                    notes={side[0]['Notes']}
                                    estimate={side[0]['Estimate']}
                                    doctorId={side[0]['Doctor_ID']}
                                    auditDate={side[0]['Audit_Date']}
                                    createdDate={side[0]['Created_Date']}
                                />
                                <ToothFraction
                                    type={"Buccal"}
                                    status={side[0]['Status']}
                                    preAuth={side[0]['Pre_Auth']}
                                    phase={side[0]['Phase']}
                                    discipline={side[0]['Discipline']}
                                    diagnosis={side[0]['Diagnosis']}
                                    notes={side[0]['Notes']}
                                    estimate={side[0]['Estimate']}
                                    doctorId={side[0]['Doctor_ID']}
                                    auditDate={side[0]['Audit_Date']}
                                    createdDate={side[0]['Created_Date']}
                                />
                            </>
                        })
                    }

                </div>


        </div>
    )

}

export default Tooth;