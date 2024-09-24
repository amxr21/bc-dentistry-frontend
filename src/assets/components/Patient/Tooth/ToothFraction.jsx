import { useContext } from "react";
import { TeethContext } from "../../../Context/TeethContext";

const ToothFraction = ({type, status, preAuth, phase, discipline, diagnosis, notes, estimate, doctorId, auditDate, createdDate}) => {

    const { toothFraction, setToothFraction } = useContext(TeethContext);


    const changeColorOnEnter = (e) => {
        console.log(type);
        e.target.style.fill = 'lightgray'
        setToothFraction(type)
        console.log(toothFraction);
        
    }
    const changeColorOnLeave = (e) => {
        // setTimeout(()=>{
            // setToothFraction('')
            // e.target.style.fill = "white"
        // }, 5000)
    }


    switch(type){
        case "Mesial":
            return (
                <div className="Mesial side absolute h-full top-0 right-0">
                    <svg
                        id="Layer_1"
                        onClick={changeColorOnEnter}
                        onMouseLeave={changeColorOnLeave}
                        className="h-full w-full"
                        dataName="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 86.04 246.52"
                    >
                        <polygon points="86.04 3.26 86.04 243.25 0 174.42 0 72.09 86.04 3.26" style={{fill:"white", stroke:"#000", strokeLinecap:'round', strokeLinejoin:"round", strokeWidth:'1px'}}/>
                    </svg>
                </div>
            )


        case "Distal":
            return (
                <div className="Distal side absolute h-full bottom-0 left-0 rotate-180 ">
                    <svg
                        id="Layer_1"
                        onClick={changeColorOnEnter}
                        onMouseLeave={changeColorOnLeave}
                        className="h-full w-full"
                        dataName="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 86.04 246.52"
                    >
                        <polygon points="86.04 3.26 86.04 243.25 0 174.42 0 72.09 86.04 3.26" style={{fill:"white", stroke:"#000", strokeLinecap:'round', strokeLinejoin:"round", strokeWidth:'1px'}}/>
                    </svg>
                </div>
            )


        case "Buccal":
            return (
                <div className="D top absolute top-0">
                    <svg
                        id="Layer_1"
                        onClick={changeColorOnEnter}
                        onMouseLeave={changeColorOnLeave}
                        className="h-full w-full"
                        dataName="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 68.83"
                    >
                        <polygon points="300 0 213.96 68.83 86.04 68.83 0 0 300 0" style={{fill: "white", stroke:"#000", strokeLinecap: "round", strokeLinejoin: 'round', strokeWidth: "1px"}}/>
                    </svg>

                </div>
            )


        case "Lingual":
            return (
                <div className="L bottom absolute bottom-0 rotate-180">
                    <svg 
                        id="Layer_2"
                        onClick={changeColorOnEnter}
                        onMouseLeave={changeColorOnLeave}
                        className="h-full w-full"
                        dataName="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 68.83"
                    >
                        <polygon points="300 0 213.96 68.83 86.04 68.83 0 0 300 0" style={{fill: "white", stroke:"#000", strokeLinecap: "round", strokeLinejoin: 'round', strokeWidth: "1px"}}/>
                    </svg>
                </div>
            )


        // case "Lingual":
        //     return (
        //         <div className="M side absolute h-full top-0 right-0">
        //             <svg
        //                 id="Layer_1"
        //                 onClick={changeColorOnEnter}
        //                 onMouseLeave={changeColorOnLeave}
        //                 className="h-full w-full"
        //                 dataName="Layer 1"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 viewBox="0 0 86.04 246.52"
        //             >
        //                 <polygon points="86.04 3.26 86.04 243.25 0 174.42 0 72.09 86.04 3.26" style={{fill:"white", stroke:"#000", strokeLinecap:'round', strokeLinejoin:"round", strokeWidth:'1px'}}/>
        //             </svg>
        //         </div>
        //     )


        // default:
        //     return (
        //         <div className="M side absolute h-full top-0 right-0">
        //             <svg
        //                 id="Layer_1"
        //                 onClick={changeColorOnEnter}
        //                 onMouseLeave={changeColorOnLeave}
        //                 className="h-full w-full"
        //                 dataName="Layer 1"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 viewBox="0 0 86.04 246.52"
        //             >
        //                 <polygon points="86.04 3.26 86.04 243.25 0 174.42 0 72.09 86.04 3.26" style={{fill:"white", stroke:"#000", strokeLinecap:'round', strokeLinejoin:"round", strokeWidth:'1px'}}/>
        //             </svg>
        //         </div>
        //     )


        }

}

export default ToothFraction;