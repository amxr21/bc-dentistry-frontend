import { useContext } from "react"
import { TeethContext } from "../../Context/TeethContext"

import ToothFraction from "./Tooth/ToothFraction"

import T from "../../images/teeth/t_1.svg"

console.log(T);

const ToothImgLink = (site) => {
    return `/src/assets/images/teeth/t_${site}.svg`
    
}

const Tooth = ({category, code, site, suf, icon}) => {
    const { toothSite, setToothSite } = useContext(TeethContext);



    const changeColorOnEnter = (e) => {
        e.target.style.fill = 'lightgray'
    }
    const changeColorOnLeave = (e) => {
        e.target.style.fill = "white"
    }

    const dir = site > 16 ? 'flex-col-reverse' : 'flex-col'

    return (
        <div onClick={() => {setToothSite(site)}} className={`relative flex ${dir} w-fit tooth`}>
            {site <= 16 
            ?
            <div className="flex flex-col items-center justify-center w-16 h-28 bg-gray-50 rounded-md">
                <img className="disable scale-[190%] rotate-180" src={ToothImgLink(site)} alt="" /> 
            </div>
            :
            <div className="flex flex-col items-center justify-center w-16 h-24 bg-gray-50 rounded-md">
                <img className="scale-[190%]" src={ToothImgLink(site)} alt="" /> 
            </div>
            }
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